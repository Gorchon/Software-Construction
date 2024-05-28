import React, { useState } from "react";
import { fetchSpotifyApi } from "../../api/spotifyApi";

interface Track {
  id: string;
  name: string;
  artist: string;
}

export const Dashboard = () => {
  const [type, setType] = useState<string>("");
  const types = [
    "album",
    "artist",
    "playlist",
    "track",
    "show",
    "episode",
    "audiobook",
  ];

  const [form, setForm] = useState({
    search: "",
    artist: "",
  });

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [musicList, setMusicList] = useState<Track[]>([]);

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    const params = new URLSearchParams({
      q: `track:${event.target.value} artist:${form.artist}`,
      type: type,
    });
    const url = `https://api.spotify.com/v1/search?${params.toString()}`;
    const token = `Bearer ${localStorage.getItem("token")}`;

    try {
      const response = await fetchSpotifyApi(
        url,
        "GET",
        "null",
        "application/json",
        token
      );
      // Use optional chaining to handle cases where 'tracks' or 'items' are undefined
      const items = response.tracks?.items || [];
      setMusicList(
        items.map((item: any) => ({
          id: item.id,
          name: item.name,
          artist: item.artists[0]?.name || "Unknown Artist",
        }))
      );
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="h-full w-full flex flex-col items-center bg-gradient-to-b from-black to-gray-400 overflow-hidden">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Music Dashboard
      </h2>
      <input
        type="text"
        placeholder="Search music..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 w-80 rounded focus:outline-none focus:shadow-outline bg-white"
      />
      <select value={type} onChange={handleSelectChange} className="mb-4">
        {types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="artist"
        placeholder="Artists..."
        value={form.artist}
        onChange={handleChange}
        className="p-2 w-80 rounded focus:outline-none focus:shadow-outline bg-white mb-9"
      />
      <div className="bg-black bg-opacity-75 p-4 w-96 rounded-lg overflow-y-auto max-h-96">
        <ul className="list-none">
          {musicList.map((track) => (
            <li
              key={track.id}
              className="text-white text-lg py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
            >
              {`${track.name} - ${track.artist}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

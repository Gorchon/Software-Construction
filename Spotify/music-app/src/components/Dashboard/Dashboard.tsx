import React, { useState, useEffect } from "react";

// Define an interface for the music track items
interface Track {
  id: string;
  name: string;
  artist: string;
}

export const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [musicList, setMusicList] = useState<Track[]>([
    { id: "1", name: "Track 1", artist: "Artist A" },
    { id: "2", name: "Track 2", artist: "Artist B" },
    { id: "3", name: "Track 3", artist: "Artist C" },
    { id: "4", name: "Track 4", artist: "Artist D" },
    { id: "5", name: "Track 5", artist: "Artist E" },
    // Add more tracks for testing scroll
    { id: "6", name: "Track 6", artist: "Artist F" },
    { id: "7", name: "Track 7", artist: "Artist G" },
    { id: "8", name: "Track 8", artist: "Artist H" },
    { id: "9", name: "Track 9", artist: "Artist I" },
    { id: "10", name: "Track 10", artist: "Artist J" },
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Placeholder for future API fetch
  useEffect(() => {}, []);

  // Future function to fetch data from Spotify
  const fetchSpotifyData = async () => {
    // API call logic will be implemented here
  };

  return (
    <div className="h-full w-full flex flex-col items-center bg-gradient-to-b from-black to-gray-400 overflow-hidden ">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        Music Dashboard
      </h2>
      <input
        type="text"
        placeholder="Search music..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 w-80 rounded focus:outline-none focus:shadow-outline bg-white border-none"
      />
      <div className="bg-black bg-opacity-75 p-4 w-96 rounded-lg overflow-y-auto max-h-96 mt-10">
        <ul className="list-none">
          {musicList.map((track) => (
            <li
              key={track.id}
              className="text-white text-lg py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer "
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

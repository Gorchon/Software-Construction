import React, { useState, useEffect } from "react";
import { fetchSpotifyApi } from "../../api/spotifyApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleLogin = async (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default form submission
    const clientId = `34cc06dbed6f47a5948cd3cfded3a6d2`;
    const clientSecret = `b9ed8785dab24c968f929f1fbd35cd78ñ`;
    const url = `https://accounts.spotify.com/api/token`;
    const token = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
    const body = `grant_type=client_credentials`;
    navigate("/dashboard");
    try {
      const response = await fetchSpotifyApi(
        url,
        `POST`,
        body,
        `application/x-www-form-urlencoded`,
        token
      );
      // localStorage.setItem("token", response.access_token);
      console.log(response);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(to bottom, #000000, #C0C0C0)", // Black to silver gradient
      }}
    >
      <div className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Login to Spotify
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              value={formData.username}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              value={formData.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button" // Changed to button to prevent default form submission
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

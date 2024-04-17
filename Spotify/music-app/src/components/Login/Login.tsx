import React from "react";

const Login = () => {
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

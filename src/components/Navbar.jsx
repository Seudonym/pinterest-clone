import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ minimal }) => {
  const [showOption, setShowOptions] = useState(false);
  const [option, setOption] = useState(["Today"]);

  if (minimal)
    return (
      <div className="flex justify-between items-center font-medium font-sans p-5 fixed w-full top-0 z-50 bg-white">
        <div className="flex items-center gap-6">
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                src="/logo_transparent.png"
                alt="Pinterest logo"
                width={45}
              />
              <p className="text-xl tracking-tighter text-red-700 font-bold">
                Pinterest
              </p>
            </div>
          </Link>

          <div
            className="bg-gray-300 px-5 py-3 rounded-full relative"
            onClick={() => setShowOptions(!showOption)}
          >
            {option}
            {showOption && (
              <div className="flex flex-col rounded-3xl bg-white border-2 border-black  p-3 absolute top-16 right-1">
                <div
                  className="hover:bg-gray-200 p-2 rounded-xl"
                  onClick={() => {
                    setOption("Today");
                    setShowOptions(false);
                  }}
                >
                  Today
                </div>
                <div
                  className="hover:bg-gray-200 p-2 rounded-xl"
                  onClick={() => {
                    setOption("Explore");
                    setShowOptions(false);
                  }}
                >
                  Explore
                </div>
                <div
                  className="hover:bg-gray-200 p-2 rounded-xl"
                  onClick={() => {
                    setOption("Watch");
                    setShowOptions(false);
                  }}
                >
                  Watch
                </div>
              </div>
            )}
          </div>
        </div>

        <input
          className="bg-gray-300 rounded-3xl p-3 px-5 text-gray-400 flex-grow mx-6"
          placeholder="Search..."
        />

        <div className="flex gap-8">
          <div className="flex items-center gap-6">
            <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
              About
            </div>
            <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
              Business
            </div>
            <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
              Blog
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-lg bg-red-600 text-white px-4 py-2 rounded-full">
              Log in
            </div>
            <div className="text-lg bg-gray-300 px-4 py-2 rounded-full">
              Sign up
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex justify-between font-medium font-sans p-5 fixed w-full top-0 z-50 bg-white">
      <div className="flex items-center gap-6">
        <Link to={"/"}>
          <div className="flex items-center">
            <img src="/logo_transparent.png" alt="Pinterest logo" width={45} />
            <p className="text-xl tracking-tighter text-red-700 font-bold">
              Pinterest
            </p>
          </div>
        </Link>

        <Link to="explore">
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            Today
          </div>
        </Link>
        <Link to="explore">
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            Explore
          </div>
        </Link>
        <Link to="explore">
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            Watch
          </div>
        </Link>
      </div>

      <div className="flex gap-8">
        <div className="flex items-center gap-6">
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            About
          </div>
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            Business
          </div>
          <div className="hover:bg-gray-300 hover:rounded-lg p-2 text-lg">
            Blog
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-lg bg-red-600 text-white px-4 py-2 rounded-full">
            Log in
          </div>
          <div className="text-lg bg-gray-300 px-4 py-2 rounded-full">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <div className="flex justify-between font-medium font-sans p-5 fixed w-full top-0 z-50 bg-white">
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <img src="/logo_transparent.png" alt="Pinterest logo" width={45} />
          <p className="text-xl tracking-tighter text-red-700 font-bold">
            Pinterest
          </p>
        </div>
        <div className="text-lg">Today</div>
        <div className="text-lg">Watch</div>
        <div className="text-lg">Explore</div>
      </div>

      <div className="flex gap-8">
        <div className="flex items-center gap-6">
          <div className="text-lg">About</div>
          <div className="text-lg">Business</div>
          <div className="text-lg">Blog</div>
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

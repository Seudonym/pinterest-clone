import ImageStack from "./ImageStack";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-60 h-screen overflow-hidden">
        <div className="flex flex-col gap-6 items-center">
          <div className="text-6xl font-medium">Get your next</div>
          <div className="text-6xl font-medium text-green-700">outfit idea</div>
        </div>
        <div className="flex gap-3 relative">
          <ImageStack imgs={["001.jpg", "002.jpg"]} offset={-50} />
          <ImageStack imgs={["003.jpg", "004.jpg"]} offset={80} />
          <ImageStack imgs={["005.jpg", "006.jpg"]} offset={220} />
          <ImageStack imgs={["007.jpg", "008.jpg"]} offset={330} />
          <ImageStack imgs={["009.jpg", "010.jpg"]} offset={220} />
          <ImageStack imgs={["011.jpg", "012.jpg"]} offset={80} />
          <ImageStack imgs={["013.jpg", "014.jpg"]} offset={-50} />
        </div>
        <div className="flex justify-center absolute bg-yellow-200 font-semibold shadow-[0_-17px_25px_0_rgba(254,240,240,0.7)] bottom-0 w-full p-5">
          Here's how it works
        </div>
      </div>

      <div className="bg-yellow-200 h-dvh grid grid-cols-2 grid-rows-1 justify-items-center place-items-center">
        <div className="col-start-1 relative w-full flex justify-center">
          <div className="flex items-center gap-2 absolute bottom-64 left-72 text-purple-900 font-semibold z-20 bg-white p-6 rounded-full bg-whitep-6 text-2xl">
            <img src="search.svg" alt="search icon" />
            <p>easy chicken dinner</p>
          </div>

          <img src="115.png" alt="Chicken" className="z-10 w-72" />

          <img
            src="tr.png"
            alt="Topright fried chicken"
            className="w-48 bottom-72 right-56 absolute"
          />

          <img
            src="r.png"
            alt="Right"
            className="w-48 top-64 right-56 absolute"
          />

          <img
            src="l.png"
            alt="Chicken left"
            className="w-48 top-12 left-64 absolute"
          />
        </div>

        <div className="flex flex-col items-center p-56 text-center gap-5 text-red-700">
          <div className="text-6xl font-bold">Search for an idea</div>
          <div className="text-2xl">
            What do you want to try next? Think of something you’re into—like
            “easy chicken dinner”—and see what you find.
          </div>
          <div className="bg-red-600 rounded-full px-5 py-3 text-white">
            Explore
          </div>
        </div>
      </div>

      <div className="bg-teal-100 h-screen grid grid-cols-2 grid-rows-1 justify-items-center place-items-center">
        <div className="flex flex-col items-center text-center gap-5 text-teal-700">
          <div className="text-6xl font-bold">Save ideas you like</div>
          <div className="text-2xl px-72">
            Collect your favorites so you can get back to them later.
          </div>
          <div className="bg-red-600 rounded-full px-5 py-3 text-white">
            Explore
          </div>
        </div>

        <div className="grid grid-rows-3 grid-cols-3 px-40 gap-10">
          <img
            src="grid1.png"
            alt="Fern bg"
            className="col-span-2 row-span-2"
          />
          <img src="grid2.png" alt="Fern bg" className="" />
          <img src="grid3.png" alt="Fern bg" className="" />
          <img src="grid4.png" alt="Fern bg" className="col-start-2" />
          <img src="grid1.png" alt="Fern bg" className="relative top-10 " />
        </div>
      </div>

      <div className="bg-pink-200 h-dvh grid grid-cols-2 grid-rows-1 justify-items-center place-items-center">
        <div className="col-start-1 w-full h-full">
          <img
            src="leftmain.png"
            alt="A girl"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center p-64 text-center gap-5 text-pink-700">
          <div className="text-6xl font-bold">
            See it, make it,<br></br> try it, do it
          </div>
          <div className="text-2xl">
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </div>
          <div className="bg-red-600 rounded-full px-5 py-3 text-white">
            Explore
          </div>
        </div>
      </div>

      {/* Final page bg */}
      <div className="flex justify-center w-full">
        <div className=" h-full gap-3 grid grid-cols-7 grid-rows-2 justify-items-center place-items-center absolute overflow-hidden">
          <ImageStack imgs={["015.jpg", "016.jpg", "017.jpg"]} offset={250} />
          <ImageStack imgs={["018.jpg", "019.jpg", "020.jpg"]} offset={120} />
          <ImageStack imgs={["021.jpg", "022.jpg", "023.jpg"]} offset={250} />
          <ImageStack imgs={["024.jpg", "025.jpg", "045.jpg"]} offset={120} />
          <ImageStack imgs={["027.jpg", "028.jpg", "029.jpg"]} offset={250} />
          <ImageStack imgs={["030.jpg", "031.jpg", "032.jpg"]} offset={120} />
          <ImageStack imgs={["033.jpg", "034.jpg", "035.jpg"]} offset={250} />
        </div>
      </div>
      {/* Final page */}
      <div className=" h-dvh grid grid-cols-2 grid-rows-1 justify-items-center place-items-center bg-[#000000aa] relative">
        <div className="flex flex-col w-full h-full justify-center text-white font-bold p-64 leading-normal items-center text-7xl">
          Sign up to get your ideas
        </div>

        <div className="flex flex-col items-center px-20 py-10 rounded-3xl gap-8 bg-white">
          <img src="logo_transparent.png" alt="" width={45} />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-gray-800">Welcome to Pinterest</h1>
            <p>Find new ideas to try</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 items-start">
              <label htmlFor="email" className="ml-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border-2 border-gray-300 p-3 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <label htmlFor="pass" className="ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-gray-300 p-3 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-3 items-start ">
              <label htmlFor="bday" className="ml-1">
                Birthdate
              </label>
              <input
                type="date"
                placeholder=""
                className="border-2 border-gray-300 p-3 px-14 rounded-2xl "
              />
            </div>

            <div className="rounded-full px-5 py-3 bg-red-600 font-semibold text-white text-center">
              Continue
            </div>
            <div className="rounded-full flex justify-around px-5 py-3 font-semibold text-gray-600 text-center border-2">
              <img src="image.svg" width={20} />
              <p>Continue with Google</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white text-xs absolute z-10 bottom-0 text-black flex justify-center gap-5 p-3 font-semibold w-full">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Help</p>
          <p>Iphoone App</p>
          <p>Android App</p>
          <p>Users</p>
          <p>Collections</p>
          <p>Shopping</p>
          <p>Today</p>
          <p>Explore</p>
          <p>Watch</p>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

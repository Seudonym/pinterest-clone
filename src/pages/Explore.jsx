import Navbar from "../components/Navbar";
import ImageCard from "../components/ImageCard";
import ImageStack from "../components/ImageStack";

const Explore = () => {
  return (
    <>
      <Navbar minimal={true} />

      <div className="flex flex-col items-center gap-10 pt-40 mb-10">
        <h1 className="text-4xl font-bold">Explore the best of Pinterest</h1>
        <div className="flex gap-8 w-full justify-center">
          <ImageCard
            bg="045.jpg"
            title="Find what to eat"
            buttonText={"View more"}
            styleOverride={"w-96 h-80"}
          />
          <ImageCard
            bg="042.jpg"
            title="Celebrate"
            buttonText={"Check out"}
            styleOverride={"w-96 h-80"}
          />
          <ImageCard
            bg="041.jpg"
            styleOverride={"w-96 h-80"}
            title="DIY"
            buttonText={"Make"}
          />
        </div>
        <div className="font-semibold">Discover interests</div>
      </div>

      <div className="grid grid-cols-5 gap-3 grid-rows-2 px-20">
        <ImageCard
          bg="040.jpg"
          title="Flowers"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="037.jpg"
          title="Houses"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="036.jpg"
          title="Electronics"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="035.jpg"
          title="Travel"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="031.jpg"
          title="Culture"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />

        <ImageCard
          bg="032.jpg"
          title="Food"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="033.jpg"
          title="Art"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="023.jpg"
          title="Denim"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="027.jpg"
          title="Festive"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
        <ImageCard
          bg="025.jpg"
          title="Nature"
          button={false}
          styleOverride={"justify-center items-center h-28"}
        />
      </div>

      <div className="font-semibold text-center my-10">
        Explore popular ideas
      </div>
      <div className="grid grid-cols-7 px-20 mb-64">
        <ImageStack imgs={["075.jpg", "076.jpg", "077.jpg", "078.jpg", "079.jpg"]} offset={120} />
        <ImageStack imgs={["080.jpg", "081.jpg", "082.jpg", "083.jpg", "084.jpg"]} offset={250} />
        <ImageStack imgs={["085.jpg", "086.jpg", "087.jpg", "088.jpg", "089.jpg"]} offset={120} />
        <ImageStack imgs={["090.jpg", "091.jpg", "092.jpg", "093.jpg", "094.jpg"]} offset={250} />
        <ImageStack imgs={["095.jpg", "096.jpg", "097.jpg", "098.jpg", "099.jpg"]} offset={120} />
        <ImageStack imgs={["100.jpg", "101.jpg", "102.jpg", "110.jpg", "104.jpg"]} offset={250} />
        <ImageStack imgs={["105.jpg", "106.jpg", "107.jpg", "108.jpg", "109.jpg"]} offset={120} />
      </div>

    </>
  );
};

export default Explore;

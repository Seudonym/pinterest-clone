const ImageStack = ({ imgs, offset }) => {
  return (
    <div style={{ top: offset }} className="flex flex-col gap-3 relative">

      {imgs.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          className={`w-60 h-96 object-cover rounded-3xl`}
        />
      ))}

    </div>
  );
};

export default ImageStack;

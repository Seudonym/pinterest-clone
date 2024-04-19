const ImageCard = ({ bg, title, button, buttonText, styleOverride }) => {
  return (
    <div
      className={
        "flex flex-col justify-end p-5 gap-5 rounded-3xl " + styleOverride
      }
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundColor: "rgba(0, 0, 0, 0.4)", backgroundBlendMode: "multiply"}}
    >
      <div className="text-white font-semibold text-4xl">{title}</div>
      {button ?? (
        <div className="px-4 py-2 rounded-3xl bg-gray-200 text-black w-fit">
          {buttonText}
        </div>
      )}
    </div>
  );
};

export default ImageCard;

import { useEffect, useState } from "react";

export default function Slider({ images }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex(index =>
        index === images.length - 1 ? 0 : index + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative rounded-md overflow-hidden shadow-xl w-[90%] h-[90%]">
        <img
          src={images[currentImgIndex]}
          className="w-full h-full object-contain md:object-fill transition-opacity duration-500 ease-in-out hover:opacity-90"
          alt="img"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full p-2"
            onClick={() =>
              setCurrentImgIndex(prevIndex =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
          >
            &lt;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full p-2"
            onClick={() =>
              setCurrentImgIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

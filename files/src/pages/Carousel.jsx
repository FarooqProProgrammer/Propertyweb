import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = () => {
  const items = [
    {
      image: "https://source.unsplash.com/random/800x600",
      title: "Item 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const numItems = items.length;

  const handlePrevClick = () => {
    const index = (currentIndex - 1 + numItems) % numItems;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = (currentIndex + 1) % numItems;
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } absolute top-0 left-0 w-full h-full transition-opacity transform`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 text-white bg-black bg-opacity-50 rounded-full md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={handlePrevClick}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 text-white bg-black bg-opacity-50 rounded-full md:hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={handleNextClick}
      >
        <AiOutlineArrowRight />
      </button>
      <div className="hidden md:block absolute top-0 bottom-0 right-0 flex items-center">
        <button
          className="px-4 py-2 text-white bg-black bg-opacity-50 rounded-l-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={handlePrevClick}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className="px-4 py-2 text-white bg-black bg-opacity-50 rounded-r-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          onClick={handleNextClick}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

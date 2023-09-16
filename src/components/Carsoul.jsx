import React, { useState } from 'react';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import img1 from '../assets/image/store1.avif';
import img2 from '../assets/image/store2.avif';
import img3 from '../assets/image/store3.jpg';

const Carsoul = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const images = [img1, img2,img3];
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

  return (
    <div className="relative ">
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        className="w-full sm:h-[450px]"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
        <div
          className="bg-zinc-800 p-4 text-white cursor-pointer"
          onClick={prevImage}
        >
          <MdArrowBackIosNew size={20} />
        </div>
        <div
          className="bg-zinc-800 p-4 text-white cursor-pointer"
          onClick={nextImage}
        >
          <MdOutlineArrowForwardIos size={20} />
        </div>
      </div>
    </div>
  );
};

export default Carsoul;

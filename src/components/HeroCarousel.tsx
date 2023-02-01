import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import HeroImage1 from "../images/orange-living-room-accent-wall.jpg";
import HeroImage2 from "../images/orange-living-room-accent-wall2.jpg";
import HeroImage3 from "../images/orange-living-room-accent-wall3.jpg";

export default function HeroCarousel() {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute z-10">
        <div className="relative flex flex-col">
          <h1 className="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mx-[15vw] max-w-[900px]">
            Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL
          </h1>
        </div>
      </div>
      <Carousel
        fade
        interval={4500}
        className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] mx-auto carousel-arrows"
      >
        <Carousel.Item>
          <div className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] absolute bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage1}
            alt=""
            className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] absolute bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage2}
            alt=""
            className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] absolute bg-gradient-to-t from-transparent to-black opacity-50"></div>
          <Image
            src={HeroImage3}
            alt=""
            className="w-full h-[30vh] sm:h-[40vh] md:h-[720px] object-cover"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import HeroImage1 from '../../images/orange-living-room-accent-wall.jpg'
import HeroImage2 from '../../images/orange-living-room-accent-wall2.jpg'
import HeroImage3 from '../../images/orange-living-room-accent-wall3.jpg'

export default function HeroCarousel() {
  return (
    <div className='flex items-center justify-center'>
      <div className='absolute z-10'>
        <div className='relative flex flex-col'>
          <h1 className='mx-[15vw] max-w-[900px] text-center text-lg font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
            Services de RÉNOVATION RÉSIDENTIELLE
          </h1>
        </div>
      </div>
      <Carousel
        fade
        interval={4500}
        className='carousel-arrows mx-auto h-[30vh] w-full sm:h-[40vh] md:h-[720px]'
      >
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage1}
            alt=''
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage2}
            alt=''
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='absolute h-[30vh] w-full sm:h-[40vh] md:h-[720px]'></div>
          <Image
            src={HeroImage3}
            alt=''
            className='h-[30vh] w-full object-cover sm:h-[40vh] md:h-[720px]'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

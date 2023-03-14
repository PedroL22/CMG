import React, { type TouchEvent, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { HiSelector } from 'react-icons/hi'
import useModal from '@/stores/useModal'

type SliderProps = {
  Image1: StaticImageData
  Image2: StaticImageData
}

export default function ImageSlider({ Image1, Image2 }: SliderProps) {
  const [imageRevealFraction, setImageRevealFraction] = useState(0.5)
  const imageContainer = useRef<HTMLDivElement>(null)

  const slide = (xPosition: number): void => {
    const containerBoundingRect =
      imageContainer.current?.getBoundingClientRect()
    if (containerBoundingRect) {
      setImageRevealFraction(() => {
        if (xPosition < containerBoundingRect.left) {
          return 0
        }

        if (xPosition > containerBoundingRect.right) {
          return 1
        }

        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        )
      })
    }
  }

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX)
  }

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseUp = (): void => {
    window.onmousemove = null
    window.onmouseup = null
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    slide(event.touches.item(0).clientX)
  }

  const { setModal, setModalImage, setModalTitle } = useModal()

  const handleClickImage1 = () => {
    setModal(true)
    setModalImage(Image1)
    setModalTitle('Avant')
  }

  const handleClickImage2 = () => {
    setModal(true)
    setModalImage(Image2)
    setModalTitle('Après')
  }

  return (
    <div
      ref={imageContainer}
      className='select-none max-w-lg w-full mx-auto relative'
    >
      <div className='flex justify-start'>
        <div
          className='bg-black opacity-70 w-1/2 h-20 absolute z-10 top-72'
          onClick={handleClickImage1}
        >
          <h3 className='text-center mt-3 opacity-100 text-white cursor-pointer hover:underline'>
            Avant
          </h3>
        </div>
        <Image
          src={Image2}
          alt=''
          className='object-cover h-[23rem] pointer-events-none'
        />
      </div>
      <div className='flex justify-end'>
        <div
          className='bg-black opacity-70 w-1/2 h-20 absolute z-10 top-72'
          onClick={handleClickImage2}
        >
          <h3 className='text-center mt-3 opacity-100 text-white cursor-pointer hover:underline'>
            Après
          </h3>
        </div>
        <Image
          src={Image1}
          alt=''
          className='object-cover h-[23rem] absolute inset-0 pointer-events-none'
          style={{
            clipPath: `polygon(
              0 0,
              ${imageRevealFraction * 100}% 0,
              ${imageRevealFraction * 100}% 100%,
              0 100%
              )`,
          }}
        />
      </div>
      <div
        className='absolute inset-y-0'
        style={{ left: `${imageRevealFraction * 100}%` }}
      >
        <div className='relative h-full'>
          <div className='absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50'></div>
          <div
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className='h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer'
            style={{ touchAction: 'none' }}
          >
            <HiSelector
              size={24}
              className='text-gray-400 rotate-90 transform'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

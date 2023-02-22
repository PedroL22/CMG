import React, {type TouchEvent, useRef, useState} from 'react';
import Image, {type StaticImageData} from 'next/image';
import {HiSelector} from 'react-icons/hi';

type SliderProps = {
	Image1: StaticImageData;
	Image2: StaticImageData;
};

export default function ImageSlider({Image1, Image2}: SliderProps) {
	const [imageRevealFraction, setImageRevealFraction] = useState(0.5);
	const imageContainer = useRef<HTMLDivElement>(null);

	const slide = (xPosition: number): void => {
		const containerBoundingRect = imageContainer.current?.getBoundingClientRect();
		if (containerBoundingRect) {
			setImageRevealFraction(() => {
				if (xPosition < containerBoundingRect.left) {
					return 0;
				}

				if (xPosition > containerBoundingRect.right) {
					return 1;
				}

				return (xPosition - containerBoundingRect.left) / containerBoundingRect.width;
			});
		}
	};

	const handleMouseMove = (event: MouseEvent): void => {
		slide(event.clientX);
	};

	const handleMouseDown = (): void => {
		window.onmousemove = handleMouseMove;
		window.onmouseup = handleMouseUp;
	};

	const handleMouseUp = (): void => {
		window.onmousemove = null;
		window.onmouseup = null;
	};

	const handleTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
		slide(event.touches.item(0).clientX);
	};

	return (
		<div ref={imageContainer} className='select-none max-w-lg w-full mx-auto relative'>
			<Image
				src={Image2}
				alt=''
				className='object-cover h-56 pointer-events-none'
			/>
			<Image
				src={Image1}
				alt=''
				className='object-cover h-56 absolute inset-0 pointer-events-none'
				style={{
					clipPath: `polygon(
              0 0,
              ${imageRevealFraction * 100}% 0,
              ${imageRevealFraction * 100}% 100%,
              0 100%
              )`}}
			/>
			<div className='absolute inset-y-0'
				style={{left: `${imageRevealFraction * 100}%`}}>
				<div className='relative h-full'>
					<div className='absolute inset-y-0 bg-white w-0.5 -ml-px opacity-50'></div>
					<div
						onMouseDown={handleMouseDown}
						onTouchMove={handleTouchMove}
						className='h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer'
						style={{touchAction: 'none'}}>
						<HiSelector size={24} className='text-gray-400 rotate-90 transform'/>
					</div>
				</div></div>

		</div>
	);
}

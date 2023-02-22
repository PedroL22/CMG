import React from 'react';
import Head from 'next/head';
import ImageSlider from '@/components/ImageSlider';
import test from '../images/projects/1.jpeg';
import test2 from '../images/projects/2.jpeg';

export default function Projects() {
	return (
		<div className='font-sans'>
			<Head>
				<title>Projets | Custom Marco Guillermo</title>
				<meta
					name='description'
					content='Projets | Services de RÉNOVATION RÉSIDENTIELLE'
				/>
				<meta
					name='keywords'
					content='
            Montréal,
            nettoyage,
            peinture résidentiel,
            renovation residentielle,
            cleaning,
            house painting,
            projets'
				/>
				<meta name='author' content='Marco Antonio' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			{/* <div className='bg-black fixed z-0 w-full font-sans header h-32' /> */}
			<ImageSlider Image1={test} Image2={test2}/>
		</div>
	);
}

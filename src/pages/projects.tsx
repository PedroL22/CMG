import React from 'react'
import Head from 'next/head'
import ImageSlider from '@/components/ImageSlider'
import image1 from '../images/projects/1.jpeg'
import image2 from '../images/projects/2.jpeg'
import image3 from '../images/projects/3.jpeg'
import image4 from '../images/projects/4.jpeg'
import image5 from '../images/projects/5.jpeg'
import image6 from '../images/projects/6.jpeg'
import image7 from '../images/projects/7.jpeg'
import image8 from '../images/projects/8.jpeg'
import image9 from '../images/projects/9.jpeg'
import image10 from '../images/projects/10.jpeg'
import image11 from '../images/projects/11.jpeg'
import image12 from '../images/projects/12.jpeg'
import image13 from '../images/projects/13.jpeg'
import image14 from '../images/projects/14.jpeg'
import image15 from '../images/projects/15.jpeg'
import image16 from '../images/projects/16.jpeg'
import image17 from '../images/projects/17.jpeg'
import image18 from '../images/projects/18.jpeg'
import image19 from '../images/projects/19.jpeg'
import image20 from '../images/projects/20.jpeg'
import image21 from '../images/projects/21.jpeg'
import image22 from '../images/projects/22.jpeg'
import image23 from '../images/projects/23.jpeg'
import image24 from '../images/projects/24.jpeg'
import useModal from '@/stores/useModal'
import ImageModal from '@/components/ImageModal'

export default function Projects() {
  const { modal } = useModal()

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
        <meta
          name='author'
          content='Marco Antonio'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <div className='header fixed z-20 h-16 w-full bg-black font-sans md:h-32' />
      <ImageModal show={modal} />
      <div className='mx-auto flex min-h-screen max-w-5xl flex-col gap-3 px-3 pb-4 pt-24 md:grid md:grid-cols-2 md:pt-44'>
        <ImageSlider
          Image1={image1}
          Image2={image2}
        />
        <ImageSlider
          Image1={image3}
          Image2={image4}
        />
        <ImageSlider
          Image1={image5}
          Image2={image6}
        />
        <ImageSlider
          Image1={image7}
          Image2={image8}
        />
        <ImageSlider
          Image1={image9}
          Image2={image10}
        />
        <ImageSlider
          Image1={image11}
          Image2={image12}
        />
        <ImageSlider
          Image1={image13}
          Image2={image14}
        />
        <ImageSlider
          Image1={image15}
          Image2={image16}
        />
        <ImageSlider
          Image1={image17}
          Image2={image18}
        />
        <ImageSlider
          Image1={image19}
          Image2={image20}
        />
        <ImageSlider
          Image1={image21}
          Image2={image22}
        />
        <ImageSlider
          Image1={image23}
          Image2={image24}
        />
      </div>
    </div>
  )
}

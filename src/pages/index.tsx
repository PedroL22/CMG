import HeroCarousel from '../components/HeroCarousel'
import Head from 'next/head'
import Image from 'next/image'
import Section2Image from '../images/blue-living-room-accent-wall.jpeg'
import Section3Image from '../images/gray-living-room-accent-wall.jpeg'
import Section4Image from '../images/blue-living-room-accent-wall2.jpeg'

export default function Home() {
  return (
    <div className='font-sans'>
      <Head>
        <title>Custom Marco Guillermo</title>
        <meta
          name='description'
          content='Services de RÉNOVATION RÉSIDENTIELLE'
        />
        <meta
          name='keywords'
          content='Montréal, nettoyage, peinture résidentiel, renovation residentielle, cleaning, house painting'
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
      <main className='min-h-screen'>
        <section id='accueil'>
          <HeroCarousel />
        </section>
        <section
          className='p-6 sm:px-28 sm:py-16 md:px-32 md:py-20'
          id='a-propos'
        >
          <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:flex lg:w-[55rem] lg:gap-10'>
            <Image
              src={Section2Image}
              alt='blue living room accent wall'
              className='mt-2 h-48 object-cover  sm:h-56 md:h-72 lg:h-80 lg:w-[27rem]'
            />
            <div className='text-center-bug lg:-mt-11 lg:text-left'>
              <h2 className='pt-3 text-base font-bold sm:text-lg md:text-xl'>
                NOUS CRÉONS DES OPPORTUNITÉS POUR RENDRE DES ENVIRONNEMENTS
                BEAUX ET SPECTACULAIRES
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                C.M.G est une entreprise de rénovation résidentielle, depuis
                2018 offrant le mieux, on est engagé avec l&apos;excellence en
                inspirant les clients avec notre travaille.
              </p>
              <p className='text-sm sm:text-base md:text-lg'>
                Notre différence réside dans l&apos;agilité, l&apos;organisation
                de nos processus et l&apos;attention aux petits détails, offrant
                des résultats impeccables et incroyables.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-[#494947] p-6 sm:px-28 sm:py-16 md:px-32 md:py-20'>
          <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:flex lg:w-[55rem] lg:gap-10'>
            <div className='text-center-bug text-white lg:text-right'>
              <h2 className='text-base font-bold sm:text-lg md:text-xl lg:pt-10'>
                MISSION
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                Offrir la meilleure expérience visuelle que les gens souhaitent
                dans leur environnement, en les rendant beaux, propres et
                agréables. Pour cela, nous comptons sur la créativité, la
                concentration et la détermination qui, selon nous, sont des
                éléments essentiels pour répondre et dépasser les attentes.
              </p>
            </div>
            <Image
              src={Section3Image}
              alt='blue living room accent wall'
              className='mb-2 h-48 border-4 border-white object-cover sm:h-56 md:h-72 lg:mb-0 lg:h-80 lg:w-[27rem]'
            />
          </div>
        </section>
        <section className='p-6 sm:px-28 sm:py-16 md:px-32 md:py-20'>
          <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:flex lg:w-[55rem] lg:gap-10'>
            <Image
              src={Section4Image}
              alt='blue living room accent wall'
              className='mt-2 h-48 object-cover sm:h-56 md:h-72 lg:h-80 lg:w-[27rem]'
            />
            <div className='text-center-bug lg:text-left'>
              <h2 className='pt-3 text-base font-bold sm:text-lg md:text-xl'>
                VISION
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                Devenir une entreprise leader dans notre segment dans la région
                de Montréal, offrant aux gens inspiration, bien-être et joie.
              </p>
              <h2 className='pt-3 text-base font-bold sm:text-lg md:text-xl'>
                VALEURS
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                L&apos;honnêteté, le respect, la créativité et la concentration
                sont la somme de ce que nous sommes pour valoriser ceux qui
                croient et apprécient notre travail.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

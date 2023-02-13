import HeroCarousel from '../components/HeroCarousel';
import Head from 'next/head';
import Image from 'next/image';
import Section2Image from '../images/blue-living-room-accent-wall.jpeg';
import Section3Image from '../images/gray-living-room-accent-wall.jpeg';
import Section4Image from '../images/blue-living-room-accent-wall2.jpeg';
import Footer from '../components/Footer';

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
				<meta name='author' content='Marco Antonio' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.png' />
			</Head>
			<main>
				<section id='accueil'>
					<HeroCarousel />
				</section>
				<section
					className='p-6 sm:py-16 sm:px-28 md:py-20 md:px-32'
					id='a-propos'
				>
					<div className='mx-auto lg:flex lg:gap-10 w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
						<Image
							src={Section2Image}
							alt='blue living room accent wall'
							placeholder='blur'
							className='object-cover h-48 mt-2  sm:h-56 md:h-72 lg:h-80 lg:w-[27rem]'
						/>
						<div className='text-center-bug lg:text-left lg:-mt-11'>
							<h2 className='pt-3 font-bold text-base sm:text-lg md:text-xl'>
                NOUS CRÉONS DES OPPORTUNITÉS POUR RENDRE DES ENVIRONNEMENTS
                BEAUX ET SPECTACULAIRES
							</h2>
							<p className='text-sm sm:text-base md:text-lg'>
                C.M.G est une entreprise de rénovation résidentielle, depuis 2018 offrant le mieux, on est
                engagé avec l&apos;excellence en inspirant les clients avec
                notre travaille.
							</p>
							<p className='text-sm sm:text-base md:text-lg'>
                Notre différence réside dans l&apos;agilité, l&apos;organisation
                de nos processus et l&apos;attention aux petits détails, offrant
                des résultats impeccables et incroyables.
							</p>
						</div>
					</div>
				</section>
				<section className='bg-[#494947] p-6 sm:py-16 sm:px-28 md:py-20 md:px-32'>
					<div className='mx-auto lg:flex lg:gap-10 w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
						<div className='text-center-bug lg:text-right text-white'>
							<h2 className='lg:pt-10 font-bold text-base sm:text-lg md:text-xl'>
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
							placeholder='blur'
							className='object-cover h-48 mb-2 lg:mb-0 sm:h-56 md:h-72 lg:h-80 lg:w-[27rem] border-4 border-white'
						/>
					</div>
				</section>
				<section className='p-6 sm:py-16 sm:px-28 md:py-20 md:px-32'>
					<div className='mx-auto lg:flex lg:gap-10 w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
						<Image
							src={Section4Image}
							alt='blue living room accent wall'
							placeholder='blur'
							className='object-cover h-48 mt-2 sm:h-56 md:h-72 lg:h-80 lg:w-[27rem]'
						/>
						<div className='text-center-bug lg:text-left'>
							<h2 className='pt-3 font-bold text-base sm:text-lg md:text-xl'>
                VISION
							</h2>
							<p className='text-sm sm:text-base md:text-lg'>
                Devenir une entreprise leader dans notre segment dans la région
                de Montréal, offrant aux gens inspiration, bien-être et joie.
							</p>
							<h2 className='pt-3 font-bold text-base sm:text-lg md:text-xl'>
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
			<Footer/>
		</div>
	);
}

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../images/logo.png'
import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    const header = document.querySelector('.header')
    if (window.scrollY > 0) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  }

  return isMobile ? (
    <div className='fixed z-20 w-full font-sans header h-16'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              placeholder='blur'
              className='w-16 h-16 object-cover mx-1'
            />
          </Link>
          <div className='flex -ml-[100vw]'>
            {isOpen ? (
              <div className='flex flex-col h-screen w-screen text-center bg-black opacity-80'>
                <div className='justify-between'>
                  <div />
                  <IoMdClose
                    size={32}
                    onClick={() => {
                      setIsOpen(false)
                    }}
                    className='text-white cursor-pointer float-right m-3'
                  />
                </div>
                <Link
                  scroll={false}
                  href='/#accueil'
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='uppercase no-underline text-white text-2xl font-semibold mx-2 my-4'
                >
                  accueil
                </Link>
                <Link
                  scroll={false}
                  href='/#a-propos'
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='uppercase no-underline text-white text-2xl font-semibold mx-2 my-4'
                >
                  à propos
                </Link>
                <Link
                  href='/projects'
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='uppercase no-underline text-white text-2xl font-semibold mx-2 my-4'
                >
                  projets
                </Link>
                <Link
                  href='/'
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  className='uppercase no-underline text-white text-2xl font-semibold mx-2 my-4'
                >
                  contact
                </Link>
              </div>
            ) : (
              <GiHamburgerMenu
                size={32}
                onClick={() => {
                  setIsOpen(true)
                }}
                className='text-white cursor-pointer m-3'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='fixed z-20 w-full font-sans header h-32'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='logo'
              placeholder='blur'
              className='w-28 h-28 object-cover mx-4 mt-2'
            />
          </Link>
          <div className='flex px-10 py-12'>
            <Link
              scroll={false}
              href='/#accueil'
              className='uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap'
            >
              accueils
            </Link>
            <Link
              scroll={false}
              href='/#a-propos'
              className='uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap'
            >
              à propos
            </Link>
            <Link
              href='/projects'
              className='uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap'
            >
              projets
            </Link>
            <Link
              href='/'
              className='uppercase no-underline text-white text-2xl font-semibold mx-2 whitespace-nowrap'
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className='font-sans h-40 bg-[#202020]'>
      <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
        <div className='flex justify-between mx-auto pt-4 px-16 md:px-36 lg:px-72'>
          <div>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
          </div>
          <div>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
            <a
              href='#'
              className='block text-white no-underline text-lg'
            >
              teste
            </a>
          </div>
        </div>
        <p className='text-white text-center pt-2 text-xs'>
          Made with <span className='text-red-600'>♥</span> by{' '}
          <a
            href='https://github.com/PedroL22/'
            className='text-white font-medium no-underline'
          >
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}

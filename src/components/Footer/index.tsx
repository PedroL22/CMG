import React from 'react'

export default function Footer() {
  return (
    <footer className='h-20 bg-[#202020] font-sans'>
      <div className='mx-auto w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]'>
        <div className='mx-auto flex justify-between px-16 pt-4 md:px-36 lg:px-72'>
          {/* <div>
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
          </div> */}
        </div>
        <p className='pt-2 text-center text-xs text-white'>
          Made with <span className='text-red-600'>♥</span> by{' '}
          <a
            href='https://github.com/PedroL22/'
            className='font-medium text-white no-underline'
          >
            Pedro Lucena
          </a>
        </p>
      </div>
    </footer>
  )
}

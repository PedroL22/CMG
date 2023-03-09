import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef()
  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_p8f68rz',
        'template_ixeh0fe',
        form.current as any,
        '-xo0bQBMsXWq4CwN9'
      )
      .then()
    e.target.reset()
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 3000)
  }

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [message])

  return (
    <div className='font-sans max-w-screen-3xl'>
      <Head>
        <title>Contact - Custom Peinture et Nettoyage</title>
        <meta
          name='description'
          content='Contact us - Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL'
        />
        <meta
          name='keywords'
          content='Montréal, nettoyage, peinture résidentiel, cleaning, house painting, contact'
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

      <div className='bg-black fixed z-10 w-full font-sans header h-16 md:h-32' />
      <div className='flex'>
        <div className='pt-20 md:pt-36 mx-auto md:flex gap-11'>
          <div className='max-w-xs'>
            <h2 className='max-w-sm text-2xl'>
              Appelez-nous ou remplissez le formulaire pour démarrer votre
              projet.
            </h2>
            <form
              ref={form as any}
              onSubmit={sendEmail}
              className='flex flex-col max-w-sm'
            >
              <label className='flex gap-2'>
                <input
                  className='bg-gray-200 px-3 py-3 my-1 rounded outline-none max-w-[49%] border-[1px] focus:border-gray-400'
                  id='name'
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                />
                <input
                  className='bg-gray-200 px-3 py-3 my-1 rounded outline-none max-w-[49%] border-[1px] focus:border-gray-400'
                  id='email'
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  required
                />
              </label>
              <label>
                <input
                  className='block bg-gray-200 px-3 py-3 my-1 rounded outline-none w-full border-[1px] focus:border-gray-400'
                  id='subject'
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  required
                />
                <textarea
                  className='bg-gray-200 px-3 py-3 my-1 rounded outline-none w-full border-[1px] focus:border-gray-400 resize-none'
                  id='message'
                  placeholder='Message'
                  name='message'
                  required
                />
              </label>
              <button
                className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-2 my-1 rounded transition-all duration-250 ease-in'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
          <div className='max-w-xs my-4'>
            <h2 className='font-semibold text-base uppercase'>
              contactez-nous
            </h2>
            <a href='https://wa.me/15147108532'>
              <div className='flex'>
                <BsWhatsapp
                  size={14}
                  className='mt-1'
                />
                <h2 className='flex font-normal text-sm ml-0.5'>Whatsapp</h2>
              </div>
            </a>
            <hr />
            <h2 className='font-semibold text-base uppercase'>appelez-nous</h2>
            <a href='tel:+1 (514) 710-8532'>
              <div className='flex'>
                <AiOutlinePhone
                  size={18}
                  className='mt-0.5 -ml-0.5'
                />
                <h2 className='flex font-normal text-sm'>+1 (514) 710-8532</h2>
              </div>
            </a>
            <hr />
            <h2 className='font-semibold text-base uppercase'>
              envoyez-nous un email
            </h2>
            <a href='mailto:docmarques@yahoo.com'>
              <div className='flex'>
                <AiOutlineMail
                  size={16}
                  className='mt-0.5'
                />
                <h2 className='flex font-normal text-sm ml-0.5'>
                  docmarques@yahoo.com
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

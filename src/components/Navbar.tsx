import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import logo from '@/logo.png'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
    <nav className=' mx-auto flex justify-between items-left sm:px-16 px-6 py-4 mb-7'>
        <Link href='/' className='flex justify-center items-center padding-2px margin-2px'>

            <Image
                src='/logo.png'
                alt='H2Owners logo'
                width={220}
                height={220}
                className='object-contain bg-transparent'
            />
            </Link>
            <Link  className="text-white" href="/about">About</Link>
            {/* <Link href="/about">Contact</Link> */}
        </nav>
    </header>
  )
}

export default Navbar
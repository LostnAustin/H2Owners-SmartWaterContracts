import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                    src='./logo.svg'
                    alt='H2Owners logo'
                    width={118}
                    height={118}
                    className='object-contain'
                />
            </Link>
            <Link href="/about">About Us</Link>
            <Link href="/about">Contact</Link>

            <CustomButton
                title='Sign Up or Login'
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white text-black min-w-[130px]'

            />
        </nav>
    </header>
  )
}

export default Navbar
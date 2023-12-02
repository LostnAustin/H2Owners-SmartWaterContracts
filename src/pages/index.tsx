import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import '@/styles/globals.css'
import { usePicket } from '@picketapi/picket-react'
import { cookieName } from '../utils/supabase'
// import Layout from '@/app/Layout';
import { CustomButton, Footer, Navbar, StarsCanvas } from "@/components";
import EarthDiv from '@/components/EarthDiv';
import { Button } from '@nextui-org/react';



type Props = {
  loggedIn: boolean
}

export default function Home(props: Props){
  const mapboxApiAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const { loggedIn } = props
  const { login, logout, authState } = usePicket()
  const router = useRouter()

  const handleLogin = useCallback(async () => {
    let auth = authState
    // no need to re-login if they've already connected with Picket
    if (!auth) {
      // login with Picket
      auth = await login()
    }

    // login failed
    if (!auth) return

    // create a corresponding supabase access token
    await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accessToken: auth.accessToken,
      }),
    })
    // redirect to their todos page
    // router.push('/todos')
    router.push('/WRowners')
  }, [authState, login, router])

  const handleLogout = useCallback(async () => {
    // clear both picket and supabase session
    await logout()
    await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // refresh the page
    router.push('/')
  }, [logout, router])

  return (
      <div className='container-fluid text-center text-3xl px-2 py-2'>
        <div className='bg-cover bg-no-repeat bg-center'>
        <Navbar />
        </div>
      <main>
       
        <div className="relative z-0 mt-10">
           {/* <h2>Smart Water Contracts Dapp</h2> */}
          <EarthDiv />
          <StarsCanvas />
        </div>
          <div>
          <h2>Connect a Web3 wallet to add or view your Account!</h2>
          {loggedIn ? (
          <button onClick={handleLogout}>Log Out to Switch Wallets</button>
          ) : (
          
          <Button
          className="rounded-full bg-white text-black px-2 py-2 mt-2 mb-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          title='Login'
          // btnType='button'
          // containerStyles='text-primary-blue rounded-full bg-white text-black text-center min-w-[130px]'
          onClick={handleLogin}
          >Login or Signup</Button>
        )}
        </div>
      </main>
      {/* <Footer /> */}
        </div>
    
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  // get supabase token server-side
  const accessToken = req.cookies[cookieName]

  if (!accessToken) {
    return {
      props: {
        loggedIn: false,
      },
    }
  }

  return {
    props: {
      loggedIn: true,
    },
  }
}

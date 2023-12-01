import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import '@/styles/globals.css'
import { usePicket } from '@picketapi/picket-react'
import { cookieName } from '../utils/supabase'
// import Layout from '@/app/Layout';
import { StarsCanvas } from "@/components";
import { EarthCanvas } from '@/components';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


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
      <main>
        {loggedIn ? (
          <button onClick={handleLogout}>Log Out to Switch Wallets</button>
        ) : (
          <button onClick={handleLogin}>Log In With Your Web3 Wallet</button>
        )}
      </main>
      {/* <div className="relative z-0">
          <StarsCanvas />
      
        </div> */}
         
           {/* <StarsCanvas /> */}
           <div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black"
      > 
         <EarthCanvas /> 
       </div>
      
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

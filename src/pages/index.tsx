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
import Link from 'next/link';




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
    router.push('/owners')
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
    <div className='container-fluid text-center text-3xl px-2 py-2 bg-gray-950'>
    <div className='bg-cover bg-no-repeat bg-center'>
    <Navbar />
    </div>
  <main className='jumbotron'>
  <style global jsx>{`
  html,
  main,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
    
  }
`}</style>
    <div className="relative z-0 mt-10">
      <EarthDiv />
      <StarsCanvas  />
    </div>
      <div>
      <h1 className='text-white text-3xl'>Connect a Web3 wallet to add or view your Account!</h1>
      {loggedIn ? (
      <Button
      className="rounded-full bg-white text-black px-2 py-2 mt-2 mb-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={handleLogout}>Log Out to Switch Wallets</Button>
      ) : (
      
      <Button
      className="rounded-full bg-white text-black px-2 py-2 mt-2 mb-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      title='Login'
      onClick={handleLogin}
      >Login or Signup</Button>
    )}
    </div>
    
    <div className='mt-4'>
      <Link className="rounded-full bg-white text-black px-2 py-2 mt-2 mb-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      title='Login' href="/owners">Already Logged in? Click Here</Link>
    </div>

  </main> 
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

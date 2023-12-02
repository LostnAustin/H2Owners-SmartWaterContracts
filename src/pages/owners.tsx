import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import { Button } from '@nextui-org/react'

// import styles from '../styles/Home.module.css'

import { getSupabase, cookieName } from '../utils/supabase'
import { text } from 'stream/consumers'
import React from 'react'

type WrOwner = {
  ID: number
  Owner: string
  WR_Typ: string
  WR_Issue_Date: Date
}

type Props = {
  walletAddress: string
  owners: WrOwner[]
  // typeOfRight: WrOwner[] 
}

const displayWalletAddress = (walletAddress: string) =>
  `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`


export default function WrOwner(props: Props) {
  const { walletAddress } = props
  const [owner, setOwner] = useState(props.owners)

  // avoid re-creating supabase client every render
  const supabase = useMemo(() => {
    const accessToken = Cookies.get(cookieName)
    return getSupabase(accessToken || '')
  }, [])

  return (
    <div>
      <Head>
        <title>H2Owners - Smart Contracts for Water Rights</title>
      </Head>

      <main>
        <div className='banner'>
          <h1 className='text-3xl font-bold underline py-2 px-4'>Welcome to H2Owners</h1>
            <h2 className='text-2xl font-semibold py-2 px-4'> Smart contracts for water rights contracts, permits, and transfer!</h2>
        </div>
        <div
          style={{
            maxWidth: '600px',
            textAlign: 'left',
            fontSize: '1.125rem',
            margin: '36px 0 24px 0',
          }}
        >
          <p className='px-2 py-2'>Hello  {displayWalletAddress(walletAddress)}</p>
          <p className='px-2 py-2'>
            Your data related to water rights contracts and permits can be viewed and edited here.You can mint an NFT used to represent your water rights, upon approval by regulators. You can use this dynamic NFT to monitor changes to your water rights, permits, or transfers and sales!
          </p>

          <Button className='button rounded-2xl py-4 px-4'>Mint Water Contract NFT 
          </Button>

        </div>
        <div
          style={{
            textAlign: 'left',
            fontSize: '1.125rem',
          }}
        >
          <h2>Owner Data</h2>
          {owner.map((owner) => (
            <div
               key={owner.Owner}
               style={{
                 margin: '8px 0',
                 display: 'flex',
                 alignItems: 'center',
               }}
             >
            
               {/* <span
                 style={{
                   margin: '0 0 0 8px',
                 }}
               >
                 {owner.Owner}
               </span> */}
             </div>
           ))}
          <div
            style={{
              margin: '24px 0',
            }}
          >
            <Link
              href={'/'}
              style={{
                textDecoration: 'underline',
              }}
            >
              Go back home &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  // example of fetching data server-side
  const accessToken = req.cookies[cookieName]

  // require authentication
  if (!accessToken) {
    return {
      redirect: {
        destination: '/',
      },
      props: {
        walletAddress: '',
        owners: [],
        typeOfRight: []
      },
    }
  }

  // check if logged in user has completed the tutorial
  const supabase = getSupabase(accessToken)
  const { walletAddress } = jwt.decode(accessToken) as {
    walletAddress: string
  }

  // get todos for the users
  // if none exist, create the default todos
  let { data } = await supabase.from('WRowners').select('*')

  if (!data || data.length === 0) {
    let error = null
    ;({ data, error } = await supabase
      .from('WrOwners')
      .insert([
        {
          wallet_address: walletAddress,
          Owner: WrOwner
          
          // WR_Typ: string
          // WR_Issue_Date
          
        },
      
        // {
        //   wallet_address: walletAddress,
        //   Owners: 'Build an Awesome Web3 Experience',
        //   completed: false,
        // },
      ])
      .select('*'))

    if (error) {
      // log error and redirect home
      console.error(error)
      return {
        redirect: {
          destination: '/',
        },
        props: {
          walletAddress: '',
          owners: [],
        },
      }
    }
  }

  return {
    props: {
      walletAddress,
      owners: data as WrOwner[],
    },
  }
}

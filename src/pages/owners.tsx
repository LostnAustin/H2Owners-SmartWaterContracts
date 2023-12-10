import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useMemo, useRef, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import { Button } from '@nextui-org/react'
import { Map, Navbar } from '../components'
import { getSupabase, cookieName } from '../utils/supabase'
import { text } from 'stream/consumers'
import React from 'react'
import { id } from 'ethers/src.ts/utils'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { FormEvent } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN



type WrOwner = {
  ID: number
  Owner: string
  WR_typ: string
  WR_Issue_Date: Date
  Use: string
  Divert_Amt: number
  Prior_Class: string
}

type Props = {
  walletAddress: string
  id: WrOwner[]
  owners: WrOwner[]
  wr_type: WrOwner[]
  Divert_Amt: WrOwner[] 
  use: WrOwner[]
  Prior_Class: WrOwner[]
  WR_Issue_Date: WrOwner[]
  
}


const displayWalletAddress = (walletAddress: string) =>
  `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`



export default function WrOwner(props: Props) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    // style: 'mapbox://styles/mapbox/standard-beta',
    center: [lng, lat],
    zoom: zoom,
    
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
    
    });
    

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.7431);
  const [lat, setLat] = useState(30.2672);
  const [zoom, setZoom] = useState(6.42);
  const { walletAddress } = props
  const [owner, setOwner] = useState(props.owners)

  

  // avoid re-creating supabase client every render
  const supabase = useMemo(() => {
    const accessToken = Cookies.get(cookieName)
    return getSupabase(accessToken || '')
  }, [])

  return (
    
    <div className='bg-sky-300'>
      <Head>
        <title>H2Owners - Smart Contracts for Water Rights</title>
      </Head>
      <div className='container-fluid text-center text-3xl px-2 pt-4'>
    <div className='bg-cover bg-no-repeat bg-center pb-11'>
        <Navbar />
        </div>
      <main>
        <div className='banner pt-5 mt-5'>
          <h1 className='text-3xl font-bold underline pt-5 mt-5 py-2 px-4'>Welcome to H2Owners</h1>
            <h2 className='text-2xl font-semibold py-2 px-4'> Smart contracts for water rights contracts, permits, and transfer!</h2>
        </div>
        <div
          style={{
            container: 'fluid',
            // maxWidth: '600px',
            textAlign: 'center',
            fontSize: '1.125rem',
            margin: '36px 0 24px 0',
          }}
        >
          <h1 className='px-2 py-2 text-5xl'>Hello  {displayWalletAddress(walletAddress)}</h1>
          <p className='container-fluid text-left text-3xl px-2 pt-4'>
            Your data related to water rights contracts and permits can be created, viewed and edited here.You can mint an NFT used to represent your water rights. Upon approval by regulators, you can use this dynamic NFT to monitor changes to your water rights, permits, transfers, and sales!
          </p>

          <Button
          className="rounded-full bg-white text-black px-2 py-2 mt-2 mb-2 ml-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          // onClick={}
          >Mint NFT</Button>
        </div>


        <div
          style={{
            textAlign: 'left',
            fontSize: '1.125rem',
          }}
        >
          <div className='pt-5 pb-8 mb-3 ml-6'>
          <div className="sidebar mb-10">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          
          <div ref={mapContainer} className="map-container" />
          </div>
          </div>

          <h2 className='container text-2xl ml-2 underline mt-2 '>Water Rights Application</h2>
            <h3 className='ml-2'>Edit Your Application Data</h3>
          {/* {owner.map((owner) => ( */}
            <div
               key={owner.Owner}
               style={{
                 margin: '8px 0',
                 display: 'flex',
                 alignItems: 'center',
               }}
             >
             
             {/* <input
                type="checkbox"
                // checked={todo.completed}
                onChange={async () => {
                  await supabase.from('WRowners').upsert({
                    wallet_address: walletAddress,
                    name: owner.Owner,
                    wr_type: 
                  })
                  setTodos((todos) =>
                    todos.map((t) => (t.name === todo.name ? { ...t, completed: !t.completed } : t))
                  )
                }}
              /> */}
              
              <form className='px-2 py-2 m-2' onSubmit={onSubmit}>
                <input type="text" name="name" placeholder='Username'/>
                <input type="text" name="wrType" placeholder='Water Right Type'/>
                <input type="text" name="use" placeholder='Use'/>
                <input type="text" name="divert_amt" placeholder='Divert Amount'/>
                <input type='text' name="basin" placeholder='Basin' />
                <button type="submit">Submit</button>
              </form>


               <span
                 style={{
                   margin: '0 0 0 8px',
                 }}
               >
                 {/* {owner.Owner} */}
                 {/* {owner.created_at} */}
               </span>
             </div>
           
          <div
            style={{
              margin: '24px 0',
            }}
          >
            <div className='mt-5 px-2'>
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
        </div>
      </main>
      </div>
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
          Owners: WrOwner,
          // Owner: WrOwner
          
          // WR_Typ: string
          // WR_Issue_Date
        },
      
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

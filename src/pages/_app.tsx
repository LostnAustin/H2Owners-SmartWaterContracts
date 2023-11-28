import Image from 'next/image'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useRef, useEffect, useState } from 'react';
import { PicketProvider } from '@picketapi/picket-react'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Button from '@/components/button';

mapboxgl.accessToken = 'pk.eyJ1IjoibXVsdGl2ZXJzZW11ZmZpbiIsImEiOiJjam0zcXpyY24zY2pjM3FwNHc5czRseWc4In0.77WeoY_oiCK4I7vd8L8UZQ';

export default function Home() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-97.7431);
const [lat, setLat] = useState(30.2672);
const [zoom, setZoom] = useState(6);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    // style: 'mapbox://styles/mapbox/dark-v11',
    style: "mapbox://styles/mapbox/satellite-v9",
    center: [lng, lat],
    zoom: zoom
  });
});

  return (
    <PicketProvider apiKey={process.env.NEXT_PUBLIC_PICKET_PUBLISHABLE_KEY!}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div>
        <h1 className='text-5xl font-bold underline font-mono'>H2Owners</h1>
      </div>
      
      <div>
       <button id="login" className="round-button rounded-2xl" >Login or Sign Up</button>
      </div>
        <div>
        <h1 className='text-3xl text-center font-mono'>Texas Water Rights Owners</h1>
          <div ref={mapContainer} className="map-container" />
        </div>
   
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       


        

       
      </div>
    </main>
    </PicketProvider>
  )
}

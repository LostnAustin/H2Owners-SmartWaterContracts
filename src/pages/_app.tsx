import Image from 'next/image'
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import React, { useRef, useEffect, useState } from 'react';
import { PicketProvider } from '@picketapi/picket-react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {NextUIProvider} from '@nextui-org/react'
import {Button} from '@nextui-org/button'; 

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
      <NextUIProvider>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <h1 className='text-5xl font-bold underline font-mono'>H2Owners</h1>
          </div>
          <div>
            <Button>Login or Sign Up
            </Button>
          </div>
          <div>
            <h1 className='text-3xl text-center font-mono'>Water Rights Map</h1>
            <div ref={mapContainer} className="map-container" />
          </div>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          </div>
        </main>
      </Layout>
      </NextUIProvider>
    </PicketProvider>
  )
}

// import Image from 'next/image'
// import '@/styles/globals.css'
// import Layout from '@/app/Layout'
// import type { AppProps } from 'next/app'
// import React, { useRef, useEffect, useState } from 'react';
// import { PicketProvider } from '@picketapi/picket-react'
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import type { AppProps } from 'next/app' 

// mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!


// export default function App({ Component, pageProps}: AppProps) {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-97.7431);
//   const [lat, setLat] = useState(30.2672);
//   const [zoom, setZoom] = useState(6);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       // style: 'mapbox://styles/mapbox/dark-v11',
//       style: "mapbox://styles/mapbox/satellite-v9",
//       center: [lng, lat],
//       zoom: zoom
//     });
//   });

//   const [isClient, setIsClient] = useState(false)
 
//   useEffect(() => {
//     setIsClient(true)
//   }, [])


//   return (
    
//     <PicketProvider apiKey={process.env.NEXT_PUBLIC_PICKET_PUBLISHABLE_KEY!}>
//       <Layout>
//         <html>
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//           <div>
//             <h2 className='text-4xl font-bold underline font-mono'>Smart Contracts for Water Rights</h2>
//           </div>
        
//           <div>
//             <h3 className='text-2xl text-center font-mono underline'>Texas Water Rights Map</h3>
//               <div ref={mapContainer} className="map-container" />
//           </div>
//           <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//           </div>
//         </main>
//         </html>
//         <Component {...pageProps} />
//       </Layout>
//     </PicketProvider>
//   )
// }


import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { PicketProvider } from '@picketapi/picket-react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PicketProvider apiKey={process.env.NEXT_PUBLIC_PICKET_PUBLISHABLE_KEY!}>
      <Component {...pageProps} />
    </PicketProvider>
  )
}

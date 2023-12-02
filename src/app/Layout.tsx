import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import {Providers} from "./providers";
import React from 'react';
// import { Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'H2Owners',
  description: 'Smart contracts for water regulation and permitting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Navbar />
          <body className={inter.className}>
            <Providers>
            {children}
            </Providers>
          </body>
          {/* <Footer /> */}
    </html>
  )
}

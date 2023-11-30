import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from './Navbar'
import {Providers} from "../app/providers";

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
      
    </html>
  )
}

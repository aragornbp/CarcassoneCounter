import './globals.css'
import React from 'react'
import { Caudex } from 'next/font/google'

// const { Inter, Caudex } = Font

// const inter = Inter({ subsets: ['latin'] })
const caudex = Caudex({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Carcassone Counter',
  description: 'Um contador de pontos de carcassone',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={caudex.className}>{children}</body>
    </html>
  )
}

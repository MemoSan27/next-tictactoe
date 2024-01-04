import type { Metadata } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  weight: ['400','700','900'],
  subsets: ['latin'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}

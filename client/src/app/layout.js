import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Maitri Manthan Sansthan',
  description: 'Maitri Manthan is a FCRA, 12A, 80G certified Non-Government organization based in Udaipur, Rajasthan which was started in December 2013 with the purpose of raising awareness and helping people who are in need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

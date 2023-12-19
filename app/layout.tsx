import type { Metadata } from 'next'
import { Inter, Roboto, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const roboto100 = Roboto({
  subsets: ["latin"],
  weight: '100'
});

const poppins100 = Poppins({ subsets: ["latin"], weight: '100'});

const montserrat = Montserrat({ subsets: ["latin"] });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'my website',
  description: 'welcome to my website',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}

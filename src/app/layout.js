import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'

const font = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={font.className} >
        <div className='container'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

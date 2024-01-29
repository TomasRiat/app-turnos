
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContextProvider } from './context/authcontext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-amarillo text-marronVerdoso'>
      <body className={inter.className}>
        <AuthContextProvider>
          <div className='h-dvh grid grid-rows-[130px_1fr_230px] background'>
            <Navbar />
            <div className='grid place-items-center'>
              {children}
            </div>
            <Footer />
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}

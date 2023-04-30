"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { AuthProvider } from '../contexts/authContext';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <AuthProvider>
      <Sidebar/>
      <div className='justify-center items-center text-center text-9xl'>
        teste
      </div>
      </AuthProvider>
    </div>
  )
}

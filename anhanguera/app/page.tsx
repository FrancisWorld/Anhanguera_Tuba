"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { AuthProvider } from '../contexts/authContext';
import { motion } from 'framer-motion';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex'>
      <AuthProvider>
        <Sidebar />
        <div className='flex my-20 items-center justify-center w-[100%]'>
          {/* Card */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='flex xl:w-auto'>

            <div className='bg-[#383838] p-4 m-5 rounded-md w-[400px]'>
              <h2 className='text-xl font-semibold mt-2 mb-2'>Titulo</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa error rerum beatae tenetur, nostrum consequatur quam provident excepturi! Harum adipisci recusandae cumque in rerum, repudiandae delectus eum incidunt exercitationem.</p>
              <a href="#" className='flex justify-end mt-4'>Exibir</a>
            </div>

            <div className='bg-[#383838] p-4 m-5 rounded-md w-[400px]'>
              <h2 className='text-xl font-semibold mt-2 mb-2'>Titulo</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa error rerum beatae tenetur, nostrum consequatur quam provident excepturi! Harum adipisci recusandae cumque in rerum, repudiandae delectus eum incidunt exercitationem.</p>
              <a href="#" className='flex justify-end mt-4'>Exibir</a>
            </div>
          </motion.div>
          {/* Card */}

        </div>
      </AuthProvider>
    </div>
  )
}

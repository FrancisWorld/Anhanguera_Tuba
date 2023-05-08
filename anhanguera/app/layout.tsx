import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import ClientProvider from '@/components/ClientProvider'
import LoginRegisterPage from '@/components/LoginRegisterPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anhanguera',
  description: 'Portal do aluno',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="pt">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <LoginRegisterPage/>
          ): (
            <div>
              <ClientProvider/>
              <div>{children}</div>
            </div>
          )}
          </SessionProvider>
        </body>
    </html>
  )
}

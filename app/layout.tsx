import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/provider/SupabaseProvider'
import UserProvider from '@/provider/UserProvider'
import ModalProvider from '@/provider/ModalProvider'
import ToasterProvider from '@/provider/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
import getActiveProductWithPrices from '@/actions/getActiveProductWithPrices'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music on Spotify Clone',
}
export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId()
  const products = await getActiveProductWithPrices()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

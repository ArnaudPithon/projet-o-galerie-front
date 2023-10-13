import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UiContextProvider } from '../contexts/UiContext'
import { UserContextProvider } from '../contexts/UserContext'
import { ArtworkContextProvider } from '../contexts/ArtworkContext'
import Header from '@/src/components/Header/Header'
import AuthentificationForm from '../components/Forms/AuthentificationForm'
import ConnexionForm from '../components/Forms/ConnexionForm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "O'Galerie",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="fr">
      <UserContextProvider>
      <UiContextProvider>
      <ArtworkContextProvider>
        <body className={`${inter.className}`}>          
          <Header />
          <ConnexionForm />
          <AuthentificationForm />
          {children}         
        </body>
      </ArtworkContextProvider>
      </UiContextProvider>
      </UserContextProvider>
    </html>
  )
}

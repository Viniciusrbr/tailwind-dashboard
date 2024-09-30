import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind Dashboard Example',
  description: 'Um exemplo de dashboard usando Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

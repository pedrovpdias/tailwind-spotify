import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata = {
  title: 'Spotify - Web Player: Music for everyone',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-zinc-900 text-zinc-50'>
        {children}
      </body>
    </html>
  )
}

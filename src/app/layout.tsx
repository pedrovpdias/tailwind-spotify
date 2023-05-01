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
      <body className='bg-neutral-900 text-neutral-100'>
        {children}
      </body>
    </html>
  )
}

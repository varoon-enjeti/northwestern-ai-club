import './globals.css'
import type { Metadata } from 'next'
import Header from './header'

export const metadata: Metadata = {
  title: 'Northwestern AI',
  description: 'Northwestern AI Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

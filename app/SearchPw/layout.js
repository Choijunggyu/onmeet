import { Inter } from 'next/font/google'
import SideNav from '../sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}

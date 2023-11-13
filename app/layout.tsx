import type { Metadata } from 'next'
import './globals.css'
import { AppNavBar } from '@/components/App.navbar'
import { AppSideBar } from '@/components/App.sidebar'
import Script from 'next/script'
import 'flowbite/dist/flowbite.css'

export const metadata: Metadata = {
  title: 'Employee Review App',
  description: 'Employee Review App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='rounded-none'>
          <AppNavBar />
          <div className='flex'>
            <div className='bg-inherit h-screen'>
              <AppSideBar />
            </div>
            <div className='flex-1'>{children}</div>
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.js' />
          </div>
        </div>
      </body>
    </html>
  )
}

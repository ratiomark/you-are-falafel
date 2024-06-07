import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavBar from '@/shared/components/NavBar'
import { headers } from 'next/headers'
import { cn } from '@/shared/utils/cn'
import { Toaster } from '@/shared/ui/toaster'
import Head from 'next/head'

// const inter = FontSans({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// })

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Brightr',
  description: 'The Brightr platform lets tech consultancies easily create, manage, update and publish a steady stream of client stories.',
}

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#156671">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#156671"></meta> */
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const headersList = headers()
  // const currentPath = headersList.get('x-pathname') || '/'
  return (
    <>
      <html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Your App Name"
          />
          <meta
            name="application-name"
            content="Your App Name"
          />
          <meta
            name="msapplication-TileColor"
            content="#2b5797"
          />
          <meta
            name="msapplication-TileImage"
            content="/mstile-150x150.png"
          />
          <meta
            name="theme-color"
            content="#ffffff"
          />
        </Head>
        <body
          // className={inter.className}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
          className={cn('custom-scrollbar-2 min-h-screen bg-background font-sans antialiased', fontSans.variable)}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, inter.className)}
          suppressHydrationWarning
        >
          {/* <NavBar currentPath={currentPath} /> */}
          {children}
          <Toaster />
        </body>
      </html>
    </>
  )
}

{
  /* <Providers> */
}
{
  /* </Providers> */
}

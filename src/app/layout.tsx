import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavBar from '@/shared/components/NavBar';
import { headers } from 'next/headers';
import { cn } from '@/shared/utils/cn';
import { Toaster } from '@/shared/ui/toaster';
import Head from 'next/head';
import backgroundImage from 'public/background.png';
import Image from 'next/image';
// const inter = FontSans({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// })

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
const title = 'You are Falafel';
const description = 'What kind of falafel are you today?';
const titleSocial = 'Falafel social title';
const descriptionSocial = 'This is falafel website social description';
const imageSocial = 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/falafelResult.webp';
const url = 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/';

export function generateMetadata() {
  const metadata: Metadata = {
    title,
    description,

    twitter: {
      card: 'summary_large_image',
      site: "Hey, I'm Falafel!!!!!!!!!!!!!",
      title: titleSocial,
      description: descriptionSocial,
      images: [
        {
          url: imageSocial,
          width: 1000,
          height: 1000,
        },
      ],
    },
    openGraph: {
      siteName: "Hey, I'm Falafel Social",
      title: titleSocial,
      description: descriptionSocial,
      images: [
        {
          url: imageSocial,
          width: 1000,
          height: 1000,
        },
      ],
    },
  };
  return metadata;
}

// const metaSocial = {
//   title: 'Falafel social title',
//   description: 'This is falafel website social description',
//   image: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/falafelResult.png',
//   url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
// };
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
  children: React.ReactNode;
}>) {
  // const headersList = headers()
  // const currentPath = headersList.get('x-pathname') || '/'
  return (
    <>
      <html lang="en">
        {/* <Head> */}
        {/* <link
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
          /> */}
        {/* </Head> */}
        <body
          // className={inter.className}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
          className={cn('custom-scrollbar-2 min-h-screen bg-background font-sans antialiased', fontSans.variable)}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, inter.className)}
          suppressHydrationWarning
        >
          {/* <NavBar currentPath={currentPath} /> */}
          {children}
          {/* <Image
            src={backgroundImage}
            alt=""
            placeholder="blur"
            fill
            style={{
              objectFit: 'cover',
              zIndex: -1,
            }}
          /> */}
          <Toaster />
        </body>
      </html>
    </>
  );
}

{
  /* <Providers> */
}
{
  /* </Providers> */
}
// import type { Metadata } from 'next';
// // import { Inter } from 'next/font/google'
// import { Inter as FontSans } from 'next/font/google';
// import './globals.css';
// import { Providers } from './providers';
// import NavBar from '@/shared/components/NavBar';
// import { headers } from 'next/headers';
// import { cn } from '@/shared/utils/cn';
// import { Toaster } from '@/shared/ui/toaster';
// import Head from 'next/head';
// import backgroundImage from 'public/background.png';
// import Image from 'next/image';
// // const inter = FontSans({
// // 	subsets: ['latin'],
// // 	variable: '--font-inter',
// // })

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });
//   const title = 'You are Falafel'
//   const description = 'What kind of falafel are you today?',
// export const metadata: Metadata = {
//   title: 'You are Falafel',
//   description: 'What kind of falafel are you today?',

//   twitter: {
//     card: 'summary_large_image',
//     site: "Hey, I'm Falafel",
//     title,
//     description,
//     images: [
//       {
//         url: imageUrl,
//         width: 1000,
//         height: 1000,
//       },
//     ],
//   },
//   openGraph: {
//     siteName: "Hey, I'm Falafel",
//     title,
//     description,
//     images: [
//       {
//         url: imageUrl,
//         width: 1000,
//         height: 1000,
//       },
//     ],
//   },
// };
// const metaSocial = {
//   title: 'Falafel social title',
//   description: 'This is falafel website social description',
//   image: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/falafelResult.png',
//   url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
// };
// {
//   /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#156671">
// <meta name="msapplication-TileColor" content="#da532c">
// <meta name="theme-color" content="#156671"></meta> */
// }
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // const headersList = headers()
//   // const currentPath = headersList.get('x-pathname') || '/'
//   return (
//     <>
//       <html lang="en">
//         <Head>
//           <meta
//             property="og:title"
//             content={metaSocial.title}
//           />
//           <meta
//             property="og:description"
//             content={metaSocial.description}
//           />
//           <meta
//             property="og:image"
//             content={metaSocial.image}
//           />
//           <meta
//             property="og:url"
//             content={metaSocial.url}
//           />
//           <meta
//             property="og:type"
//             content="website"
//           />
//           <meta
//             name="twitter:card"
//             content="summary_large_image"
//           />
//           <meta
//             name="twitter:title"
//             content="Example Title"
//           />
//           <meta
//             name="twitter:description"
//             content="Example description"
//           />
//           <meta
//             name="twitter:image"
//             content="https://your-domain.com/path/to/image.jpg"
//           />
//           {/* <link
//             rel="apple-touch-icon"
//             sizes="180x180"
//             href="/apple-touch-icon.png"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             sizes="32x32"
//             href="/favicon-32x32.png"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             sizes="16x16"
//             href="/favicon-16x16.png"
//           />
//           <link
//             rel="manifest"
//             href="/site.webmanifest"
//           />
//           <link
//             rel="mask-icon"
//             href="/safari-pinned-tab.svg"
//             color="#5bbad5"
//           />
//           <link
//             rel="shortcut icon"
//             href="/favicon.ico"
//           />
//           <meta
//             name="apple-mobile-web-app-title"
//             content="Your App Name"
//           />
//           <meta
//             name="application-name"
//             content="Your App Name"
//           />
//           <meta
//             name="msapplication-TileColor"
//             content="#2b5797"
//           />
//           <meta
//             name="msapplication-TileImage"
//             content="/mstile-150x150.png"
//           />
//           <meta
//             name="theme-color"
//             content="#ffffff"
//           /> */}
//         </Head>
//         <body
//           // className={inter.className}
//           // className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
//           className={cn('custom-scrollbar-2 min-h-screen bg-background font-sans antialiased', fontSans.variable)}
//           // className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, inter.className)}
//           suppressHydrationWarning
//         >
//           {/* <NavBar currentPath={currentPath} /> */}
//           {children}
//           {/* <Image
//             src={backgroundImage}
//             alt=""
//             placeholder="blur"
//             fill
//             style={{
//               objectFit: 'cover',
//               zIndex: -1,
//             }}
//           /> */}
//           <Toaster />
//         </body>
//       </html>
//     </>
//   );
// }

// {
//   /* <Providers> */
// }
// {
//   /* </Providers> */
// }

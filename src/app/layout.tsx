import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { PHProvider } from './providers';
import NavBar from '@/shared/components/NavBar';
import { headers } from 'next/headers';
import { cn } from '@/shared/utils/cn';
import { Toaster } from '@/shared/ui/toaster';
import Head from 'next/head';
import backgroundImage from 'public/background.png';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import MetaPixel from '@/app/MetaPixel';
import Script from 'next/script';

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
const title = 'Which Falafel Are You? Fun Quiz by Butcher.Studio | Try Now!';
const description = 'What kind of falafel are you? Find out your falafel essence by taking the most important test at lolafel.fun! Created by BUTCHER Studio.';
const titleSocial = 'LoLafel by Butcher.studio';
const descriptionSocial = `Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!`;
const imageSocial = 'https://ik.imagekit.io/towzbt87r/lolafel/main.png';
const url = 'https://www.lolafel.fun/';

export function generateMetadata() {
  const metadata: Metadata = {
    title,
    description,
    keywords: [
      'falafel personality test',
      'food personality quiz',
      'what falafel are you',
      'food character test',
      'culinary personality types',
      'food alter ego quiz',
      'funny food quiz',
      'hilarious personality test',
      'quirky falafel test',
      'creative web design',
      'interactive personality quiz',
      'unique website design',
      'what does your favorite food say about you',
      'discover your food personality type',
      'which middle eastern dish are you',
      'Butcher Studio quiz',
      'Butcher Studio web design',
      'lolafel personality test',
      'types of falafel',
      'falafel varieties',
      'falafel culture',
      'interactive web quiz',
      'responsive personality test',
      'mobile-friendly food quiz',
      'shareable personality quiz',
      'viral food test',
      'social media personality quiz',
    ],
    twitter: {
      card: 'summary_large_image',
      site: url,
      title: titleSocial,
      description: descriptionSocial,

      images: [imageSocial],
    },
    openGraph: {
      tags: ['social', 'falafel', 'you', 'are', 'today'],
      siteName: 'LoLafel by Butcher.studio',
      title: titleSocial,
      description: descriptionSocial,
      images: [imageSocial],
    },
  };
  return metadata;
}
{
  /* <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1231745995361917');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1231745995361917&ev=PageView&noscript=1"
/></noscript> */
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Head>
          <link
            rel="canonical"
            href="https://www.webdevelopment.lk"
          />
        </Head>
        <head></head>
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
        {/* <PHProvider> */}
        <body
          // className={inter.className}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
          className={cn('custom-scrollbar-2 min-h-screen bg-background font-sans antialiased', fontSans.variable)}
          // className={cn('min-h-screen bg-background font-sans antialiased', inter.variable, inter.className)}
          suppressHydrationWarning
        >
          {/* Meta / Facebook Pixel */}
          {/* <MetaPixel /> */}
          {/* <PostHogPageView /> */}
          {children}
          <Toaster />
          <>
            <Script
              id="facebook-pixel"
              strategy="afterInteractive"
            >
              {`
         !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=true;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1231745995361917');
            fbq('track', 'PageView');
        `}
            </Script>

            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1231745995361917&ev=PageView&noscript=1"
              />
            </noscript>
          </>
        </body>
        {/* </PHProvider> */}
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

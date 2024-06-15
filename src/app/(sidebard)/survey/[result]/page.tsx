import Head from 'next/head';
import Image from 'next/image';
import logo from 'public/orionLogo.png';
interface SurveyResultProps {
  result: string;
  title: string;
  description: string;
  imageUrl: string;
}
const results = ['angel', 'devil', 'king', 'sushi'] as const; // Обратите внимание на `as const`
type ResultType = typeof results[number]; // 'angel' | 'devil' | 'king' | 'sushi'
function SurveyResult({ params }: { params: { result: ResultType } }) {
  // console.log(params);
  const { result, title, description, imageUrl } = getDataFromResult(params);
  // const { result, title, description, imageUrl } = params;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={imageUrl}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Image
          src={imageUrl}
          alt="Survey Result"
        />
      </div>
    </>
  );
}

export default SurveyResult;

export function getDataFromResult({ result }: { result: ResultType }) {
  const titles = {
    angel: 'Вы - Ангел!',
    devil: 'Вы - Дьявол!',
    king: 'Вы - Король!',
    sushi: 'Вы - Суши!',
  };

  const descriptions = {
    angel: 'Чистосердечный и добрый, вы всегда стремитесь помочь.',
    devil: 'Озорной и хитрый, вы всегда найдёте способ развлечься.',
    king: 'Достойный и мудрый, ваше правление бесспорно.',
    sushi: 'Уникальный и изысканный, вы ценитель тонких вкусов.',
  };

  const imageUrls = {
    angel: 'https://your-domain.com/images/angel.jpg',
    devil: logo,
    king: 'https://your-domain.com/images/king.jpg',
    sushi: 'https://your-domain.com/images/sushi.jpg',
  };
  return {
    result,
    title: titles[result],
    description: descriptions[result],
    imageUrl: imageUrls[result],
  };
}
export async function generateStaticParams() {
  return results.map(result => ({
    result,
  }));
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

// export const metadata: Metadata = {
//   title: 'Falafel',
//   description: 'This is falafel website',
// };
// const metaSocial = {
//   title: 'Falafel social title',
//   description: 'This is falafel website social description',
//   image: 'https://butcher.studio/social-image.png',
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

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ShareLink from './shareLink';
import starsUnique from 'public/resultStarsUnique.svg';
import starsResultSpecialLeft from 'public/starsResultSpecialLeft.svg';
import starsResultSpecialRight from 'public/starsResultSpecialRight.svg';
import starsResultLeft from 'public/starsResultSpecialLeft.svg';
import starsResultRight from 'public/starsResultRight.svg';
import starsResultLeftXl from 'public/starsResultLeftXl.svg';
import starsResultRightXl from 'public/starsResultRightXl.svg';

import { ShareDialog } from '@/shared/components/ShareModal';
import { resultData } from '@/shared/consts/resultData';
interface SurveyResultProps {
  result: string;
  title: string;
  description: string;
  imageUrl: string;
}
const results = ['angel', 'demon', 'king', 'sushi', 'artist', 'alien'] as const;
const seoImages: Record<typeof results[number], string> = {
  angel: 'https://ik.imagekit.io/towzbt87r/lolafel/angel.png',

  demon: 'https://ik.imagekit.io/towzbt87r/lolafel/devil.png',

  alien: 'https://ik.imagekit.io/towzbt87r/lolafel/alien.png',

  artist: 'https://ik.imagekit.io/towzbt87r/lolafel/artist.png',

  king: 'https://ik.imagekit.io/towzbt87r/lolafel/king.png',

  sushi: 'https://ik.imagekit.io/towzbt87r/lolafel/sushi.png',
};
type ResultType = (typeof results)[number];

function SurveyResult({ params }: { params: { result: ResultType } }) {
  const { pageTitle, result, pageDescription, imageUrl } = getDataFromResult(params);
  return (
    <>
      <div className="flex flex-col  pt-[83px] md:pt-[57px] xl:pt-[55px]  2xl:pt-[60px]">
        {/* <div className="flex pt-[8.5vh]  flex-col justify-end border-2 border-red-500"> */}
        {/* <div className="flex grow flex-col justify-end border-2 border-red-500"> */}
        {params.result === 'sushi' && (
          <p className="pb-5 text-center font-libre text-[22px] font-normal  leading-7 tracking-[-0.44px] md:pb-[30px] md:text-[26px] md:tracking-[-0.52px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">
            Do you think you know yourself?
          </p>
        )}
        {params.result !== 'sushi' && (
          <p className=" pb-5 text-center font-libre text-[22px] font-normal leading-7 tracking-[-0.44px] md:pb-[30px] md:text-[26px] md:tracking-[-0.52px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">
            Your result:
          </p>
        )}
        {/* <p className=" pb-5 text-center font-libre text-[22px] font-normal  leading-7 tracking-[-8%] md:pb-[30px] md:text-[26px] 2xl:text-[35px]">
          Your result:
        </p> */}
        <h1 className=" mx-auto max-w-[300px] pb-5 text-center font-zt text-[30px] leading-[90%] tracking-[-2.4px] md:max-w-[100%] md:pb-[64px] md:text-[34px] md:leading-[120%] md:tracking-[-2.72px] xl:pb-[5px] xl:text-[37px] xl:tracking-[-2.96px] 2xl:pb-0 2xl:text-[50px] 2xl:tracking-[-4px]">
          {/* <h1 className=" pb-5 text-center max-w-[300px] md:max-w-[100%] font-zt text-[30px] tracking-[-2.4px] md:pb-[64px] md:text-[34px] md:leading-[120%] md:tracking-[-2.72px] xl:pb-[5px] xl:text-[37px] xl:tracking-[-2.96px] 2xl:pb-0 2xl:text-[50px] 2xl:tracking-[-4px]"> */}
          {pageTitle}
        </h1>
        <div className=" relative mx-auto 2xl:hidden">
          {/* <div className="mx-auto md:max-h-[620px] md:max-w-[calc(541px)] 2xl:hidden"> */}
          <Image
            width={541}
            height={487}
            src={imageUrl}
            className="max-h-[50vh] "
            // className="ml-auto md:max-h-[480px]"
            // className="ml-auto md:max-w-[541px]"
            // className="ml-auto md:max-w-[541px]"
            alt="Survey Result"
          />

          {(result === 'alien' || result === 'king') && (
            <>
              <Image
                src={starsResultSpecialLeft}
                className="absolute left-[7px] top-[-12px] xl:hidden"
                // className="ml-auto md:max-h-[480px]"
                // className="ml-auto md:max-w-[541px]"
                // className="ml-auto md:max-w-[541px]"
                alt="start unique left"
              />
              <Image
                src={starsResultSpecialRight}
                className="absolute right-0 top-[-12px] xl:hidden"
                // className="ml-auto md:max-h-[480px]"
                // className="ml-auto md:max-w-[541px]"
                // className="ml-auto md:max-w-[541px]"
                alt="start unique right"
              />
            </>
          )}
          {result !== 'alien' && result !== 'king' && (
            <>
              <Image
                src={starsResultLeft}
                className="absolute left-0 top-[-70px] xl:hidden"
                // className="ml-auto md:max-h-[480px]"
                // className="ml-auto md:max-w-[541px]"
                // className="ml-auto md:max-w-[541px]"
                alt="start unique left"
              />
              <Image
                src={starsResultRight}
                className="absolute right-0 top-[-45px] xl:hidden"
                // className="ml-auto md:max-h-[480px]"
                // className="ml-auto md:max-w-[541px]"
                // className="ml-auto md:max-w-[541px]"
                alt="start unique right"
              />
            </>
          )}
        </div>
        <div className="mx-auto hidden md:max-h-[calc(10%_+_685px)] 2xl:block">
          <Image
            width={757}
            height={672}
            src={imageUrl}
            className=" md:max-h-[685px] "
            alt="Survey Result"
          />
        </div>
        {/* <div className="mx-auto hidden md:max-w-[calc(10%_+_541px)] 2xl:block">
          <Image
            width={757}
            height={672}
            src={imageUrl}
            className=" md:max-w-[541px]"
            alt="Survey Result"
          />
        </div> */}
        <p className="pt-[30px] text-center font-creato text-[14px] uppercase md:pt-[25px] 2xl:pt-10 2xl:text-[18px]">{pageDescription}</p>
        <div className="flex gap-2.5 pb-[3.9vh] pt-[30px] text-center font-libre text-[22px] leading-[120%] tracking-[-0.44px] md:gap-5 md:pb-[56px] md:pt-[25px] md:text-[26px]  md:tracking-[-0.52px] xl:pb-[40px] 2xl:pb-[94px] 2xl:pt-[40px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">
          {/* <div className="flex gap-2.5 pb-2.5 pt-[30px] text-center font-libre text-[22px] leading-[120%] tracking-[-0.44px] md:gap-5 md:pb-[56px] md:pt-[25px] md:text-[26px]  md:tracking-[-0.52px] xl:pb-[40px] 2xl:pb-[94px] 2xl:pt-[40px] 2xl:text-[35px] 2xl:tracking-[-0.7px]"> */}
          <Link
            className=" basis-full rounded-full  border-2 bg-[#FFBAC2] py-[15px]  transition-all  md:bg-background md:hover:bg-[#FFBAC2]"
            href="/survey"
            //  <p className="font-libre text-[26px] leading-[120%]  tracking-[-0.44px] md:tracking-[-0.52px] 2xl:tracking-[-0.7px] md:text-[26px] md:tracking-[-0.52px] 2xl:text-[35px] 2xl:tracking-[-0.7px]"></p>
          >
            Restart
          </Link>
          <ShareDialog
            result={result}
            imageUrl={imageUrl}
            title={pageTitle}
            description={pageDescription}
          />
          {/* <ShareLink result={result} /> */}
        </div>
      </div>
    </>
  );
}

export default SurveyResult;

export function getDataFromResult({ result }: { result: ResultType }) {
  return {
    result,
    ...resultData[result],
  };
}
export async function generateStaticParams() {
  return results.map(result => ({
    result,
  }));
}

export function generateMetadata({ params }: { params: { result: ResultType } }): Metadata {
  const { metaTitle, metaDescription, imageUrl } = getDataFromResult(params);
  return {
    title: metaTitle,
    description: metaDescription,
    twitter: {
      card: 'summary_large_image',
      site: 'LoLafel by Butcher.studio',
      title: metaTitle,
      description: metaDescription,
      images: [seoImages[params.result]],
    },
    openGraph: {
      siteName: 'LoLafel by Butcher.studio',
      title: metaTitle,
      description: metaDescription,
      type: 'website',
      url: 'https://lolafel.fun',
      images: [seoImages[params.result]],
    },
  };
}
// import { Metadata } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
// import logo from 'public/orionLogo.png';
// interface SurveyResultProps {
//   result: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }
// const results = ['angel', 'demon', 'king', 'sushi'] as const; // Обратите внимание на `as const`
// type ResultType = (typeof results)[number]; // 'angel' | 'devil' | 'king' | 'sushi'
// function SurveyResult({ params }: { params: { result: ResultType } }) {
//   // console.log(params);
//   const { result, title, description, imageUrl } = getDataFromResult(params);
//   // const { result, title, description, imageUrl } = params;
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta
//           name="description"
//           content={description}
//         />
//         <meta
//           property="og:title"
//           content={title}
//         />
//         <meta
//           property="og:description"
//           content={description}
//         />
//         <meta
//           property="og:image"
//           content={imageUrl}
//         />
//         <meta
//           name="twitter:card"
//           content="summary_large_image"
//         />
//         <meta
//           name="twitter:title"
//           content={title}
//         />
//         <meta
//           name="twitter:description"
//           content={description}
//         />
//         <meta
//           name="twitter:image"
//           content={imageUrl}
//         />
//       </Head>
//       <div>
//         <h1>{title}</h1>
//         <p>{description}</p>
//         <Image
//           width={1000}
//           height={1000}
//           src={imageUrl}
//           alt="Survey Result"
//         />
//       </div>
//     </>
//   );
// }

// export default SurveyResult;

// export function getDataFromResult({ result }: { result: ResultType }) {
//   const titles = {
//     angel: 'Вы - Ангел!',
//     devil: 'Вы - Дьявол!',
//     king: 'Вы - Король!',
//     sushi: 'Вы - Суши!',
//   };

//   const descriptions = {
//     angel: 'Чистосердечный и добрый, вы всегда стремитесь помочь.',
//     devil: 'Озорной и хитрый, вы всегда найдёте способ развлечься.',
//     king: 'Достойный и мудрый, ваше правление бесспорно.',
//     sushi: 'Уникальный и изысканный, вы ценитель тонких вкусов.',
//   };

//   const imageUrls = {
//     angel: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
//     devil: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
//     king: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
//     sushi: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
//   };
//   return {
//     result,
//     title: titles[result],
//     description: descriptions[result],
//     imageUrl: imageUrls[result],
//   };
// }
// export async function generateStaticParams() {
//   return results.map(result => ({
//     result,
//   }));
// }

// export function generateMetadata({ params }: { params: { result: ResultType } }): Metadata {
//   const { result, title, description, imageUrl } = getDataFromResult(params);
//   return {
//     title,
//     description,

//     twitter: {
//       card: 'summary_large_image',
//       site: "Hey, I'm Falafel",
//       title,
//       description,
//       images: [
//         {
//           url: imageUrl,
//           width: 1000,
//           height: 1000,
//         },
//       ],
//     },
//     openGraph: {
//       siteName: "Hey, I'm Falafel",
//       title,
//       description,
//       images: [
//         {
//           url: imageUrl,
//           width: 1000,
//           height: 1000,
//         },
//       ],
//     },
//   };
// }

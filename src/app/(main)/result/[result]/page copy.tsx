// import { Metadata } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
// interface SurveyResultProps {
// 	result: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }
// const results = ['angel', 'demon', 'king', 'sushi', 'artist', 'alien'] as const;
// // const results = ['demon', 'king', 'sushi', 'artist', 'alien'] as const;
// type ResultType = (typeof results)[number];

// function SurveyResult({ params }: { params: { result: ResultType } }) {
//   const { result, title, description, imageUrl } = getDataFromResult(params);
//   return (
//     <>
//       <div className="flex grow flex-col justify-end border-2 border-red-500">
//         <p className=" pb-5 text-center font-libre text-[22px] font-normal  leading-7 tracking-[-8%] md:pb-[30px] md:text-[26px] 2xl:text-[35px]">
//           Your result:
//         </p>
//         <h1 className=" pb-5 text-center font-zt text-[30px] tracking-[-2.4px] md:pb-[64px] md:text-[34px] md:leading-[120%] md:tracking-[-2.72px] xl:pb-[5px] xl:text-[37px] xl:tracking-[-2.96px] 2xl:pb-0 2xl:text-[50px] 2xl:tracking-[-4px]">
//           {title}
//         </h1>
//         <div className="mx-auto md:max-w-[calc(541px)] 2xl:hidden">
//           {/* <div className="md:ml-[20px] md:mr-[50px] "> */}
//           {/* <div className="md:pl-[20px] md:pr-[50px] "> */}
//           {/* <div className='md:max-w-[541px]'> */}
//           {/* <div className='md:max-w-[541px]'> */}
//           <Image
//             width={541}
//             height={487}
//             src={imageUrl}
//             // className="md:ml-auto md:mr-[6.5%] md:max-w-[calc(71%_+_40px)]"
//             // className="md:max-w-[calc(71%_+_40px)] md:ml-auto md:mr-[50px]"
//             // className="md:max-w-[calc(71%_+_40px)] md:ml-auto md:mr-[50px]"
//             // className="md:max-w-[70%] md:max-h-[50%]"
//             className="ml-auto md:max-w-[541px]"
//             alt="Survey Result"
//           />
//         </div>
//         <div className="mx-auto hidden md:max-w-[calc(10%_+_541px)] 2xl:block">
//           {/* <div className="md:ml-[20px] md:mr-[50px] "> */}
//           {/* <div className="md:pl-[20px] md:pr-[50px] "> */}
//           {/* <div className='md:max-w-[541px]'> */}
//           {/* <div className='md:max-w-[541px]'> */}
//           <Image
//             width={757}
//             height={672}
//             src={imageUrl}
//             // className="md:ml-auto md:mr-[6.5%] md:max-w-[calc(71%_+_40px)]"
//             // className="md:max-w-[calc(71%_+_40px)] md:ml-auto md:mr-[50px]"
//             // className="md:max-w-[calc(71%_+_40px)] md:ml-auto md:mr-[50px]"
//             // className="md:max-w-[70%] md:max-h-[50%]"
//             className="ml-auto md:max-w-[541px]"
//             alt="Survey Result"
//           />
//         </div>
//         <p className="pt-[30px] text-center font-creato text-[14px] uppercase md:pt-[25px] 2xl:pt-10 2xl:text-[18px]">{description}</p>
//         <div className="flex gap-2.5 pb-2.5 pt-[30px] text-center font-libre text-[22px] tracking-[2%] md:gap-5 md:pb-[56px] md:pt-[25px] md:text-[26px] xl:pb-[40px]  2xl:pb-[94px] 2xl:pt-[40px] 2xl:text-[35px]">
//           <Link
//             className="basis-full rounded-full  border-2 bg-[#FFBAC2] py-[15px] transition-all md:bg-background md:hover:bg-[#FFBAC2]"
//             href="/survey"
//           >
//             Restart
//           </Link>
//           <Link
//             className="basis-full rounded-full border-2 bg-[#FFA41C] py-[15px] transition-all md:bg-background md:hover:bg-[#FFA41C]"
//             href="/survey"
//           >
//             Share result
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SurveyResult;

// export function getDataFromResult({ result }: { result: ResultType }) {
//   const titles = {
//     king: 'You are a falafel king',
//     artist: 'You are a falafel artist',
//     alien: 'You are a falafel alien',
// 		demon: 'You are a falafel demon',
// 		angel: 'You are a falafel angel',
//     sushi: 'We discovered that you are sushi!',
//   };

//   const descriptions = {
//     king: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//     artist: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//     alien: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//     demon: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//     sushi: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//     angel: 'Your answer can say a lot about how you feel. Musical preferences can reflect your mood and emotional state.',
//   };

//   const imageUrls = {
//     angel: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_angel.svg',
//     demon: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_demon.svg',
//     king: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_king.svg',
//     sushi: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_sushi.svg',
//     artist: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_artist.svg',
//     alien: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_alien.svg',
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
//       site: 'LoLafel by Butcher.studio',
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
//       siteName: 'LoLafel by Butcher.studio',
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
// // import { Metadata } from 'next';
// // import Head from 'next/head';
// // import Image from 'next/image';
// // import logo from 'public/orionLogo.png';
// // interface SurveyResultProps {
// //   result: string;
// //   title: string;
// //   description: string;
// //   imageUrl: string;
// // }
// // const results = ['angel', 'demon', 'king', 'sushi'] as const; // Обратите внимание на `as const`
// // type ResultType = (typeof results)[number]; // 'angel' | 'devil' | 'king' | 'sushi'
// // function SurveyResult({ params }: { params: { result: ResultType } }) {
// //   // console.log(params);
// //   const { result, title, description, imageUrl } = getDataFromResult(params);
// //   // const { result, title, description, imageUrl } = params;
// //   return (
// //     <>
// //       <Head>
// //         <title>{title}</title>
// //         <meta
// //           name="description"
// //           content={description}
// //         />
// //         <meta
// //           property="og:title"
// //           content={title}
// //         />
// //         <meta
// //           property="og:description"
// //           content={description}
// //         />
// //         <meta
// //           property="og:image"
// //           content={imageUrl}
// //         />
// //         <meta
// //           name="twitter:card"
// //           content="summary_large_image"
// //         />
// //         <meta
// //           name="twitter:title"
// //           content={title}
// //         />
// //         <meta
// //           name="twitter:description"
// //           content={description}
// //         />
// //         <meta
// //           name="twitter:image"
// //           content={imageUrl}
// //         />
// //       </Head>
// //       <div>
// //         <h1>{title}</h1>
// //         <p>{description}</p>
// //         <Image
// //           width={1000}
// //           height={1000}
// //           src={imageUrl}
// //           alt="Survey Result"
// //         />
// //       </div>
// //     </>
// //   );
// // }

// // export default SurveyResult;

// // export function getDataFromResult({ result }: { result: ResultType }) {
// //   const titles = {
// //     angel: 'Вы - Ангел!',
// //     devil: 'Вы - Дьявол!',
// //     king: 'Вы - Король!',
// //     sushi: 'Вы - Суши!',
// //   };

// //   const descriptions = {
// //     angel: 'Чистосердечный и добрый, вы всегда стремитесь помочь.',
// //     devil: 'Озорной и хитрый, вы всегда найдёте способ развлечься.',
// //     king: 'Достойный и мудрый, ваше правление бесспорно.',
// //     sushi: 'Уникальный и изысканный, вы ценитель тонких вкусов.',
// //   };

// //   const imageUrls = {
// //     angel: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
// //     devil: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
// //     king: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
// //     sushi: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
// //   };
// //   return {
// //     result,
// //     title: titles[result],
// //     description: descriptions[result],
// //     imageUrl: imageUrls[result],
// //   };
// // }
// // export async function generateStaticParams() {
// //   return results.map(result => ({
// //     result,
// //   }));
// // }

// // export function generateMetadata({ params }: { params: { result: ResultType } }): Metadata {
// //   const { result, title, description, imageUrl } = getDataFromResult(params);
// //   return {
// //     title,
// //     description,

// //     twitter: {
// //       card: 'summary_large_image',
// //       site: "Hey, I'm Falafel",
// //       title,
// //       description,
// //       images: [
// //         {
// //           url: imageUrl,
// //           width: 1000,
// //           height: 1000,
// //         },
// //       ],
// //     },
// //     openGraph: {
// //       siteName: "Hey, I'm Falafel",
// //       title,
// //       description,
// //       images: [
// //         {
// //           url: imageUrl,
// //           width: 1000,
// //           height: 1000,
// //         },
// //       ],
// //     },
// //   };
// // }

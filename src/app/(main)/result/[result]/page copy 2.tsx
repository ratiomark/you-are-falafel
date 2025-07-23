// import { Metadata } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
// import ShareLink from './shareLink';
// interface SurveyResultProps {
//   result: string;
//   title: string;
//   description: string;
//   imageUrl: string;
// }
// const results = ['angel', 'demon', 'king', 'sushi', 'artist', 'alien'] as const;

// const resultData = {
//   king: {
//     pageTitle: 'You are a falafel king',
//     pageDescription: `Wow! What a star we have here! It's the boss of all bosses, the ultimate chief of chiefs. Well, hello there, king of the world! 👑`,
//     metaTitle: "I'm the Falafel King! Which quirky food are you? Butcher.Studio quiz",
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_king.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// I'm the Falafel King! Which food royalty are you? Take the quiz! \n
// Bow down to the Falafel King! 👑🧆 This quirky quiz from Butcher Studio crowned me as culinary royalty. Curious about your food kingdom? Take the test and rule your flavor empire! \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 👑🧆 I'm the Falafel King! This quirky quiz crowned me as culinary royalty. Which food ruler are you? Take the test and claim your flavor throne! \n
// Test your taste: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
//   angel: {
//     pageTitle: 'You are a falafel angel',
//     pageDescription: `Oh là là, we've got the embodiment of tenderness and kindness right here! 😇 A walking ray of sunshine, warming hearts all around. Meet the Falafel Angel! 💖`,
//     metaTitle: "I'm an Angel Falafel! Discover your food persona. Butcher.Studio quiz",
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_angel.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// I'm an Angel Falafel! What's your heavenly flavor? Find out now! \n
// Turns out I'm a divine Angel Falafel! 😇🧆 This fun quiz by Butcher Studio revealed my celestial taste. Wonder about your foodie halo? Discover your angelic flavor now! \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 😇🧆 Heavenly news! I'm an Angel Falafel! This divine quiz revealed my celestial taste. Curious about your foodie halo? Discover your angelic flavor now! \n
// Test your taste: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
//   demon: {
//     pageTitle: 'You are a falafel demon',
//     pageDescription: `Attention, mortals! 🚨 From the depths of the underworld rises the true lord of chaos! Bold, rebellious, irresistible - Falafel Lucifer! 👹`,
//     metaTitle: 'Devilish Falafel here! Find your tasty alter ego: Butcher.Studio quiz',
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_demon.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// I'm a Devil Falafel! What's your spicy alter ego? Try the quiz! \n
// Hot news: I'm a devilishly tasty Falafel! 😈🧆 This spicy quiz from Butcher Studio unveiled my fiery food soul. Curious about your culinary dark side? Find out now! \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 😈🧆 Hot take: I'm a Devil Falafel! This spicy quiz unveiled my fiery food soul. What's your culinary dark side? Dare to find out! \n
// Unleash your inner food demon: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
//   alien: {
//     pageTitle: 'You are a falafel alien',
//     pageDescription: `Alien Falafel, you're a mystery of the Universe! 🛸 Your unique perspective and otherworldly charm are conquering the planet. Continue your mission!`,
//     metaTitle: "Alien Falafel reporting! What's your flavor? Butcher.Studio quiz",
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_alien.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// I'm an Alien Falafel! What's your cosmic flavor? Take the test! \n
// Greetings, Earthlings! I'm an otherworldly Alien Falafel! 👽🧆 This cosmic quiz by Butcher Studio revealed my extraterrestrial taste. What's your space food persona? \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 👽🧆 Greetings, Earthlings! I'm an Alien Falafel! This cosmic quiz revealed my extraterrestrial taste. What's your space food persona? \n
// Beam up to the quiz: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
//   artist: {
//     pageTitle: 'You are a falafel artist',
//     pageDescription: `Falafel Virtuoso, you turn ordinary moments into magic! 🎩 Your talent and charisma are worthy of admiration. Create, wizard, create!`,
//     metaTitle: 'Artistic Falafel masterpiece! Your food twin? Butcher.Studio quiz',
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_artist.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// I'm an Artist Falafel! What's your creative flavor? Discover now! \n
// Voila! I'm a masterpiece Artist Falafel! 🎨🧆 This colorful quiz from Butcher Studio painted my flavorful portrait. Want to discover your culinary canvas? Create now! \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 🎨🧆 Voila! I'm an Artist Falafel masterpiece! This colorful quiz painted my flavorful portrait. Ready to discover your culinary canvas? \n
// Create your food art: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
//   sushi: {
//     pageTitle: 'We discovered that you are sushi!',
//     pageDescription: `Wow, what a surprise! 😄 Among all the falafels, a real little Sushi has snuck in - small but mighty! 💪 Your uniqueness deserves a round of applause!`,
//     metaTitle: "Surprise! I'm Sushi Falafel! Your food shock? Butcher.Studio quiz",
//     metaDescription:
//       "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
//     imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_sushi.svg',
//     copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
// Surprise! I'm Sushi Falafel! What's your food plot twist? Quiz time! \n
// Plot twist: I'm a Sushi Falafel fusion! 🍣🧆 This quirky quiz by Butcher Studio rolled up my unexpected food identity. Curious about your culinary surprise? Uncover now! \n
// Check out Butcher Studio: https://butcher.studio \n
// Take the quiz here: https://lolafel.fun`,
//     twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
// 🍣🧆 Plot twist: I'm a Sushi Falafel fusion! This quirky quiz rolled up my unexpected food identity. Curious about your culinary surprise? \n
// Uncover your food shock: https://lolafel.fun \n
// Created by https://butcher.studio \n`,
//   },
// };
// type ResultType = (typeof results)[number];

// function SurveyResult({ params }: { params: { result: ResultType } }) {
//   const { pageTitle, result, pageDescription, imageUrl } = getDataFromResult(params);
//   return (
//     <>
//       <div className="flex grow flex-col justify-end border-2 border-red-500">
//         <p className=" pb-5 text-center font-libre text-[22px] font-normal  leading-7 tracking-[-8%] md:pb-[30px] md:text-[26px] 2xl:text-[35px]">
//           Your result:
//         </p>
//         <h1 className=" pb-5 text-center font-zt text-[30px] tracking-[-2.4px] md:pb-[64px] md:text-[34px] md:leading-[120%] md:tracking-[-2.72px] xl:pb-[5px] xl:text-[37px] xl:tracking-[-2.96px] 2xl:pb-0 2xl:text-[50px] 2xl:tracking-[-4px]">
//           {pageTitle}
//         </h1>
//         <div className="mx-auto md:max-w-[calc(541px)] 2xl:hidden">
//           <Image
//             width={541}
//             height={487}
//             src={imageUrl}
//             className="ml-auto md:max-w-[541px]"
//             alt="Survey Result"
//           />
//         </div>
//         <div className="mx-auto hidden md:max-w-[calc(10%_+_541px)] 2xl:block">
//           <Image
//             width={757}
//             height={672}
//             src={imageUrl}
//             className="ml-auto md:max-w-[541px]"
//             alt="Survey Result"
//           />
//         </div>
//         <p className="pt-[30px] text-center font-creato text-[14px] uppercase md:pt-[25px] 2xl:pt-10 2xl:text-[18px]">{pageDescription}</p>
//         <div className="flex gap-2.5 pb-2.5 pt-[30px] text-center font-libre text-[22px] tracking-[2%] md:gap-5 md:pb-[56px] md:pt-[25px] md:text-[26px] xl:pb-[40px]  2xl:pb-[94px] 2xl:pt-[40px] 2xl:text-[35px]">
//           <Link
//             className="basis-full rounded-full  border-2 bg-[#FFBAC2] py-[15px] transition-all md:bg-background md:hover:bg-[#FFBAC2]"
//             href="/survey"
//           >
//             Restart
//           </Link>
//           <ShareLink result={result} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SurveyResult;

// export function getDataFromResult({ result }: { result: ResultType }) {
//   return {
//     result,
//     ...resultData[result],
//   };
// }
// export async function generateStaticParams() {
//   return results.map(result => ({
//     result,
//   }));
// }

// export function generateMetadata({ params }: { params: { result: ResultType } }): Metadata {
//   const { metaTitle, metaDescription, imageUrl } = getDataFromResult(params);
//   return {
//     title: metaTitle,
// 		description: metaDescription,
		
//     twitter: {
//       card: 'summary_large_image',
//       site: 'LoLafel by Butcher.studio',
//       title: metaTitle,
//       description: metaDescription,

//       images: [
//         {
//           url: imageUrl,
//           // width: 1000,
//           // height: 1000,
//         },
//       ],
//     },
//     openGraph: {
//       siteName: 'LoLafel by Butcher.studio',
//       title: metaTitle,
//       description: metaDescription,
// 			type: 'website',
// 			url: 'https://lolafel.fun',
//       images: [
//         {
// 					url: imageUrl,
					
//           // width: 1000,
//           // height: 1000,
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

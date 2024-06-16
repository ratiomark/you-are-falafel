import Footer from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="custom-scrollbar-2 w-full pt-[30px] ">
        <Header />
        <main className="custom-scrollbar-2 mx-auto flex h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col px-2.5 pt-[7vh] xl:px-10 xl:pt-[76px]">
          <div className="flex flex-col items-center justify-center  gap-[2vh] text-center xl:gap-0">
            <h1 className="font-libre text-[22px] leading-7 tracking-[0.44px] xl:text-[35px] xl:leading-[120%] xl:tracking-[-0.7px]">What kind of...</h1>
            <h2 className=" font-zt text-[60px] leading-[54px] tracking-[-4.8px]  xl:pt-0 xl:text-[140px]  xl:leading-[120%] xl:tracking-[-11.2px]">
              Falafel are you today?
            </h2>
          </div>
          <div
            id="content"
            className="flex grow   flex-col  justify-between"
          >
            <div className="hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[5vh]">
              {/* <div className="hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[255px]"> */}
              <div className="flex w-full max-w-[1420px]  items-center justify-between">
                <p className=" max-w-[142px] text-center leading-[120%]">This is an entertainment website</p>
                <p className=" max-w-[110px] text-center leading-[120%]">
                  created <br />
                  by butcher studio
                </p>
                {/* <p className=" text-center leading-[120%] xl:hidden xl:max-w-[110px]">created by butcher studio</p> */}
              </div>
            </div>

            {/* mobile & small */}
            <div className="flex flex-col items-center justify-center pt-[15px] font-creato text-[14px] uppercase leading-4 md:flex-row md:gap-[2vw] md:pt-[3vh] xl:hidden">
              <p className="">This is an entertainment website</p>
              <p className="">created by butcher studio</p>
            </div>

            <div className="  flex w-full pb-[30px] text-center font-libre text-[22px] leading-7  tracking-[0.44px] md:pb-[72px] md:text-[26px] md:leading-8 xl:pb-[6vh] 2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]">
              <Link
                href="/survey"
                className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
              >
                Start test
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
// import Footer from '@/shared/components/Footer';
// import { Header } from '@/shared/components/Header';
// import { headers } from 'next/headers';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from 'public/logo (2).svg';
// // color: var(--black-brown, #1C0F00);
// // text-align: center;
// // /* h3 35 */
// // font-family: "Libre Caslon Condensed";
// // font-size: 35px;
// // font-style: normal;
// // font-weight: 400;
// // line-height: 120%; /* 42px */
// // letter-spacing: -0.7px;
// // font-family: "ZT Chintzy";
// // font-size: 140px;
// // font-style: normal;
// // font-weight: 900;
// // line-height: 120%; /* 168px */
// // letter-spacing: -11.2px;
// export default function Home() {
//   // redirect('/profile')
//   const headersList = headers();
//   const currentPath = headersList.get('x-pathname') || '/';
//   // redirect('/design')
//   return (
//     <>
//       {/* <SideBar currentPath={currentPath} /> */}

//       <div className="custom-scrollbar-2 w-full pt-[30px] ">
//         {/* <div className="custom-scrollbar-2 mx-auto  h-screen w-full border-2 border-green-400"> */}
//         {/* <div className="backgroundImage custom-scrollbar-2 mx-auto  h-full w-full "> */}
//         {/* Content goes here */}
//         {/* <div className="main-layout mx-auto grid min-h-screen  grid-rows-[var(--header-height)_1fr] "> */}
//         {/* <div className="main-layout mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[var(--header-height)_1fr] "> */}
//         <Header />
//         {/* <main className="custom-scrollbar-2 mx-auto  min-h-[calc(100vh_-_var(--header-height))]  px-10 pt-[76px]"> */}
//         <main className="custom-scrollbar-2 mx-auto flex min-h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col px-10 pt-[76px]">
//           {/* <main className="custom-scrollbar-2 mx-auto  min-h-[calc(100vh_-_var(--header-height))] border border-purple-500 pl-10 pr-10 pt-[76px] md:pl-0"> */}
//           {/* <div className="mx-auto"> */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <h1 className="font-libre text-[35px] leading-[120%] tracking-[-0.7px]">What kind of...</h1>
//             <h2 className="font-zt text-[140px] leading-[120%]  tracking-[-11.2px]">Falafel are you today?</h2>
//           </div>
//           <div
//             id="content"
//             className="flex h-full grow flex-col  justify-between"
//           >
//             <div className="flex items-center justify-center pt-[255px]  font-creato uppercase">
//               <div className="flex w-full max-w-[1420px]  items-center justify-between xl:justify-center">
//                 <p className=" max-w-[142px] text-center leading-[120%]">This is an entertainment website</p>
//                 <p className=" max-w-[110px] text-center leading-[120%]">
//                   created <br />
//                   by butcher studio
//                 </p>
//               </div>
//             </div>

//             <div className=" flex w-full  pb-[2vw] text-center  font-libre text-[35px] leading-[120%] tracking-[-0.7px]">
//               <Link
//                 href="/survey"
//                 className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-5"
//               >
//                 Start test
//               </Link>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }
/* h3 35 */
// display: flex;
// width: 1920px;
// height: 703px;
// padding: 80px 40px;
// flex-direction: column;
// justify-content: center;
// align-items: flex-start;
// gap: 80px;
// flex-shrink: 0;
// font-family: "Libre Caslon Condensed";
// font-size: 35px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 42px */
// letter-spacing: -0.7px;
/* menu caps 18 */
// font-family: "Creato Display";
// font-size: 18px;
// font-style: normal;
// font-weight: 400;
// line-height: 120%; /* 21.6px */
// text-transform: uppercase;
// import { SideBar } from '@/shared/components/SideBar/SideBar';
// import { headers } from 'next/headers';
// import Image from 'next/image';
// import { redirect } from 'next/navigation';

// export default function Home() {
//   // redirect('/profile')
//   const headersList = headers();
//   const currentPath = headersList.get('x-pathname') || '/';
//   // redirect('/design')
//   return (
//     <>
//       {/* <SideBar currentPath={currentPath} /> */}

//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//           <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//             Get started by editing&nbsp;
//             <code className="font-mono font-bold">src/app/page.tsx</code>
//           </p>
//           <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//             <a
//               className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//               href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               By{' '}
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 className="dark:invert"
//                 width={100}
//                 height={24}
//                 priority
//               />
//             </a>
//           </div>
//         </div>

//         <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//           <Image
//             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={180}
//             height={37}
//             priority
//           />
//         </div>

//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Docs <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Learn <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//           </a>

//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Templates <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-sm opacity-50">Explore starter templates for Next.js.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <h2 className="mb-3 text-2xl font-semibold">
//               Deploy <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
//             </h2>
//             <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
//           </a>
//         </div>
//       </main>
//     </>
//   );
// }

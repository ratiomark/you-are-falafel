import Footer from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import Image from 'next/image';
import nextArrow from 'public/nextArrow.svg';
import prevArrow from 'public/previousArrow.svg';
// import cloudImage from 'public/cloudv2.svg';
import cloudImage from 'public/cloudImage.png';
import cloud from 'public/cloud.svg';
import cloud2 from 'public/cloud2.svg';
import cloud3 from 'public/cloud3.svg';
import starSurveyTopMobile from 'public/starSurveyTopMobile.svg';
import cloudsMobileRight from 'public/cloudsRight.svg';
import cloudsMobileLeft from 'public/cloudsLeft.svg';
import starsResultLeftXl from 'public/starsResultLeftXl.svg';
import starsResultRightXl from 'public/starsResultRightXl.svg';
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <div className="custom-scrollbar-2 mx-auto  h-screen w-full border-2 border-green-400">
    //   <Header />
    //   <main className="custom-scrollbar-2 min-h-[calc(100vh_-_var(--header-height)_-_20px)] border border-purple-500 md:pl-0">
    //     {children}
    //   </main>
    // </div>
    <div className="custom-scrollbar-2 relative  w-full overflow-clip pt-[30px] ">
      <div className="relative overflow-hidden">
        <Header />
        <main className="custom-scrollbar-2 relative mx-auto flex  flex-col px-2.5 md:px-5 xl:px-10">
          {/* <main className="custom-scrollbar-2 relative mx-auto flex min-h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col px-2.5 md:px-5 xl:px-10"> */}
          {children}
        </main>
      </div>
      <Footer />
      <Image
        src={starsResultLeftXl}
        className="absolute left-[15px] top-[67px] hidden xl:block 2xl:left-[20px] 2xl:top-[90px] 2xl:w-[608px]"
        // className="ml-auto md:max-h-[480px]"
        // className="ml-auto md:max-w-[541px]"
        // className="ml-auto md:max-w-[541px]"
        alt="start unique left"
      />
      <Image
        src={starsResultRightXl}
        className="absolute right-[31px] top-[225px] hidden xl:block 2xl:right-[40px] 2xl:top-[339px] 2xl:w-[496px]"
        // className="ml-auto md:max-h-[480px]"
        // className="ml-auto md:max-w-[541px]"
        // className="ml-auto md:max-w-[541px]"
        alt="start unique right"
      />
      <Image
        src={starSurveyTopMobile}
        alt="stars"
        className="absolute right-1/2 top-[127px] translate-x-1/2  md:hidden "
      />
      <Image
        src={cloudsMobileLeft}
        alt="cloud top left"
        className="absolute left-[-68px] top-[-2px] z-10 w-[230px] md:left-[-70px] md:top-[-15px] md:w-[342px] xl:left-[-25px] xl:top-[-15px] 2xl:left-[-36px] 2xl:top-[-22px]"
        // className="absolute left-[-68px] top-[-2px] z-10 w-[230px] "
      />
      <Image
        src={cloudsMobileRight}
        alt="cloud top right"
        className="absolute right-[-86px] top-[-2px] z-10  w-[230px] md:right-[-69px]  md:top-[-15px] md:w-[342px] xl:right-[-25px] xl:top-[-15px] 2xl:right-[-36px] 2xl:top-[-22px]"
        // className="absolute right-[-85px] top-[-2px] z-10 w-[230px] md:hidden "
      />
    </div>

    // <div className=" main-layout mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[var(--header-height)_1fr] ">
    //   <Header />
    //   {/* <div className="grid h-full grid-cols-[1fr] pt-20"> */}
    //   <div className="flex h-full flex-col">
    //     {/* <div className="grid h-full grid-cols-[minmax(240px,auto)_1fr] pt-20"> */}
    //     <SideBar />
    //     <main className="custom-scrollbar-2 pl-[240px] pt-[80px]">
    //       {/* <main className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto"> */}
    //       <div className="relative border-l px-6 pt-12">{children}</div>
    //     </main>
    //   </div>
    // </div>
    // <div className=" min-h-screen overflow-hidden">
    //   <Header />
    //   {/* <div className="grid h-full grid-cols-[1fr] pt-20"> */}
    //   <div className="flex h-full flex-col">
    //     {/* <div className="grid h-full grid-cols-[minmax(240px,auto)_1fr] pt-20"> */}
    //     <SideBar />
    //     <main className="pl-[240px] pt-[80px] custom-scrollbar-2">
    //       {/* <main className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto"> */}
    //       <div className="relative border-l px-6 pt-12">{children}</div>
    //     </main>
    //   </div>
    // </div>
  );
}
// import type { Metadata } from 'next'
// import { SideBar } from '@/shared/components/SideBar/SideBar'
// import { Header } from '@/shared/components/Header'

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     // <div className="grid min-h-screen grid-rows-[var(--header-height)_1fr] ">
//     //   <Header />
//     //   <div className="">
//     //     <SideBar />
//     //     <main className="custom-scrollbar-2 pt-[var(--header-height)] overflow-y-auto pl-[240px]">
//     //       <div className="relative border-l px-6 pt-12">{children}</div>
//     //     </main>
//     //   </div>
//     // </div>
//     <div className="main-layout mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[var(--header-height)_1fr] ">
//       <Header />
//       <SideBar />
//       <main className="custom-scrollbar-2 pl-[240px] md:pl-0">
//         <div className="relative border-l px-6 pt-12">{children}</div>
//       </main>
//     </div>
//     // <div className=" main-layout mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[var(--header-height)_1fr] ">
//     //   <Header />
//     //   {/* <div className="grid h-full grid-cols-[1fr] pt-20"> */}
//     //   <div className="flex h-full flex-col">
//     //     {/* <div className="grid h-full grid-cols-[minmax(240px,auto)_1fr] pt-20"> */}
//     //     <SideBar />
//     //     <main className="custom-scrollbar-2 pl-[240px] pt-[80px]">
//     //       {/* <main className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto"> */}
//     //       <div className="relative border-l px-6 pt-12">{children}</div>
//     //     </main>
//     //   </div>
//     // </div>
//     // <div className=" min-h-screen overflow-hidden">
//     //   <Header />
//     //   {/* <div className="grid h-full grid-cols-[1fr] pt-20"> */}
//     //   <div className="flex h-full flex-col">
//     //     {/* <div className="grid h-full grid-cols-[minmax(240px,auto)_1fr] pt-20"> */}
//     //     <SideBar />
//     //     <main className="pl-[240px] pt-[80px] custom-scrollbar-2">
//     //       {/* <main className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto"> */}
//     //       <div className="relative border-l px-6 pt-12">{children}</div>
//     //     </main>
//     //   </div>
//     // </div>
//   )
// }

import Footer from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import Image from 'next/image';
import cloud from 'public/cloud.svg';
import cloud2 from 'public/cloud2.svg';
import cloud3 from 'public/cloud3.svg';
import cloudsMobileRight from 'public/cloudsRight.svg';
import cloudsMobileLeft from 'public/cloudsLeft.svg';
import starsMobile from 'public/starsMobile.svg';
import starsMobileYellow from 'public/starMobileYellow.svg';
import starBlackRightMobile from 'public/starBlackRightMobile.svg';
import starMiddleMobile from 'public/starMiddleMobile.svg';
import starMdTop from 'public/starMdTop.svg';
import falafelWithStars from 'public/falafel1440.svg';
// import falafelOnly from 'public/onlyFalafel1440.svg';
import falafelOnly from 'public/falafelMain1440.svg';
import falafelMain1920 from 'public/falafelMain1920.svg';
// import stars1440 from 'public/stars1440.svg';
// import stars360 from 'public/starsSurvey360.svg';
import stars360 from 'public/starsSurve360.svg';
import stars768 from 'public/starsSurvey768.svg';
import stars1440 from 'public/starsSurvey1440.svg';
import stars1920 from 'public/startSurvey1920.svg';
import sun from 'public/sun.svg';
import Transition, { Transition2 } from '@/shared/components/Transition';
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" custom-scrollbar-2 relative w-full  overflow-clip pt-[30px]">
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

      {/* <Image
        src={starMiddleMobile}
        alt="star"
        // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
        className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden  "
      />
      <Image
        src={starMdTop}
        alt="star"
        // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
        className="absolute left-[22.5vh] top-[15.5vh] z-10  hidden w-[34px] md:block xl:hidden"
      />
      <Image
        src={starMiddleMobile}
        alt="star"
        // className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
        className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
      /> */}
      {/* <Transition2 xStart={20}> */}
      <Image
        src={sun}
        alt="sun"
        className="animate-sun absolute right-[95px]  top-[149px] z-[5] hidden w-[177px] max-w-[89vw] md:block xl:right-[249px] xl:top-[49px] xl:w-[210px]  2xl:right-[368px] 2xl:top-[65px]   2xl:w-[279px]"
        // className="absolute  right-[50%] top-[0.5vh] z-[5] hidden w-[calc(100%_-_80px)] max-w-[100vw]  translate-x-1/2 xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-10 hidden min-w-[972] max-w-[100vw]  translate-x-1/2 xl:block"
      />
      {/* </Transition2> */}

      <Image
        src={stars360}
        alt="stars"
        className="animate-stars-no-delay absolute right-[9.58px] top-[134px] z-[5] w-[calc(100%_-_177.68px)]  md:hidden "
        // className="animate-stars-no-delay absolute left-[4px] top-[15vh] z-[5] w-[calc(100%_-_13.5px)]  md:hidden "
        // className="animate-stars-appear absolute left-[85px] top-[15vh] z-[5] hidden  max-w-[89vw] xl:block  2xl:hidden"
        // className="absolute  right-[50%] top-[0.5vh] z-[5] hidden w-[calc(100%_-_80px)] max-w-[100vw]  translate-x-1/2 xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-10 hidden min-w-[972] max-w-[100vw]  translate-x-1/2 xl:block"
      />

      <Image
        src={stars768}
        alt="stars"
        className="animate-stars-no-delay absolute left-[47px] top-[15vh] z-[5] hidden  w-[calc(100%_-_88px)] md:block xl:hidden  "
        // className="animate-stars-appear absolute left-[85px] top-[15vh] z-[5] hidden  max-w-[89vw] xl:block  2xl:hidden"
        // className="absolute  right-[50%] top-[0.5vh] z-[5] hidden w-[calc(100%_-_80px)] max-w-[100vw]  translate-x-1/2 xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-10 hidden min-w-[972] max-w-[100vw]  translate-x-1/2 xl:block"
      />
      <Image
        src={stars1440}
        alt="stars"
        className="animate-stars-no-delay absolute left-[85px] top-[15vh] z-[5] hidden  w-[calc(100%_-_188px)] xl:block  2xl:hidden"
        // className="animate-stars-appear absolute left-[85px] top-[15vh] z-[5] hidden  max-w-[89vw] xl:block  2xl:hidden"
        // className="absolute  right-[50%] top-[0.5vh] z-[5] hidden w-[calc(100%_-_80px)] max-w-[100vw]  translate-x-1/2 xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-10 hidden min-w-[972] max-w-[100vw]  translate-x-1/2 xl:block"
      />
      <Image
        src={stars1920}
        alt="stars"
        // className="absolute  left-[144px] top-[15vh] z-[5] hidden   max-w-[86vw]  2xl:block"
        className="animate-stars-no-delay absolute left-[114px] top-[15vh] z-[5] hidden   w-[calc(100%_-_251px)] 2xl:block"
        // className="animate-stars-appear absolute left-[114px] top-[15vh] z-[5] hidden   w-[1667px] 2xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-[5] hidden w-[calc(100%_-_80px)] max-w-[100vw]  translate-x-1/2 xl:block"
        // className="absolute  right-[50%] top-[0.5vh] z-10 hidden min-w-[972] max-w-[100vw]  translate-x-1/2 xl:block"
      />
      {/* ----------------- */}

      <div className="relative overflow-hidden">
        <Header />
        <main className=" custom-scrollbar-2 relative mx-auto flex min-h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col  px-2.5 md:px-5 xl:px-10">
          {/* <main className=" custom-scrollbar-2 relative border-2 border-pink-400 justify-end pb-[90px] md:pb-[0px] mx-auto flex min-h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col px-2.5 md:px-5 xl:px-10"> */}
          {children}
          <Image
            src={cloudsMobileLeft}
            alt="cloud top left"
            className="absolute bottom-[-2px] right-[-68px] z-10 w-[230px] rotate-180 md:bottom-[-15px] md:right-[-70px] md:w-[342px] xl:bottom-[-15px] xl:right-[-25px] 2xl:bottom-[-22px] 2xl:right-[-36px]"
            // className="absolute left-[-68px] top-[-2px] z-10 w-[230px] "
          />
          <Image
            src={cloudsMobileRight}
            alt="cloud top right"
            className=" absolute bottom-[-2px] left-[-86px] z-10 w-[230px]  rotate-180 md:bottom-[-15px]  md:left-[-69px] md:w-[342px] xl:bottom-[-15px] xl:left-[-25px] 2xl:bottom-[-22px] 2xl:left-[-36px]"
            // className="absolute right-[-85px] top-[-2px] z-10 w-[230px] md:hidden "
          />
        </main>
        <div>
          <Image
            src={cloud}
            alt="cloud right"
            // className="animate-cloud absolute left-[73vw]  top-[10vh] z-[7] w-[33vw] md:hidden"
            className="animate-cloud-2  absolute left-[73vw]  top-[10vh] z-[7] w-[33vw] md:hidden"
          />

          <Image
            src={cloud2}
            alt="cloud left"
            className="animate-cloud-2  absolute right-[78vw]  top-[13vh] z-[7] w-[33vw] md:hidden "
					/>
					
          {/* md */}
          <Image
            src={cloud}
            alt="cloud"
            className="animate-cloud-2-reverse absolute left-[65vw]  top-[55vh] z-[7] hidden w-[24vw] max-w-[280px] md:block xl:hidden"
          />
          <Image
            src={cloud2}
            alt="cloud"
            className="animate-cloud-2 absolute left-[15vw]  top-[67vh] z-[7] hidden w-[29vw] max-w-[320px] md:block xl:hidden"
          />
          <Image
            src={cloud3}
            alt="cloud"
            className="absolute left-[13vw] top-[15vh]  z-[7] hidden w-[33vw] max-w-[180px] md:block  xl:hidden"
          />
          {/* xl */}
          <Image
            src={cloud}
            alt="cloud"
            className="absolute bottom-[13vh] right-[18vw] z-[7] hidden w-[13.8vw] max-w-[267px] xl:block"
          />
          {/* <Image
            src={cloud2}
            alt="cloud2"
            // className="absolute left-[15vw] top-[67vh] hidden w-[29vw] max-w-[320px] xl:block 2xl:hidden"
            className="absolute bottom-[30vh] left-[38vw] z-[7] hidden w-[15vw] max-w-[225px] xl:block 2xl:max-w-[297px]"
          /> */}
          <Image
            src={cloud3}
            alt="cloud3"
            className="absolute bottom-[8vh] left-[18vw] z-[7] hidden w-[13.3vw] max-w-[190px] xl:block 2xl:max-w-[254px]"
          />
        </div>
      </div>
      <Footer />
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

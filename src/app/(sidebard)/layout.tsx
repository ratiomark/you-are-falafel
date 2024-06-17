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
import falafelResult from 'public/falafelResult.webp';
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
    <div className=" custom-scrollbar-2 relative w-full  pt-[30px] ">
      <div className="relative overflow-hidden">
        <Header />
        <main className="custom-scrollbar-2 relative mx-auto flex min-h-[calc(100vh_-_var(--header-height)_-_30px)] flex-col px-2.5 md:px-5 xl:px-10">
          {children}
        </main>
        <Image
          src={cloud}
          alt="cloud"
          className="absolute left-[73vw] top-[10vh] w-[33vw] md:hidden"
        />

        <Image
          src={cloud2}
          alt="cloud"
          className="absolute right-[78vw] top-[13vh] w-[33vw] md:hidden "
        />
        {/* md */}
        <Image
          src={cloud}
          alt="cloud"
          className="absolute left-[65vw] top-[55vh] hidden w-[24vw] max-w-[280px] md:block xl:hidden"
        />
        <Image
          src={cloud2}
          alt="cloud"
          className="absolute left-[15vw] top-[67vh] hidden w-[29vw] max-w-[320px] md:block xl:hidden"
        />
        <Image
          src={cloud3}
          alt="cloud"
          className="absolute left-[13vw] top-[15vh] hidden w-[33vw] max-w-[180px] md:block  xl:hidden"
        />
        {/* xl */}
        <Image
          src={cloud}
          alt="cloud"
          className="absolute bottom-[13vh] right-[18vw] hidden w-[13.8vw] xl:block 2xl:hidden"
        />
        <Image
          src={cloud2}
          alt="cloud"
          // className="absolute left-[15vw] top-[67vh] hidden w-[29vw] max-w-[320px] xl:block 2xl:hidden"
          className="absolute bottom-[30vh] left-[38vw] hidden w-[15vw] max-w-[250px] xl:block 2xl:hidden"
        />
        <Image
          src={cloud3}
          alt="cloud"
          className="absolute bottom-[8vh] left-[18vw] hidden w-[13.3vw] max-w-[250px] xl:block 2xl:hidden"
        />
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

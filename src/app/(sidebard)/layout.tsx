import type { Metadata } from 'next'
import { SideBar } from '@/shared/components/SideBar/SideBar'
import { Header } from '@/shared/components/Header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <div className="grid min-h-screen grid-rows-[var(--header-height)_1fr] ">
    //   <Header />
    //   <div className="">
    //     <SideBar />
    //     <main className="custom-scrollbar-2 pt-[var(--header-height)] overflow-y-auto pl-[240px]">
    //       <div className="relative border-l px-6 pt-12">{children}</div>
    //     </main>
    //   </div>
    // </div>
    <div className="main-layout mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[var(--header-height)_1fr] ">
      <Header />
      <SideBar />
      <main className="custom-scrollbar-2 pl-[240px] md:pl-0">
        <div className="relative border-l px-6 pt-12">{children}</div>
      </main>
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
  )
}

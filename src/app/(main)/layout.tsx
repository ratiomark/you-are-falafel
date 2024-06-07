import type { Metadata } from 'next'
import { SideBar } from '@/shared/components/SideBar/SideBar'
import { Header } from '@/shared/components/Header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="grid h-full grid-cols-[minmax(240px,auto)_1fr] pt-20">
        <SideBar />
        <div className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto">{children}</div>
        {/* <div className="custom-scrollbar-2 col-start-2 row-start-1 h-full overflow-auto">{children}</div> */}
      </div>
    </div>
  )
}

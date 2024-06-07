import type { Metadata } from 'next'
import NavBar from '@/shared/components/NavBar'
import { headers } from 'next/headers'
import { Menubar } from '@/shared/ui/menubar'
import { SideBar } from '@/shared/components/SideBar/SideBar'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const headersList = headers()
	// const currentPath = headersList.get('x-pathname') || '/'
	return (
		<>
			{/* <NavBar
				// currentPath={currentPath}
			/> */}
			{/* <SideBar /> */}
			{/* <div>sddssss</div> */}
			{children}
		</>
	)
}

{
	/* <Providers> */
}
{
	/* </Providers> */
}

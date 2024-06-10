'use client';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@radix-ui/react-menubar';
import { MenubarShortcut } from '../ui/menubar';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '../utils/cn';
import designIcon from 'public/sidebar-design.svg';
import storiesIcon from 'public/sidebar-stories.svg';
import teamsIcon from 'public/sidebar-teams.svg';
import logo from 'public/logo (1).svg';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';

// Font
// Creato Display
// Weight
// 400
// Size
// 18px
// Line height
// 21.6px
// Align
// Center
export const Header = () => {
  return (
    // <header className=" fixed left-0 right-0 top-0 z-10 flex bg-secondary-foreground h-[var(--header-height)] w-full items-center border-b  px-[26px] py-5">
    <>
      {/* <div className="h-[var(--header-height)]" /> */}
      {/* <header className="fixed left-0 right-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center border-b bg-secondary-foreground px-[26px] py-5"> */}

      <header className="z-10 flex min-h-[var(--header-height)] w-full items-center justify-center bg-transparent px-[26px]  font-creato text-lg ">
        <nav>
          <ul className="flex items-center justify-center gap-10  uppercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Share</Link>
            </li>
            <li>
              <Image
                src={logo}
                // height={61}
                className={'h-[61px]'}
                alt="lolafel Logo"
              />
            </li>
            <li>
              <Link
                target="_blank"
                href="https://butcher.studio"
              >
                Studio Website
              </Link>
            </li>
          </ul>
        </nav>
        {/* <Button> Some text</Button> */}
      </header>
    </>
  );
};
// export const SideBar = () => {
// 	return (
// 		<Menubar>
// 			<MenubarMenu>
// 				<MenubarTrigger>File</MenubarTrigger>
// 				<MenubarContent>
// 					<MenubarItem>
// 						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
// 					</MenubarItem>
// 					<MenubarItem>New Window</MenubarItem>
// 					<MenubarSeparator />
// 					<MenubarItem>Share</MenubarItem>
// 					<MenubarSeparator />
// 					<MenubarItem>Print</MenubarItem>
// 				</MenubarContent>
// 			</MenubarMenu>
// 		</Menubar>
// 	)
// }
// 'use client'

// import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@radix-ui/react-menubar'
// import { MenubarShortcut } from '../ui/menubar'
// import Link from 'next/link'
// import { usePathname, useRouter } from 'next/navigation'
// import { cn } from '../utils/cn'

// const navigationItems = [
// 	{ label: 'Home', path: '/' },
// 	{ label: 'Profile', path: '/profile' },
// 	{ label: 'Dashboard', path: '/dashboard' },
// ]

// export const SideBar = () => {
// 	// get current pathname and select active path
// 	const currentPath = usePathname()
// 	return (
// 		<>
// 			<button
// 				data-drawer-target='default-sidebar'
// 				data-drawer-toggle='default-sidebar'
// 				aria-controls='default-sidebar'
// 				type='button'
// 				className='inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
// 			>
// 				<span className='sr-only'>Open sidebar</span>
// 				<svg
// 					className='w-6 h-6'
// 					aria-hidden='true'
// 					fill='currentColor'
// 					viewBox='0 0 20 20'
// 					xmlns='http://www.w3.org/2000/svg'
// 				>
// 					<path
// 						clip-rule='evenodd'
// 						fill-rule='evenodd'
// 						d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
// 					/>
// 				</svg>
// 			</button>

// 			<aside
// 				id='default-sidebar'
// 				className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
// 				className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
// 				aria-label='Sidebar'
// 			>
// 				<div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
// 					<ul className='space-y-2 font-medium'>
// 						{navigationItems.map((item) => (
// 							<li key={item.path}>
// 								<Link
// 									href={item.path}
// 									className={cn(
// 										'flex items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group',
// 										currentPath === item.path ? 'text-blue-400' : ''
// 									)}
// 								>
// 									<span className='ms-3'>{item.label}</span>
// 								</Link>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			</aside>
// 		</>
// 	)
// }
// // export const SideBar = () => {
// // 	return (
// // 		<Menubar>
// // 			<MenubarMenu>
// // 				<MenubarTrigger>File</MenubarTrigger>
// // 				<MenubarContent>
// // 					<MenubarItem>
// // 						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
// // 					</MenubarItem>
// // 					<MenubarItem>New Window</MenubarItem>
// // 					<MenubarSeparator />
// // 					<MenubarItem>Share</MenubarItem>
// // 					<MenubarSeparator />
// // 					<MenubarItem>Print</MenubarItem>
// // 				</MenubarContent>
// // 			</MenubarMenu>
// // 		</Menubar>
// // 	)
// // }

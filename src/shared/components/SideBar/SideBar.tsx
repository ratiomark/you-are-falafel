'use client'

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@radix-ui/react-menubar'
import { MenubarShortcut } from '../../ui/menubar'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '../../utils/cn'
import designIcon from 'public/sidebar-design.svg'
import storiesIcon from 'public/sidebar-stories.svg'
import teamsIcon from 'public/sidebar-teams.svg'
import orionLogo from 'public/orionLogo.png'
import Image from 'next/image'
import { useState } from 'react'
import './sidebar.css'
const navigationItems = [
  { label: 'Stories', path: '/stories', icon: storiesIcon },
  { label: 'Design', path: '/design', icon: designIcon },
  { label: 'Team', path: '/team/members', icon: teamsIcon },
  // { label: 'Team', path: '/team/edit', icon: teamsIcon },
  // { label: 'Home', path: '/' },
  // { label: 'Profile', path: '/profile' },
  // { label: 'Dashboard', path: '/dashboard' },
]

// export const SideBar = ({ currentPath }: { currentPath: string }) => {
export const SideBar = () => {
  // get current pathname and select active path
  const currentPath = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const pathChecked = '/' + currentPath.split('/')[1]
  console.log('currentPath', currentPath)

  const onHamburgerClick = () => {}
  return (
    <>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button> */}
      <div
        id="hamburger"
        className={cn(
          'hamburger_container invisible fixed left-[-15px] top-[calc(var(--header-height)-15px)] z-50 scale-[0.5]  rounded-md  border-input bg-background p-2 md:visible',
          !isOpen ? 'is-closed' : 'is-open',
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>

      <aside
        id="default-sidebar"
        className={cn(
          'fixed bottom-0  left-6 top-[var(--header-height)] z-40 h-screen min-w-[192px] border-input bg-background pt-12  transition-transform  md:left-0 md:border-r md:border-input',
          isOpen ? 'md:translate-x-0' : 'md:-translate-x-full',
        )}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-center pb-8 md:hidden">
          <Image
            width={192}
            src={orionLogo}
            alt="Orion Logo"
          />
        </div>
        <div className="h-full overflow-y-auto bg-background  py-4 dark:bg-gray-800">
          <ul className="space-y-2 md:p-2">
            {navigationItems.map(item => (
              <li
                className={cn(
                  // 'group  text-description flex items-center gap-2 rounded-lg p-2   hover:bg-gray-100 ',
                  pathChecked === '/' + item.path.split('/')[1] ? 'text-blue-800' : '',
                )}
                key={item.path}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  // className={cn(
                  //   'group flex items-center rounded-lg p-2 text-gray-900  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                  //   pathChecked === item.path ? 'text-blue-400' : '',
                  // )}
                  className={cn(
                    'group  text-description flex items-center gap-2 rounded-lg p-2   hover:bg-blue-50 ',
                    // pathChecked === '/' + item.path.split('/')[1] ? 'text-red-100 font-light' : '',
                  )}
                  // className="group flex items-center rounded-lg p-2 text-gray-900  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      // className="ms-auto h-6 w-6"
                    />
                  )}
                  <span className="">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
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

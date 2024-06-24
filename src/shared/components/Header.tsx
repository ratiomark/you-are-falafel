'use client';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from '@radix-ui/react-menubar';
import { MenubarShortcut } from '../ui/menubar';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '../utils/cn';

import logo from 'public/logo (1).svg';
import FacebookIcon from 'public/facebookicon.svg';
import LinkedInIcon from 'public/instaicon.svg';
import CopyIcon from 'public/copyicon.svg';
import TwitterIcon from 'public/twittericon.svg';
import CloseIcon from 'public/closeIcon.svg';
import Image from 'next/image';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import { PopoverClose } from '@radix-ui/react-popover';
// import { shareLinkedIn, shareOnFacebook } from '../lib/share';

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
const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];
interface ShareData {
  url: string;
  title: string;
  description: string;
}

const copyToClipboard = async ({ url, title, description }: ShareData): Promise<void> => {
  const textToCopy = `${title}\n${description}\n${url}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const shareLinkedIn = ({ url, title, description }: ShareData): string => {
  const params = new URLSearchParams({
    url: url,
    title: title,
    summary: description,
  });
  return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
};
export function createLinkedInShareUrl({ url, title, description }: ShareData) {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
}
const shareFacebook = ({ url, description }: ShareData): string => {
  const params = new URLSearchParams({
    u: url,
    quote: description,
  });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
};
const shareTwitter = ({ url, title, description }: ShareData): string => {
  const params = new URLSearchParams({
    url: url,
    text: `${title}\n${description}\n`,
  });
  return `https://twitter.com/intent/tweet?${params.toString().trim()}`;
};

const shareFunctions = [shareFacebook, shareLinkedIn, shareTwitter];
const useShareHelper = (index: number) => {
  const shareFn = shareFunctions[index];
  const result = shareFn({
    url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
    title: 'Тут какой-то title',
    description: 'А тут какой-то description',
  });
  return result;
};
const iconsBg = ['#FFBAC2', '#8BE3FF', '#FFE900', '#00B261'];
const IconsWithHoverBackground = ({ icons, height }: { icons: string[]; height: number }) => (
  <>
    {icons.map((icon, index) => (
      <div
        key={index}
        className="icon-wrapper"
        style={{ '--bg-color': iconsBg[index] }}
      >
        {index === 0 && (
          <Image
            tabIndex={-1}
            src={icon}
            alt=""
            height={height}
            className="icon-image"
            onClick={() => {
              copyToClipboard({
                url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
                title: 'Тут какой-то title',
                description: 'А тут какой-то description',
              });
            }}
          />
        )}
        {index !== 0 && (
          <Link
            target="_blank"
            // href={shareTwitter('https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/', 'Тайлтл\n \n ОПИСАНИЕ \n\n')}
            href={useShareHelper(index - 1)}
          >
            <Image
              tabIndex={-1}
              src={icon}
              alt=""
              height={height}
              className="icon-image"
            />
          </Link>
        )}
      </div>
    ))}
  </>
);
// const IconsWithHoverBackground = ({ icons, height }: { icons: string[]; height: number }) => (
//   <>
//     {icons.map((icon, index) => (
//       <div
//         key={index}
//         className="icon-wrapper"
//         style={{ '--bg-color': iconsBg[index] }}
//       >
//         <Link
//           // target="_blank"
//           // href={shareTwitter('https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/', 'Тайлтл\n \n ОПИСАНИЕ \n\n')}
//           href={'#'}
//           // href={shareTwitter({ url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/', title: 'Какой-то текст.', description: 'Описание.' })}
//         >
//           <Image
//             tabIndex={-1}
//             src={icon}
//             alt=""
//             height={height}
//             className="icon-image"
//             onClick={() => {
//               if (index === 0) {
//                 copyToClipboard({
//                   url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
//                   title: 'Какой-то текст.',
//                   description: 'Описание.',
//                 });
//               }
//             }}
//           />
//         </Link>
//       </div>
//     ))}
//   </>
// );
export const Header = () => {
  return (
    // <header className=" fixed left-0 right-0 top-0 z-10 flex bg-secondary-foreground h-[var(--header-height)] w-full items-center border-b  px-[26px] py-5">
    <>
      {/* <div className="h-[var(--header-height)]" /> */}
      {/* <header className="fixed left-0 right-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center border-b bg-secondary-foreground px-[26px] py-5"> */}

      <header className="relative z-20  hidden min-h-[var(--header-height)] w-full items-center justify-center bg-transparent px-[26px] font-creato  text-lg xl:flex ">
        <nav>
          <ul className="flex items-center justify-center gap-10  uppercase">
            <li>
              <Link
                className="underline-effect underline-pink"
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              {/* <Link
                className="underline-effect"
                href="/about"
              >
                Share
              </Link> */}
              <Popover>
                <PopoverTrigger asChild>
                  {/* <p className=" cursor-pointer">Share</p> */}
                  <p className="underline-effect underline-pink cursor-pointer">Share</p>
                </PopoverTrigger>
                <PopoverContent
                  className="rounded-[40px] border-2 border-primary bg-[#FFF3E1] 
								
								md:p-[30px] md:pt-5
								
								2xl:p-10 2xl:pt-[30px]"
                >
                  <div className="flex w-full justify-between">
                    <p className="font-libre text-[26px] leading-[120%] tracking-[-0.52px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Share:</p>
                    <PopoverClose
                      className="cursor-pointer outline-none"
                      aria-label="Close"
                    >
                      <Image
                        src={CloseIcon}
                        alt=""
                        height={30}
                        className="md:hidden 2xl:block"
                      />
                      <Image
                        src={CloseIcon}
                        alt=""
                        height={24}
                        className="2xl:hidden"
                      />
                    </PopoverClose>
                  </div>
                  <div className="hidden gap-5 pt-5 2xl:flex">
                    <IconsWithHoverBackground
                      height={82}
                      icons={icons}
                    />
                  </div>
                  <div className="hidden gap-5 pt-5 md:flex 2xl:hidden">
                    <IconsWithHoverBackground
                      height={61}
                      icons={icons}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </li>
            <li>
              <Image
                src={logo}
                // height={61}
                className={'h-[61px] xl:h-[45px]'}
                alt="lolafel Logo"
              />
            </li>
            <li>
              <Link
                target="_blank"
                href="https://butcher.studio"
                className="underline-effect underline-pink"
              >
                Studio Website
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* mobile */}
      <header className="relative z-20 flex min-h-[var(--header-height)] w-full flex-col items-center justify-center gap-2.5 bg-transparent px-[26px] font-creato text-[14px]  leading-4 md:gap-5 xl:hidden ">
        <Image
          src={logo}
          // height={61}
          className={'h-[36px]'}
          alt="lolafel Logo"
        />
        <nav>
          <ul className="wrap-0 flex items-center justify-center gap-[15px] uppercase md:gap-[25px]">
            <li>
              <Link
                className="underline-effect underline-pink"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Popover>
                <PopoverTrigger asChild>
                  {/* <p className="cursor-pointer">Share</p> */}
                  <p className="underline-effect underline-pink cursor-pointer">Share</p>
                </PopoverTrigger>
                <PopoverContent className="rounded-[30px] border-2 border-primary bg-[#FFF3E1] p-5 md:p-[30px] md:pt-5">
                  {/* <div className="flex gap-5 p-10">
                    <IconsWithHoverBackground height={56} icons={icons} />
                  </div>
                </PopoverContent> */}
                  <div className="flex w-full justify-between">
                    <p className="font-libre text-[22px] leading-[120%] tracking-[-0.44px] md:text-[26px] md:tracking-[-0.52px]">Share:</p>
                    <PopoverClose
                      className="cursor-pointer outline-none"
                      aria-label="Close"
                    >
                      <Image
                        src={CloseIcon}
                        alt=""
                        height={24}
                      />
                    </PopoverClose>
                  </div>
                  <div className="flex gap-2.5 pt-[32px] md:hidden">
                    <IconsWithHoverBackground
                      height={56}
                      icons={icons}
                    />
                  </div>
                  <div className="hidden gap-5 pt-5 md:flex">
                    <IconsWithHoverBackground
                      height={61}
                      icons={icons}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              {/* <Link
                className="underline-effect"
                href="/about"
              >
                Share
              </Link> */}
            </li>
            <li>
              <Link
                target="_blank"
                href="https://butcher.studio"
                className="underline-effect underline-pink"
              >
                Studio Website
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
// export const Header = () => {
//   return (
//     // <header className=" fixed left-0 right-0 top-0 z-10 flex bg-secondary-foreground h-[var(--header-height)] w-full items-center border-b  px-[26px] py-5">
//     <>
//       {/* <div className="h-[var(--header-height)]" /> */}
//       {/* <header className="fixed left-0 right-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center border-b bg-secondary-foreground px-[26px] py-5"> */}

//       <header className="z-10 flex min-h-[var(--header-height)] w-full items-center justify-center bg-transparent px-[26px]  font-creato text-lg ">
//         <nav>
//           <ul className="flex items-center justify-center gap-10  uppercase">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/about">Share</Link>
//             </li>
//             <li>
//               <Image
//                 src={logo}
//                 // height={61}
//                 className={'h-[61px]'}
//                 alt="lolafel Logo"
//               />
//             </li>
//             <li>
//               <Link
//                 target="_blank"
//                 href="https://butcher.studio"
//               >
//                 Studio Website
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         {/* <Button> Some text</Button> */}
//       </header>
//     </>
//   );
// };
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

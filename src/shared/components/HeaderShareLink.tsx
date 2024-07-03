'use client';
import Link from 'next/link';
import logo from 'public/logo (1).svg';
import FacebookIcon from 'public/facebookicon.svg';
import LinkedInIcon from 'public/instaicon.svg';
import CopyIcon from 'public/copyicon.svg';
import TwitterIcon from 'public/twittericon.svg';
import CloseIcon from 'public/closeIcon.svg';
import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { copyToClipboard, getShareHelper } from '../lib/shareHelpers';

const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];

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
            onClick={() => copyToClipboard()}
          />
        )}
        {index !== 0 && (
          <Link
            target="_blank"
            // href={shareTwitter('https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/', 'Тайлтл\n \n ОПИСАНИЕ \n\n')}
            href={getShareHelper(index - 1)}
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

export const HeaderShareLinksMobile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="underline-effect underline-pink cursor-pointer">Share</p>
      </PopoverTrigger>
      <PopoverContent className="rounded-[30px] border-2 border-primary bg-[#FFF3E1] p-5  2xl:p-10 2xl:pt-[30px]">
        <div className="flex w-full justify-between">
          <p className="font-libre text-[22px] leading-[120%] tracking-[-0.52px] md:text-[26px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Share:</p>
          <PopoverClose
            className="cursor-pointer outline-none"
            aria-label="Close"
          >
            {/* <Image
              src={CloseIcon}
              alt=""
              height={30}
              className="md:hidden 2xl:block"
            /> */}
            <Image
              src={CloseIcon}
              alt=""
              height={24}
              className="2xl:hidden"
            />
          </PopoverClose>
        </div>
        <div className="flex gap-2.5 pt-5">
          <IconsWithHoverBackground
            height={56}
            icons={icons}
          />
        </div>
        {/* <div className="hidden gap-5 pt-5 md:flex 2xl:hidden">
          <IconsWithHoverBackground
            height={61}
            icons={icons}
          />
        </div> */}
        {/* <div className="hidden gap-5 pt-5 2xl:flex">
          <IconsWithHoverBackground
            height={82}
            icons={icons}
          />
        </div> */}
      </PopoverContent>
    </Popover>
  );
};
export const HeaderShareLinksDesktop = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="underline-effect underline-pink cursor-pointer">Share</p>
      </PopoverTrigger>
      <PopoverContent className="rounded-[30px] border-2 border-primary bg-[#FFF3E1] p-[30px] pt-5 2xl:rounded-[40px] 2xl:p-10 2xl:pt-[30px]"> 
        <div className="flex w-full justify-between">
          <p className="font-libre text-[22px] leading-[120%] tracking-[-0.52px] md:text-[26px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Share:</p>
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
              className=" 2xl:hidden"
            />
          </PopoverClose>
        </div>
        {/* <div className="flex gap-2.5 pt-5 md:hidden">
          <IconsWithHoverBackground
            height={56}
            icons={icons}
          />
        </div>
        <div className="hidden gap-5 pt-5 md:flex 2xl:hidden">
          <IconsWithHoverBackground
            height={61}
            icons={icons}
          />
        </div> */}
        <div className="hidden gap-5 pt-5 xl:flex 2xl:hidden">
          <IconsWithHoverBackground
            height={61}
            icons={icons}
          />
        </div>
        <div className="hidden gap-5 pt-5 2xl:flex">
          <IconsWithHoverBackground
            height={82}
            icons={icons}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

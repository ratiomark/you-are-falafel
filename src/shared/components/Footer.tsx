import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo (2).svg';
import { FooterShareLinks } from './FooterShareLinks';

export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className=" bg-primary px-2.5 py-14 text-center font-libre text-[#FFF3E1] md:hidden"
      >
        <div className="mx-auto max-w-[480px]">
          <div className="flex flex-col items-center justify-center  gap-5">
            <Image
              src={logo}
              // height={61}
              className={'h-[36px]'}
              alt="lolafel Logo"
            />
            <h3 className=" font-libre text-[22px] leading-7  tracking-[0.44px] ">
              This site is made for entertainment and fun. Enjoy and share with your friends!
            </h3>
            {/* <h3 className="max-w-[573px]  text-[35px] leading-[120%] tracking-[-0.7px]">
            This site is made for entertainment and fun. Enjoy and share with your friends!
          </h3> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-[7vh] pt-[7vh]">
            <div
              className="font-zt text-[30px] leading-[120%] tracking-[-1.2px]"
              // suppressHydrationWarning
            >
              Share: <br /> <FooterShareLinks />
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-5 text-center font-libre text-[22px] font-normal leading-7 tracking-[0.44px] ">
              <Link
                target="_blank"
                href="https://www.behance.net/butcher_studio"
                className="behance w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px]"
              >
                Behance
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/butcherwebstudio"
                className="insta w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px]"
              >
                Instagram
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/butcher-studio/"
                className="linkedin  w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px]"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="items relative flex w-full  justify-between pt-[60px] font-creato text-[14px] uppercase leading-4">
            <p className="text-left">
              idea&design&illustration:
              <br />
              <Link
                target="_blank"
                href="https://www.instagram.com/margaritagolubev.a"
                className="text-left"
              >
                <span> margarita golubeva</span>
              </Link>
            </p>

            {/* <p className="text-center">.2024</p> */}

            <p className="relative text-right">
              Ⓒ lolafel
              <br />
              <Link
                target="_blank"
                href="https://butcher.studio"
                className=" whitespace-nowrap text-right"
              >
                by: butcher studio
              </Link>
              <span className="absolute left-[8%] top-0 text-center">.2024</span>
            </p>
          </div>
          {/* <div className="items relative flex w-full flex-col justify-between gap-5  pt-20 font-creato text-[14px] uppercase leading-4">
            <p className="">
              idea&design&illustration:
              <br />
              <Link
                target="_blank"
                href="https://www.instagram.com/margaritagolubev.a"
                // className="basis-1/3 text-left"
              >
                <span> margarita golubeva</span>
              </Link>
            </p>

            <p className="text-center">.2024</p>

            <Link
              target="_blank"
              href="https://butcher.studio"
              className=""
            >
              Ⓒ lolafel by: butcher studio
            </Link>
          </div> */}
        </div>
      </footer>

      <footer
        id="footer"
        className="  hidden bg-primary px-10 py-20 text-center font-libre text-[#FFF3E1] md:block"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <Image
            src={logo}
            // height={61}
            className={'h-[61px]'}
            alt="lolafel Logo"
          />
          <h3 className="max-w-[573px]  text-[35px] leading-[120%] tracking-[-0.7px]">
            This site is made for entertainment and fun. Enjoy and share with your friends!
          </h3>
        </div>
        <div className="flex  flex-col items-center justify-center gap-[60px] pt-[60px]">
          <div className="font-zt text-[34px] leading-[120%] tracking-[-2.72px] xl:hidden">
            <p>Share:</p>
            <FooterShareLinks />
          </div>
          <p className="hidden font-zt text-[37px] leading-[120%] tracking-[-2.96px] xl:block 2xl:text-[50px] 2xl:tracking-[-4px]">
            <span>Share:&nbsp;</span>
            <FooterShareLinks />
          </p>

          <div className="flex w-full items-center  justify-between gap-5">
            <Link
              target="_blank"
              href="https://www.behance.net/butcher_studio"
              // className="underline-effect underline-pink"
              className="behance w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px] xl:text-[26px] 2xl:text-[30px] 2xl:py-5"
            >
              Behance
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/butcherwebstudio"
              className="insta  w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px] xl:text-[26px] 2xl:text-[30px] 2xl:py-5"
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/butcher-studio/"
              className="linkedin w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-[15px] xl:text-[26px] 2xl:text-[30px] 2xl:py-5"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="relative flex w-full  justify-between gap-5  pt-20 font-creato uppercase">
          <p className="basis-1/3 text-left">
            idea&design&illustration:
            <Link
              target="_blank"
              href="https://www.instagram.com/margaritagolubev.a"
              // className="basis-1/3 text-left"
            >
              <span> margarita golubeva</span>
            </Link>
          </p>

          <p className="basis-1/3 text-center">.2024</p>

          <Link
            target="_blank"
            href="https://butcher.studio"
            className="basis-1/3 text-right"
          >
            Ⓒ lolafel by: butcher studio
          </Link>
        </div>
      </footer>
    </>
  );
}

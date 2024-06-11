import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo (2).svg';

export default function Footer() {
	return (
    <div
      id="footer"
      className="bg-primary px-10 py-20 text-center font-libre text-[#FFF3E1]"
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
        {/* <h3 className="max-w-[573px] font-zt text-[35px] leading-[120%] tracking-[-0.7px]">
              This site is made for entertainment and fun. Enjoy and share with your friends!
            </h3> */}
      </div>
      <div className="flex flex-col items-center justify-center gap-[60px] pt-[60px]">
        <p className="font-zt text-[50px] leading-[120%] tracking-[-0.7px]">Share: Copy link / Facebook / LinkedIn / Twitter</p>
        <div className="flex w-full items-center  justify-between gap-5">
          <Link
            target="_blank"
            href="https://www.behance.net/butcher_studio"
            className="w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-5 text-[30px]"
          >
            Behance
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/butcherwebstudio"
            className="w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-5 text-[30px]"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/butcher-studio/"
            className="w-full rounded-full border-2 border-[#FFF3E1] px-[10px] py-5 text-[30px]"
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
        {/* <p className="absolute bottom-0 left-1/2 ">.2024</p> */}
      </div>
    </div>
  );
}

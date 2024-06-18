import Footer from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import cloud from 'public/cloud.svg';
import cloud2 from 'public/cloud2.svg';
import cloud3 from 'public/cloud3.svg';
// import falafelMobile from 'public/falMobile.svg';
import falafelMobile from 'public/falafMobile.svg';
import falafel768 from 'public/falaf768.svg';
// import falafelMobile from 'public/falafelMobile.png';
// import flowers from 'public/flowerMobile.png';
import flowers from 'public/flowerMobile.svg';
import flowerPink from 'public/flowerPink.svg';
import flowerBlue from 'public/flowerBlue.svg';
import cloudLayoutMobile from 'public/cloudLayout.svg';
import cloudsMobileRight from 'public/cloudsRight.svg';
import cloudsMobileLeft from 'public/cloudsLeft.svg';
import starsMobile from 'public/starsMobile.svg';
import starsMobileYellow from 'public/starMobileYellow.svg';
import starBlackRightMobile from 'public/starBlackRightMobile.svg';
import starMiddleMobile from 'public/starMiddleMobile.svg';
import starMdTop from 'public/starMdTop.svg';
// import flowers from 'public/flowMobile.jpg';
// export default function Home() {
//   return (
//     <>
//       {/* <div className="custom-scrollbar-2 h-[calc(100vh_-_30px)] w-full pt-[30px] "> */}
//       <div className="custom-scrollbar-2 h-screen w-full pt-[30px] ">
//         {/* <div className="pt-[30px]"> */}
//         <Header />
//         {/* </div> */}
//         <main className="custom-scrollbar-2 relative mx-auto flex h-[calc(100vh_-30px_-_var(--header-height))] flex-col border-2 border-red-500  px-2.5 pb-[var(--main-page-padding-bottom)] pt-[7vh] xl:px-10 xl:pt-[76px]">
//           {/* <main className="custom-scrollbar-2 mx-auto flex h-[calc(100vh_-_var(--header-height)_-_30px_-_20vh)] flex-col px-2.5 pt-[7vh] xl:px-10 xl:pt-[76px]"> */}
//           <div className="flex flex-col items-center justify-center  gap-[2vh] text-center xl:gap-0">
//             <h1 className="font-libre text-[22px] leading-7 tracking-[0.44px] xl:text-[35px] xl:leading-[120%] xl:tracking-[-0.7px]">What kind of...</h1>
//             <h2 className=" font-zt text-[60px] leading-[54px] tracking-[-4.8px]  xl:pt-0 xl:text-[140px]  xl:leading-[120%] xl:tracking-[-11.2px]">
//               Falafel are you today?
//             </h2>
//           </div>
//           <div
//             id="content"
//             className="flex grow   flex-col  justify-between"
//           >
//             <div className="hidden  items-center justify-center font-creato uppercase  xl:flex xl:pt-[5vh]">
//               {/* <div className="hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[255px]"> */}
//               <div className="flex w-full max-w-[1420px]  items-center justify-between">
//                 <p className=" max-w-[142px] text-center leading-[120%]">This is an entertainment website</p>
//                 <p className=" max-w-[110px] text-center leading-[120%]">
//                   created <br />
//                   by butcher studio
//                 </p>
//                 {/* <p className=" text-center leading-[120%] xl:hidden xl:max-w-[110px]">created by butcher studio</p> */}
//               </div>
//             </div>

//             {/* mobile & small */}
//             <div className="flex flex-col items-center justify-center pt-[15px] font-creato text-[14px] uppercase leading-4 md:flex-row md:gap-[2vw] md:pt-[3vh] xl:hidden">
//               <p className="">This is an entertainment website</p>
//               <p className="">created by butcher studio</p>
//             </div>

//             <div className=" sticky bottom-[var(--main-page-padding-bottom)] flex w-full text-center  font-libre text-[22px] leading-7 tracking-[0.44px]  md:static  md:text-[26px] md:leading-8  2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]">
//               <Link
//                 href="/survey"
//                 className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
//               >
//                 Start test
//               </Link>
//             </div>
//             {/* <div className="  flex w-full pb-[30px] text-center font-libre text-[22px] leading-7  tracking-[0.44px] md:pb-[72px] md:text-[26px] md:leading-8 xl:pb-[6vh] 2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]">
//               <Link
//                 href="/survey"
//                 className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
//               >
//                 Start test
//               </Link>
//             </div> */}
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }
export default function Home() {
  return (
    <>
      {/* <div className="custom-scrollbar-2 h-[calc(100vh_-_30px)] w-full pt-[30px] "> */}
      <div className="custom-scrollbar-2 relative z-[11] h-screen w-full overflow-clip pt-[30px] md:w-auto md:overflow-hidden">
        {/* <div className="pt-[30px]"> */}
        {/* <div className="h-9"></div> */}
        <Header />
        {/* </div> */}
        <main className="custom-scrollbar-2 relative mx-auto flex h-[calc(100vh_-30px_-_var(--header-height))] flex-col   px-2.5 pb-[var(--main-page-padding-bottom)] pt-[7vh] xl:px-10 xl:pt-[76px]">
          {/* <main className="custom-scrollbar-2 relative mx-auto flex h-[calc(100vh_-30px_-_var(--header-height))] flex-col border-2 border-red-500  px-2.5 pb-[var(--main-page-padding-bottom)] pt-[7vh] xl:px-10 xl:pt-[76px]"> */}

          <div className=" relative z-20 flex flex-col items-center  justify-center gap-[2vh] text-center xl:gap-0">
            <h1 className="font-libre text-[22px] leading-7 tracking-[0.44px] xl:text-[35px] xl:leading-[120%] xl:tracking-[-0.7px]">What kind of...</h1>
            <h2 className=" font-zt text-[60px] leading-[54px] tracking-[-4.8px]  xl:pt-0 xl:text-[140px]  xl:leading-[120%] xl:tracking-[-11.2px]">
              Falafel are you today?
            </h2>
          </div>
          <div
            id="content"
            className="flex grow  flex-col justify-between"
          >
            <div className="relative z-20 hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[5vh]">
              {/* <div className="hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[255px]"> */}
              <div className="flex w-full max-w-[1420px]  items-center justify-between">
                <p className=" max-w-[142px] text-center leading-[120%]">This is an entertainment website</p>
                <p className=" max-w-[110px] text-center leading-[120%]">
                  created <br />
                  by butcher studio
                </p>
                {/* <p className=" text-center leading-[120%] xl:hidden xl:max-w-[110px]">created by butcher studio</p> */}
              </div>
            </div>

            {/* mobile & small */}
            <div className="relative z-20 flex flex-col items-center justify-center pt-[15px] font-creato text-[14px] uppercase leading-4 md:flex-row md:gap-[2vw] md:pt-[3vh] xl:hidden">
              <p className="">This is an entertainment website</p>
              <p className="">created by butcher studio</p>
            </div>

            {/* <div className=" sticky bottom-[var(--main-page-padding-bottom)] z-20 flex w-full text-center  font-libre text-[22px] leading-7 tracking-[0.44px]  md:relative md:bottom-0  md:text-[26px] md:leading-8  2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]"> */}
            <div className=" sticky bottom-[var(--main-page-padding-bottom)] z-20 flex w-full text-center  font-libre text-[22px] leading-7 tracking-[0.44px]   md:text-[26px] md:leading-8  2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]">
              <Link
                href="/survey"
                className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
              >
                Start test
              </Link>

              <Image
                src={flowerPink}
                alt="flowers"
                // className="absolute left-[25%] top-[-18px] z-10 w-[33px] max-w-[340px] md:hidden"
                className="absolute left-[25%] top-[-18px] z-10 w-[33px] md:top-[-21px] md:w-[44] "
                // className="absolute right-[50%] top-[-16px] z-10   w-[57vw] translate-x-1/2  md:hidden"
                // className="absolute right-[50%] top-[-16px] z-10  w-[57vw] max-w-[340px] translate-x-1/2 "
              />
              <Image
                src={flowerBlue}
                alt="flowers"
                // className="absolute right-[20%] top-[-16px] z-10 w-[33px] max-w-[340px] md:hidden"
                className="absolute right-[20%] top-[-16px] z-10 w-[33px] md:right-[25%] md:top-[-21px] md:w-[44]"
                // className="absolute right-[50%] top-[-16px] z-10   w-[57vw] translate-x-1/2  md:hidden"
                // className="absolute right-[50%] top-[-16px] z-10  w-[57vw] max-w-[340px] translate-x-1/2 "
              />
            </div>
            {/* <Image
                src={flowers}
                alt="flowers"
                className="absolute right-[50%] top-[-22px] z-10 w-[280px] max-w-[340px] translate-x-1/2  md:hidden"
                // className="absolute right-[50%] top-[-16px] z-10   w-[57vw] translate-x-1/2  md:hidden"
                // className="absolute right-[50%] top-[-16px] z-10  w-[57vw] max-w-[340px] translate-x-1/2 "
              /> */}
            {/* <Image
                src={flowers}
                alt="flowers"
                // className="absolute right-[50%] top-[-16px] z-10   w-[57vw] translate-x-1/2  "
                // className="absolute right-[50%] top-[-16px] z-10   w-[57vw] translate-x-1/2  md:hidden"
                className="absolute right-[50%] top-[-25px] z-10  hidden w-[280px] max-w-[340px] translate-x-1/2 md:block"
              /> */}
            {/* <div className="  flex w-full pb-[30px] text-center font-libre text-[22px] leading-7  tracking-[0.44px] md:pb-[72px] md:text-[26px] md:leading-8 xl:pb-[6vh] 2xl:text-[35px] 2xl:leading-[120%] 2xl:tracking-[-0.7px]">
              <Link
                href="/survey"
                className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
              >
                Start test
              </Link>
            </div> */}
          </div>

          <Image
            src={cloud}
            alt="cloud"
            // className="absolute left-[67vw] top-[6vh] z-10 w-[33vw]  "
            className="absolute left-[67vw] top-[6vh] z-10 w-[33vw]  md:hidden"
          />

          <Image
            src={cloud2}
            alt="cloud"
            // className="absolute right-[78vw] top-[30vh] z-10 w-[33vw] "
            className="absolute right-[78vw] top-[30vh] z-10 w-[33vw] md:hidden "
          />
          <Image
            src={falafelMobile}
            alt="falafel image"
            className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_14px)] right-[50%] z-10 min-w-[655px] max-w-[100vw] translate-x-1/2  md:hidden"
            // className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_20px)] right-[50%] z-10 min-w-[80vh] translate-x-1/2  md:hidden "
          />
          <Image
            src={falafel768}
            alt="falafel image"
            className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_30px)] right-[50%] z-10 hidden min-w-[768px] max-w-[120vw]  translate-x-1/2 md:block"
            // className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_20px)] right-[50%] z-10 min-w-[80vh] translate-x-1/2  md:hidden "
          />
          {/* md */}
          <Image
            src={cloud}
            alt="cloud"
            // className="absolute left-[67vw] top-[6vh] z-10 w-[33vw]  "
            className="absolute left-[60vw] top-[0.5vh] z-10 hidden  w-[189px] md:block"
          />

          <Image
            src={cloud2}
            alt="cloud"
            // className="absolute right-[78vw] top-[30vh] z-10 w-[33vw] "
            className="absolute left-[3.5vw] top-[25vh] z-10 hidden w-[189px] md:block "
          />
        </main>
        {/* cloud top mobile */}
        <Image
          src={cloudsMobileLeft}
          alt="cloud"
          className="absolute left-[-68px] top-[-2px] z-10 w-[230px] md:hidden"
          // className="absolute left-[-68px] top-[-2px] z-10 w-[230px] "
        />
        <Image
          src={cloudsMobileRight}
          alt="cloud"
          className="absolute right-[-85px] top-[-2px] z-10 w-[230px] md:hidden"
          // className="absolute right-[-85px] top-[-2px] z-10 w-[342px] md:left-[496px] md:right-0"
        />
        {/* cloud top md */}
        <Image
          src={cloudsMobileRight}
          alt="cloud"
          // className="absolute right-[-85px] top-[-2px] z-10 w-[230px] md:hidden"
          className="absolute  left-[486px] top-[-15px] z-10 hidden w-[342px] md:block"
        />
        <Image
          src={cloudsMobileLeft}
          alt="cloud"
          className="absolute  right-[486px] top-[-15px] z-10 hidden w-[342px] md:block"
          // className="absolute left-[-68px] top-[-2px] z-10 w-[230px] "
        />
        {/* stars */}
        <Image
          src={starBlackRightMobile}
          alt="star"
          // className="absolute right-[10px] top-[308px] z-10 w-[22px] md:hidden"
          className="absolute right-[10px] top-[308px] z-10 w-[22px] "
        />
        {/* <Image
          src={starsMobileYellow}
          alt="star"
          // className="absolute right-[14px] top-[597px] z-10 w-[19px] md:hidden"
          className="absolute right-[14px] top-[75vh] z-10 w-[19px] md:w-[55px] md:left-[3.4vw]"
        /> */}
        {/* <Image
          src={starsMobileYellow}
          alt="star"
          // className="absolute right-[14px] top-[597px] z-10 w-[19px] md:hidden"
          className="absolute right-[14px] top-[75vh] z-10 w-[19px] "
        /> */}
        <Image
          src={starMiddleMobile}
          alt="star"
          // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
          className="absolute left-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden  "
        />
        <Image
          src={starMdTop}
          alt="star"
          // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
          className="absolute left-[22.5vh] top-[15.5vh] z-10  w-[34px]"
        />
        <Image
          src={starMiddleMobile}
          alt="star"
          // className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
          className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
        />
      </div>
      <Footer />
    </>
  );
}

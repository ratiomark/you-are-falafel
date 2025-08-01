import Footer from '@/shared/components/Footer';
import { Header } from '@/shared/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import cloud from 'public/cloud.svg';
import cloud2 from 'public/cloud2.svg';
import cloud3 from 'public/cloud3.svg';
// import falafelMobile from 'public/falMobile.svg';
import falafelMobile from 'public/falafMobile.svg';
// import falafel768 from 'public/falaf768.svg';
import falafel768 from 'public/falafelMain768.svg';
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
import falafelWithStars from 'public/falafel1440.svg';
// import falafelOnly from 'public/onlyFalafel1440.svg';
import falafelOnly from 'public/falafelMain1440.svg';
import falafelMain1920 from 'public/falafelMain1920.svg';
// import stars1440 from 'public/stars1440.svg';
import stars768 from 'public/starsMain768.svg';
import stars1440 from 'public/starsMain1440.svg';
import stars1920 from 'public/starsMain1920.svg';

export default function Home() {
  return (
    <>
      {/* <div className="custom-scrollbar-2 h-[calc(100vh_-_30px)] w-full pt-[30px] "> */}
      <div className="custom-scrollbar-2 relative z-[11] h-screen w-full overflow-clip pt-[30px] md:w-auto md:overflow-hidden">
        {/* <div className="pt-[30px]"> */}
        {/* <div className="h-9"></div> */}
        <Header />
        {/* </div> */}
        <main className="custom-scrollbar-2 relative mx-auto flex h-[calc(100vh_-30px_-_var(--header-height))] flex-col   px-2.5 pb-[var(--main-page-padding-bottom)] pt-[7vh] xl:px-5 xl:pt-[60px] 2xl:px-10 2xl:pt-[76px]">
          {/* <main className="custom-scrollbar-2 relative mx-auto flex h-[calc(100vh_-30px_-_var(--header-height))] flex-col border-2 border-red-500  px-2.5 pb-[var(--main-page-padding-bottom)] pt-[7vh] xl:px-10 xl:pt-[76px]"> */}

          <div className=" relative z-20 mx-auto flex flex-col items-center  justify-center gap-[2vh] text-center  md:max-w-fit xl:gap-0">
            <h1 className="font-libre text-[22px] leading-7 tracking-[0.44px] xl:text-[26px] xl:leading-[120%] xl:tracking-[-0.7px] 2xl:text-[35px]">
              What kind of...
            </h1>
            <div className="relative">
              <h2 className="relative z-20 font-zt text-[60px] leading-[54px] tracking-[-4.8px] md:text-[64px]  xl:pt-0 xl:text-[100px] xl:leading-[120%]  xl:tracking-[-8px] 2xl:text-[140px] 2xl:tracking-[-11.2px] ">
                Falafel are you today?
              </h2>
              <h2 className="absolute left-0 top-0 z-30 font-zt text-[60px] leading-[54px] tracking-[-4.8px] opacity-0 transition-opacity duration-1000 hover:opacity-100 md:text-[64px] xl:pt-0 xl:text-[100px]  xl:leading-[120%] xl:tracking-[-8px] 2xl:text-[140px] 2xl:tracking-[-11.2px]">
                Falafel are you today?
              </h2>
            </div>
            <Image
              src={cloud}
              alt="cloud right"
              // className="absolute left-[67vw] top-[6vh] z-10 w-[33vw]  "
              className="animate-cloud-2-reverse  absolute right-[50px] top-[-70px] z-10 hidden  w-[189px] md:block xl:right-[155px] xl:top-[-40px] xl:w-[201px] 2xl:right-[230px] 2xl:top-[-50px] 2xl:w-[267px]"
            />
            <Image
              src={cloud2}
              alt="cloud left"
              // className="absolute right-[78vw] top-[30vh] z-10 w-[33vw] "
              className="animate-cloud-2 absolute bottom-[-220px] left-[-15px] z-20 hidden w-[189px] md:block  xl:bottom-[-70px] xl:left-[90px] xl:w-[225px] 2xl:bottom-[-120px] 2xl:w-[297px]"
            />
          </div>
          <div
            id="content"
            className="flex grow  flex-col justify-between"
          >
            <div className="relative z-20  hidden items-center justify-center font-creato text-[14px] uppercase xl:flex  xl:pt-[24vh] 2xl:pt-[225px] 2xl:text-[18px]">
              {/* <div className="relative z-20  hidden items-center justify-center font-creato text-[14px] uppercase xl:flex  xl:pt-[20.5vh] 2xl:pt-[19vh] 2xl:text-[18px]"> */}
              {/* <div className="hidden items-center justify-center font-creato uppercase  xl:flex xl:pt-[255px]"> */}
              <div className="flex w-full max-w-[1080px] items-center justify-between 2xl:max-w-[1420px]">
                <p className="max-w-[142px] text-center leading-[120%]">This is an entertainment website</p>
                <p className="max-w-[110px] text-center leading-[120%]">
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
            <div className=" sticky bottom-[var(--main-page-padding-bottom)] z-20 flex w-full text-center  font-libre text-[22px] leading-7 tracking-[-0.44px]    md:text-[26px]  md:leading-8 md:tracking-[-0.52px] 2xl:text-[35px]  2xl:leading-[120%] 2xl:tracking-[-0.7px] ">
              <Link
                href="/survey"
                className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all duration-500 hover:bg-[#FFBAC2] 2xl:py-5 "
              >
                Start test
              </Link>
              {/* <Link
                href="/survey"
                className="w-full rounded-full border-2 border-primary bg-[#FFE900] py-[15px] transition-all hover:bg-[#FFBAC2] xl:py-5 "
              >
                Start test
                <span className="hidden 2xl:block">1920</span>
              </Link> */}
              <div className="absolute  right-[50%] z-[11]  h-fit w-[300px] translate-x-1/2  ">
                <Image
                  src={flowerPink}
                  alt="flowers"
                  className="animate-flower absolute left-[20%] top-[-18px] z-[10] w-[33px] scale-0 md:left-[3%] md:top-[-21px]  md:w-[44px] xl:left-[4%] xl:w-[47px]  2xl:left-[-8%] 2xl:top-[-26px] 2xl:w-[64px]"
                  // className="animate-flower absolute left-[25%] top-[-18px] z-10 w-[33px]  scale-0 md:top-[-21px] md:w-[44px] xl:left-[40%] 2xl:top-[-26px] 2xl:w-[64px]"
                />
                <Image
                  src={flowerBlue}
                  alt="flowers"
                  className="animate-flower absolute right-[20%] top-[-16px] z-10 w-[33px] scale-0 md:right-[1%] md:top-[-21px] md:w-[44px] xl:right-[-8%] xl:w-[47px] 2xl:right-[-20%] 2xl:top-[-26px] 2xl:w-[64px]"
                  // className="animate-flower absolute right-[20%] top-[-16px] z-10 w-[33px] scale-0 md:right-[25%] md:top-[-21px] md:w-[44px] xl:right-[40%] 2xl:top-[-26px] 2xl:w-[64px]"
                />
              </div>
            </div>
          </div>

          <Image
            src={cloud}
            alt="cloud"
            // className="absolute left-[67vw] top-[6vh] z-10 w-[33vw]  "
            className="animate-cloud-2-reverse absolute left-[67vw] top-[6vh] z-10 w-[33vw]  md:hidden"
          />

          <Image
            src={cloud2}
            alt="cloud"
            // className="absolute right-[78vw] top-[30vh] z-10 w-[33vw] "
            className="animate-cloud-2 absolute  right-[78vw] top-[30vh] z-10 w-[33vw] md:hidden "
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
            className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_30px)] right-[50%] z-10  hidden max-h-[calc(100vh_-_335px_-_30px)] min-w-[768px] max-w-[122vw]  translate-x-1/2 md:block xl:hidden"
            // className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_30px)] right-[50%] z-10  hidden max-h-[65vh] min-w-[768px] max-w-[122vw]  translate-x-1/2 md:block xl:hidden"
            // className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_20px)] right-[50%] z-10 min-w-[80vh] translate-x-1/2  md:hidden "
          />
          <Image
            src={falafelOnly}
            alt="falafel image"
            className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_39px)] right-[50%] z-10 hidden max-h-[calc(100vh_-_256px_-_5px_-_30px)] w-[67vw]  translate-x-1/2 xl:block 2xl:hidden"
            // className="h1050:max-h-[100vh] h1050:max-w-[100vw]  absolute bottom-[calc(var(--main-page-padding-bottom)_-_39px)] right-[50%] z-10 hidden min-w-[972px] max-w-[100vw]  translate-x-1/2 xl:block 2xl:hidden"
            // className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_20px)] right-[50%] z-10 min-w-[80vh] translate-x-1/2  md:hidden "
          />
          <Image
            src={falafelMain1920}
            alt="falafel image"
            className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_54px)] right-[50%] z-10 hidden max-h-[calc(100vh_-_347px_-_20px_-_54px)] min-w-[950px] max-w-[1322px]  translate-x-1/2 2xl:block"
            // className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_54px)] right-[50%] z-10 hidden max-h-[63vh] min-w-[1055px] translate-x-1/2 2xl:block"
            // className="absolute  bottom-[calc(var(--main-page-padding-bottom)_-_54px)] right-[50%] z-10 hidden min-w-[1055px] translate-x-1/2 2xl:block"
            // className="absolute bottom-[calc(var(--main-page-padding-bottom)_-_20px)] right-[50%] z-10 min-w-[80vh] translate-x-1/2  md:hidden "
          />
        </main>
        {/* big clouds top  */}
        <Image
          src={cloudsMobileLeft}
          alt="cloud top left"
          className="animate-big-clouds-left absolute left-[-68px] top-[-2px] z-10 w-[230px] md:left-[-70px] md:top-[-15px] md:w-[342px] xl:left-[-25px] xl:top-[-15px] 2xl:left-[-36px] 2xl:top-[-22px]"
        />
        <Image
          src={cloudsMobileRight}
          alt="cloud top right"
          className="animate-big-clouds-right absolute right-[-86px] top-[-2px] z-10  w-[230px] md:right-[-69px]  md:top-[-15px] md:w-[342px] xl:right-[-25px] xl:top-[-15px] 2xl:right-[-36px] 2xl:top-[-22px]"
        />

        {/* stars */}
        <Image
          src={starBlackRightMobile}
          alt="star"
          // className="absolute right-[10px] top-[308px] z-10 w-[22px] md:hidden"
          className="absolute right-[10px] top-[308px] z-10 w-[22px] md:hidden"
        />

        <Image
          src={starMiddleMobile}
          alt="star"
          // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
          className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden  "
        />
        {/* <Image
          src={starMdTop}
          alt="star"
          // className="absolute right-[50%] top-[108px] z-10 w-[12px] translate-x-1/2 md:hidden"
          className="absolute left-[22.5vh] top-[15.5vh] z-10  hidden w-[34px] md:block xl:hidden"
        /> */}
        <Image
          src={starMiddleMobile}
          alt="star"
          // className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
          className="absolute left-[10px] top-[465px] z-10 w-[12px] md:hidden"
        />
        {/* stars  1440 */}
        <Image
          src={stars768}
          alt="stars"
          className="absolute left-[23px] top-[16%] z-10 hidden max-h-[620px] w-[calc(100%_-_54px)] md:block xl:hidden"
          // className="animate-stars-appear animate-stars-appear-start absolute left-[23px] top-[16%] z-10 hidden max-h-[620px] w-[calc(100%_-_54px)] md:block xl:hidden"
          // className="animate-stars-appear animate-stars-appear-start absolute left-[23px] top-[165px] z-10 hidden max-h-[620px] w-[calc(100%_-_54px)] md:block xl:hidden"
        />
        <Image
          src={stars1440}
          alt="stars"
          className="absolute left-[40px] top-[1.9%] z-10 hidden h-[78.2%] w-[calc(100%_-_71px)] xl:block 2xl:hidden"
          // className="animate-stars-appear animate-stars-appear-start absolute left-[40px] top-[1.9%] z-10 hidden h-[78.2%] w-[calc(100%_-_71px)] xl:block 2xl:hidden"
          // className="animate-stars-appear animate-stars-appear-start absolute left-[40px] top-[2%] z-10 hidden max-h-[723px] w-[calc(100%_-_71px)] xl:block 2xl:hidden"
        />
        <Image
          src={stars1920}
          alt="stars"
          className="absolute left-[53px]  top-[24px] z-10 hidden max-h-[962px] w-[calc(100%_-_93px)] 2xl:block"
          // className="animate-stars-appear animate-stars-appear-start absolute left-[53px]  top-[24px] z-10 hidden max-h-[962px] w-[calc(100%_-_93px)] 2xl:block"
        />
      </div>
      <Footer />
    </>
  );
}

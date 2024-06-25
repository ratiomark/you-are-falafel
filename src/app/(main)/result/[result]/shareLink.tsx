'use client';
// import Link from 'next/link';
// import FacebookIcon from 'public/facebookicon.svg';
// import LinkedInIcon from 'public/instaicon.svg';
// import CopyIcon from 'public/copyicon.svg';
// import TwitterIcon from 'public/twittericon.svg';
// import CloseIcon from 'public/closeIcon.svg';
// import Image from 'next/image';
// import { Button } from '@/shared/ui/button';
// import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
// import { PopoverClose } from '@radix-ui/react-popover';
// 'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import FacebookIcon from 'public/facebookicon.svg';
import LinkedInIcon from 'public/instaicon.svg';
import CopyIcon from 'public/copyicon.svg';
import TwitterIcon from 'public/twittericon.svg';
import CloseIcon from 'public/closeIcon.svg';

const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];
const iconsBg = ['#FFBAC2', '#8BE3FF', '#FFE900', '#00B261'];

type ResultType = 'king' | 'angel' | 'demon' | 'alien' | 'artist' | 'sushi';

const resultData = {
  king: {
    pageTitle: 'You are a falafel king',
    pageDescription: `Wow! What a star we have here! It's the boss of all bosses, the ultimate chief of chiefs. Well, hello there, king of the world! 👑`,
    metaTitle: "I'm the Falafel King! Which quirky food are you? Butcher.Studio quiz",
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_king.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
I'm the Falafel King! Which food royalty are you? Take the quiz! \n
Bow down to the Falafel King! 👑🧆 This quirky quiz from Butcher Studio crowned me as culinary royalty. Curious about your food kingdom? Take the test and rule your flavor empire! \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
👑🧆 I'm the Falafel King! This quirky quiz crowned me as culinary royalty. Which food ruler are you? Take the test and claim your flavor throne! \n
Created by https://butcher.studio \n
Test your taste: https://you-are-falafel-git-main-ratiomarks-projects.vercel.app \n`,
  },
  angel: {
    pageTitle: 'You are a falafel angel',
    pageDescription: `Oh là là, we've got the embodiment of tenderness and kindness right here! 😇 A walking ray of sunshine, warming hearts all around. Meet the Falafel Angel! 💖`,
    metaTitle: "I'm an Angel Falafel! Discover your food persona. Butcher.Studio quiz",
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_angel.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
I'm an Angel Falafel! What's your heavenly flavor? Find out now! \n
Turns out I'm a divine Angel Falafel! 😇🧆 This fun quiz by Butcher Studio revealed my celestial taste. Wonder about your foodie halo? Discover your angelic flavor now! \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
😇🧆 Heavenly news! I'm an Angel Falafel! This divine quiz revealed my celestial taste. Curious about your foodie halo? Discover your angelic flavor now! \n
Test your taste: https://lolafel.fun \n
Created by https://butcher.studio \n`,
  },
  demon: {
    pageTitle: 'You are a falafel demon',
    pageDescription: `Attention, mortals! 🚨 From the depths of the underworld rises the true lord of chaos! Bold, rebellious, irresistible - Falafel Lucifer! 👹`,
    metaTitle: 'Devilish Falafel here! Find your tasty alter ego: Butcher.Studio quiz',
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_demon.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
I'm a Devil Falafel! What's your spicy alter ego? Try the quiz! \n
Hot news: I'm a devilishly tasty Falafel! 😈🧆 This spicy quiz from Butcher Studio unveiled my fiery food soul. Curious about your culinary dark side? Find out now! \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
😈🧆 Hot take: I'm a Devil Falafel! This spicy quiz unveiled my fiery food soul. What's your culinary dark side? Dare to find out! \n
Created by https://butcher.studio \n
Test your taste: https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result/demon`,
  },
  alien: {
    pageTitle: 'You are a falafel alien',
    pageDescription: `Alien Falafel, you're a mystery of the Universe! 🛸 Your unique perspective and otherworldly charm are conquering the planet. Continue your mission!`,
    metaTitle: "Alien Falafel reporting! What's your flavor? Butcher.Studio quiz",
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_alien.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
I'm an Alien Falafel! What's your cosmic flavor? Take the test! \n
Greetings, Earthlings! I'm an otherworldly Alien Falafel! 👽🧆 This cosmic quiz by Butcher Studio revealed my extraterrestrial taste. What's your space food persona? \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
👽🧆 Greetings, Earthlings! I'm an Alien Falafel! This cosmic quiz revealed my extraterrestrial taste. What's your space food persona? \n
Beam up to the quiz: https://lolafel.fun \n
Created by https://butcher.studio \n`,
  },
  artist: {
    pageTitle: 'You are a falafel artist',
    pageDescription: `Falafel Virtuoso, you turn ordinary moments into magic! 🎩 Your talent and charisma are worthy of admiration. Create, wizard, create!`,
    metaTitle: 'Artistic Falafel masterpiece! Your food twin? Butcher.Studio quiz',
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_artist.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
I'm an Artist Falafel! What's your creative flavor? Discover now! \n
Voila! I'm a masterpiece Artist Falafel! 🎨🧆 This colorful quiz from Butcher Studio painted my flavorful portrait. Want to discover your culinary canvas? Create now! \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
🎨🧆 Voila! I'm an Artist Falafel masterpiece! This colorful quiz painted my flavorful portrait. Ready to discover your culinary canvas? \n
Create your food art: https://lolafel.fun \n
Created by https://butcher.studio \n`,
  },
  sushi: {
    pageTitle: 'We discovered that you are sushi!',
    pageDescription: `Wow, what a surprise! 😄 Among all the falafels, a real little Sushi has snuck in - small but mighty! 💪 Your uniqueness deserves a round of applause!`,
    metaTitle: "Surprise! I'm Sushi Falafel! Your food shock? Butcher.Studio quiz",
    metaDescription:
      "Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!",
    imageUrl: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result_sushi.svg',
    copyText: `🚨 URGENT FALAFEL ALERT! 🚨 \n
Surprise! I'm Sushi Falafel! What's your food plot twist? Quiz time! \n
Plot twist: I'm a Sushi Falafel fusion! 🍣🧆 This quirky quiz by Butcher Studio rolled up my unexpected food identity. Curious about your culinary surprise? Uncover now! \n
Check out Butcher Studio: https://butcher.studio \n
Take the quiz here: https://lolafel.fun`,
    twitterText: `🚨 URGENT FALAFEL ALERT! 🚨\n
🍣🧆 Plot twist: I'm a Sushi Falafel fusion! This quirky quiz rolled up my unexpected food identity. Curious about your culinary surprise? \n
Uncover your food shock: https://lolafel.fun \n
Created by https://butcher.studio \n`,
  },
};

const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const shareFacebook = (url: string): string => {
  const params = new URLSearchParams({
    u: url.trim(),
  });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
};

const shareLinkedIn = (url: string): string => {
  const params = new URLSearchParams({
    url: url.trim(),
  });
  return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
};

const shareTwitter = (text: string, url: string): string => {
  const params = new URLSearchParams({
    text: text,
    url: url.trim(),
  });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
};

interface IconProps {
  icon: string;
  height: number;
  onClick: () => void;
}

const IconWithHoverBackground: React.FC<IconProps> = ({ icon, height, onClick }) => (
  <div
    className="icon-wrapper"
    style={{ '--bg-color': iconsBg[icons.indexOf(icon)] } as React.CSSProperties}
  >
    <Image
      tabIndex={-1}
      src={icon}
      alt=""
      height={height}
      className="icon-image"
      onClick={onClick}
    />
  </div>
);

interface ShareLinkProps {
  result: ResultType;
}

const ShareLink: React.FC<ShareLinkProps> = ({ result }) => {
  const data = resultData[result];

	const handleShare = (index: number) => {
		const url = `https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/result/${result.trim()}`;
    switch (index) {
      case 0:
        copyToClipboard(data.copyText);
        break;
      case 1:
        window.open(shareFacebook(url), '_blank');
        break;
      case 2:
        window.open(shareLinkedIn(url), '_blank');
        break;
      case 3:
        window.open(shareTwitter(data.twitterText, url), '_blank');
        break;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <p className="basis-full cursor-pointer rounded-full border-2 bg-[#FFA41C] py-[15px] transition-all md:bg-background md:hover:bg-[#FFA41C]">
          Share Result
        </p>
      </PopoverTrigger>
      <PopoverContent className="rounded-[40px] border-2 border-primary bg-[#FFF3E1] md:p-[30px] md:pt-5 2xl:p-10 2xl:pt-[30px]">
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
          {icons.map((icon, index) => (
            <IconWithHoverBackground
              key={index}
              icon={icon}
              height={82}
              onClick={() => handleShare(index)}
            />
          ))}
        </div>
        <div className="hidden gap-5 pt-5 md:flex 2xl:hidden">
          {icons.map((icon, index) => (
            <IconWithHoverBackground
              key={index}
              icon={icon}
              height={61}
              onClick={() => handleShare(index)}
            />
          ))}
        </div>
        <div className="flex gap-2.5 pt-[32px] md:hidden">
          {icons.map((icon, index) => (
            <IconWithHoverBackground
              key={index}
              icon={icon}
              height={56}
              onClick={() => handleShare(index)}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareLink;
// 'use client';
// import Link from 'next/link';
// import FacebookIcon from 'public/facebookicon.svg';
// import LinkedInIcon from 'public/instaicon.svg';
// import CopyIcon from 'public/copyicon.svg';
// import TwitterIcon from 'public/twittericon.svg';
// import CloseIcon from 'public/closeIcon.svg';
// import Image from 'next/image';
// import { Button } from '@/shared/ui/button';
// import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
// import { PopoverClose } from '@radix-ui/react-popover';
// const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];
// interface ShareData {
//   url: string;
//   title: string;
//   description: string;
// }
// const results = ['angel', 'demon', 'king', 'sushi', 'artist', 'alien'] as const;
// type ResultType = (typeof results)[number];
// const copyToClipboard = async ({ url, title, description }: ShareData): Promise<void> => {
//   const textToCopy = `${title}\n${description}\n${url}`;
//   try {
//     await navigator.clipboard.writeText(textToCopy);
//   } catch (err) {
//     console.error('Failed to copy: ', err);
//   }
// };

// const url = 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app';
// const title = '🚨 URGENT FALAFEL ALERT! 🚨\n';

// const description = `Which Falafel Are You?  | Try Now!

// Just discovered the most hilarious personality quiz😂🧆 Give it a try and prepare to laugh!

// Created by: https://butcher.studio

// Take the quiz here:`;
// const shareLinkedIn = ({ url, title, description }: ShareData): string => {
//   const params = new URLSearchParams({
//     url: url,
//     title: title,
//     summary: description,
//   });
//   return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
// };

// const shareFacebook = ({ url, description }: ShareData): string => {
//   const params = new URLSearchParams({
//     u: url,
//     quote: description,
//   });
//   return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
// };
// const shareTwitter = ({ url, title, description }: ShareData): string => {
//   const params = new URLSearchParams({
//     url: url,
//     text: `${title}\n${description}\n`,
//   });
//   return `https://twitter.com/intent/tweet?${params.toString().trim()}`;
// };

// const shareFunctions = [shareFacebook, shareLinkedIn, shareTwitter];
// const getShareHelper = (index: number) => {
//   const shareFn = shareFunctions[index];
//   const result = shareFn({
//     url,
//     title,
//     description,
//   });
//   return result;
// };
// const iconsBg = ['#FFBAC2', '#8BE3FF', '#FFE900', '#00B261'];
// const IconsWithHoverBackground = ({ icons, height }: { icons: string[]; height: number }) => (
//   <>
//     {icons.map((icon, index) => (
//       <div
//         key={index}
//         className="icon-wrapper"
//         style={{ '--bg-color': iconsBg[index] }}
//       >
//         {index === 0 && (
//           <Image
//             tabIndex={-1}
//             src={icon}
//             alt=""
//             height={height}
//             className="icon-image"
//             onClick={() => {
//               copyToClipboard({
//                 url: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/',
//                 title: 'Тут какой-то title',
//                 description: 'А тут какой-то description',
//               });
//             }}
//           />
//         )}
//         {index !== 0 && (
//           <Link
//             target="_blank"
//             // href={shareTwitter('https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/', 'Тайлтл\n \n ОПИСАНИЕ \n\n')}
//             href={getShareHelper(index - 1)}
//           >
//             <Image
//               tabIndex={-1}
//               src={icon}
//               alt=""
//               height={height}
//               className="icon-image"
//             />
//           </Link>
//         )}
//       </div>
//     ))}
//   </>
// );

// export default function ShareLink({ result }: { result: ResultType }) {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <p className="basis-full rounded-full border-2 bg-[#FFA41C] py-[15px] transition-all md:bg-background md:hover:bg-[#FFA41C]">Share Result</p>
//       </PopoverTrigger>
//       <PopoverContent
//         className="rounded-[40px] border-2 border-primary bg-[#FFF3E1]

// 								md:p-[30px] md:pt-5

// 								2xl:p-10 2xl:pt-[30px]"
//       >
//         <div className="flex w-full justify-between">
//           <p className="font-libre text-[26px] leading-[120%] tracking-[-0.52px] 2xl:text-[35px] 2xl:tracking-[-0.7px]">Share:</p>
//           <PopoverClose
//             className="cursor-pointer outline-none"
//             aria-label="Close"
//           >
//             <Image
//               src={CloseIcon}
//               alt=""
//               height={30}
//               className="md:hidden 2xl:block"
//             />
//             <Image
//               src={CloseIcon}
//               alt=""
//               height={24}
//               className="2xl:hidden"
//             />
//           </PopoverClose>
//         </div>
//         <div className="hidden gap-5 pt-5 2xl:flex">
//           <IconsWithHoverBackground
//             height={82}
//             icons={icons}
//           />
//         </div>
//         <div className="hidden gap-5 pt-5 md:flex 2xl:hidden">
//           <IconsWithHoverBackground
//             height={61}
//             icons={icons}
//           />
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

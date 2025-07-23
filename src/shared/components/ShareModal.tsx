'use client';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shared/ui/dialog';
import Image from 'next/image';
import FacebookIcon from 'public/facebookicon.svg';
import LinkedInIcon from 'public/instaicon.svg';
import CopyIcon from 'public/copyicon.svg';
import TwitterIcon from 'public/twittericon.svg';
import { resultData } from '../consts/resultData';

interface ShareDialogProps {
  imageUrl: string;
  title: string;
  description: string;
  result: ResultType;
}

const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];
const iconsBg = ['#FFBAC2', '#8BE3FF', '#FFE900', '#00B261'];
export type ResultType = 'king' | 'angel' | 'demon' | 'alien' | 'artist' | 'sushi';
export const seoImages: Record<ResultType, string> = {
  angel: 'https://ik.imagekit.io/towzbt87r/lolafel/angel.png',

  demon: 'https://ik.imagekit.io/towzbt87r/lolafel/devil.png',

  alien: 'https://ik.imagekit.io/towzbt87r/lolafel/alien.png',

  artist: 'https://ik.imagekit.io/towzbt87r/lolafel/artist.png',

  king: 'https://ik.imagekit.io/towzbt87r/lolafel/king.png',

  sushi: 'https://ik.imagekit.io/towzbt87r/lolafel/sushi.png',
};
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const shareFacebook = (url: string, description: string): string => {
  const params = new URLSearchParams({
    u: url,
    quote: description,
  });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
};
const shareLinkedIn = (url: string): string => {
  const params = new URLSearchParams({
    url: url.trim(),
  });
  return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
};

const shareTwitter = (text: string, url?: string): string => {
  const params = new URLSearchParams({
    text: text,
    // url: url.trim(),
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
    const url = `https://www.lolafel.fun/result/${result.trim()}`;
    switch (index) {
      case 0:
        copyToClipboard(data.copyText);
        break;
      case 1:
        window.open(
          shareFacebook(
            url,
            `Discover your quirky food persona with Butcher.Studio's hilarious quiz! Are you a regal Falafel King or a surprising Sushi roll? Find out now and share your tasty alter ego!`,
          ),
          '_blank',
        );
        break;
      case 2:
        window.open(shareLinkedIn(url), '_blank');
        break;
      case 3:
        window.open(shareTwitter(data.twitterText), '_blank');
        // window.open(shareTwitter(data.twitterText, url), '_blank');
        break;
    }
  };

  return (
    <>
      <div className="hidden gap-5 pt-5 w-full justify-end 2xl:flex">
        {icons.map((icon, index) => (
          <IconWithHoverBackground
            key={index}
            icon={icon}
            height={82}
            onClick={() => handleShare(index)}
          />
        ))}
      </div>
      <div className="hidden gap-5 pt-5 md:flex w-full justify-end 2xl:hidden">
        {icons.map((icon, index) => (
          <IconWithHoverBackground
            key={index}
            icon={icon}
            height={61}
            onClick={() => handleShare(index)}
          />
        ))}
      </div>
      <div className="flex w-full justify-center gap-2.5 pt-[10px] md:hidden">
        {icons.map((icon, index) => (
          <IconWithHoverBackground
            key={index}
            icon={icon}
            height={56}
            onClick={() => handleShare(index)}
          />
        ))}
      </div>
    </>
  );
};
export function ShareDialog(props: ShareDialogProps) {
  const { imageUrl, title, description, result } = props;
  return (
    <Dialog >
      <DialogTrigger asChild>
        <p className="basis-full cursor-pointer rounded-full border-2 bg-[#FFA41C] py-[15px] transition-all md:bg-background md:hover:bg-[#FFA41C]">
          Share Result
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-[320px] border md:border-2 rounded-[30px] p-2.5 md:max-w-[540px] md:rounded-[40px] md:p-5 2xl:max-w-[651px] 2xl:p-10">
        <div className="rounded-[22px] border md:border-2 2xl:rounded-[26px]">
          <div className="flex flex-col items-center justify-center">
            <p className="pb-[8px] pt-[12px] font-libre  text-[12px] leading-[120%] tracking-[-0.226px] md:pb-[13px] md:pt-5 md:text-[18px] md:tracking-[-0.377px] 2xl:pb-[15.4px] 2xl:pt-[22px] 2xl:text-[22px] 2xl:tracking-[-0.43px]">
              Your result:
            </p>
            <p className="text-center font-zt text-[21px] leading-[120%] tracking-[-1.68px] md:text-[35px] md:tracking-[-2.8px] 2xl:text-[40px] 2xl:tracking-[-3.198px]">
              {title}
            </p>
            <div className="mx-auto 2xl:hidden">
              {/* <div className="mx-auto md:max-h-[620px] md:max-w-[calc(541px)] 2xl:hidden"> */}
              <Image
                width={541}
                height={487}
                src={imageUrl}
                className="max-h-[50vh] "
                // className="ml-auto md:max-h-[480px]"
                // className="ml-auto md:max-w-[541px]"
                // className="ml-auto md:max-w-[541px]"
                alt="Survey Result"
              />
            </div>
            <div className="mx-auto hidden md:max-w-[calc(10%_+_541px)] 2xl:block">
              <Image
                width={757}
                height={672}
                src={imageUrl}
                className=" md:max-w-[541px]"
                alt="Survey Result"
              />
            </div>
            <p className="max-w-[90%] pb-[14px] pt-[14px] text-center font-creato text-[6px] uppercase leading-[120%] md:pb-[23px] md:pt-[22px] md:text-[10px] 2xl:pb-[26px] 2xl:pt-[26px] 2xl:text-[11px]">
              {description}
            </p>
          </div>
				</div>
				
        <ShareLink result={result} />
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild></DialogClose>
        </DialogFooter> */}
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
}

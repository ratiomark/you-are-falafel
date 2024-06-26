'use client';
import Link from 'next/link';
import logo from 'public/logo (2).svg';
import FacebookIcon from 'public/facebookicon.svg';
import LinkedInIcon from 'public/instaicon.svg';
import CopyIcon from 'public/copyicon.svg';
import TwitterIcon from 'public/twittericon.svg';
const icons = [CopyIcon, FacebookIcon, LinkedInIcon, TwitterIcon];
interface ShareData {
  url: string;
  title: string;
  description: string;
}

const copyToClipboard = async ({ url, title, description }: ShareData): Promise<void> => {
  const textToCopy = `${title}${description}\n${url}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

const url = 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app';
const title = '🚨 URGENT FALAFEL ALERT! 🚨\n';

const description = `Which Falafel Are You?  | Try Now!

Just discovered the most hilarious personality quiz😂🧆 Give it a try and prepare to laugh!

Created by: https://butcher.studio

Take the quiz here:`;
const shareLinkedIn = ({ url, title, description }: ShareData): string => {
  const params = new URLSearchParams({
    url: url,
    title: title,
    summary: description,
  });
  return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
};

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
const getShareHelper = (index: number) => {
  const shareFn = shareFunctions[index];
  const result = shareFn({
    url,
    title,
    description,
  });
  return result;
};
// (
//   <Link
//     target="_blank"
//     href={getShareHelper(index)}
//     className="underline-effect underline-white cursor-pointer"
//   >
//     {text}
//   </Link>
// ))
{
  /* <span className="underline-effect underline-white cursor-pointer">Copy link</span> / Facebook / LinkedIn / Twitter; */
}
export const FooterShareLinks = () => {
  const linkTexts = ['Facebook', 'LinkedIn', 'Twitter'];
  return (
    <>
      <span onClick={() => copyToClipboard({ url, title, description })}>
        <span className="underline-effect underline-white cursor-pointer">Copy link</span>
        &nbsp;/&nbsp;
      </span>
      {linkTexts.map((text, index) => {
        return (
          <Link
            target="_blank"
            href={getShareHelper(index)}
          >
            <span className="underline-effect underline-white cursor-pointer">{text}</span>
            {index !== linkTexts.length - 1 && <span>&nbsp;/&nbsp;</span>}
          </Link>
        );
      })}
    </>
  );
};

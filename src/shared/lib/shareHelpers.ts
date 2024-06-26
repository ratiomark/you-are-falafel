// 'use client';

interface CustomShareData {
  url: string;
  title: string;
  description: string;
}

const url = 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app';
const title = '🚨 URGENT FALAFEL ALERT! 🚨\n';

const description = `Which Falafel Are You?  | Try Now!

Just discovered the most hilarious personality quiz😂🧆 Give it a try and prepare to laugh!

Created by: https://butcher.studio

Take the quiz here:
https://you-are-falafel-git-main-ratiomarks-projects.vercel.app
`;

// export const copyToClipboard = async ({ url, title, description }: CustomShareData): Promise<void> => {
export const copyToClipboard = async (): Promise<void> => {
  const textToCopy = `${title}${description}\n${url}`;
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

export const shareLinkedIn = ({ url, title, description }: CustomShareData): string => {
  const params = new URLSearchParams({
    url: url,
    title: title,
    summary: description,
  });
  return `https://www.linkedin.com/shareArticle?mini=false&${params.toString()}`;
};

export const shareFacebook = ({ url, description }: CustomShareData): string => {
  const params = new URLSearchParams({
    u: url,
    quote: description,
  });
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
};
export const shareTwitter = ({ url, title, description }: CustomShareData): string => {
  const params = new URLSearchParams({
    // url: url,
    text: `${title}\n${description}\n`,
  });
  return `https://twitter.com/intent/tweet?${params.toString().trim()}`;
};

const shareFunctions = [shareFacebook, shareLinkedIn, shareTwitter];
export const getShareHelper = (index: number) => {
  const shareFn = shareFunctions[index];
  const result = shareFn({
    url,
    title,
    description,
  });
  return result;
};

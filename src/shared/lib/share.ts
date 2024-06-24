export function createLinkedInShareUrl(url: string, title: string, summary: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
}
interface ShareOnFacebookProps {
  url: string;
  title: string;
  description: string;
  imageUrl?: string;
  hashtag?: string;
}
interface ShareOnFacebookProps2 {
  url: string;
  quote: string;
  hashtag?: string;
}

export const shareOnFacebook = ({ url, title, description, imageUrl }: ShareOnFacebookProps) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + '\n' + description)}`;
};

export const shareFacebook = ({ url, quote, hashtag }: ShareOnFacebookProps2) => {
  const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
  const params = new URLSearchParams({
    u: url,
    quote,
  });
  return `${baseUrl}?${params.toString()}`;
};

interface ShareLinkedInParams {
  url: string;
  title: string;
  summary?: string;
  source?: string;
}

interface ShareTwitterParams {
  url: string;
  text: string;
  hashtags?: string[];
  via?: string;
}

export const shareLinkedIn = ({ url, title, summary, source }: ShareLinkedInParams): string => {
  const baseUrl = 'https://www.linkedin.com/shareArticle';
  const params = new URLSearchParams({
    mini: 'false',
    url,
    title,
  });
  if (summary) params.append('summary', summary);
  if (source) params.append('source', source);
  return `${baseUrl}?${params.toString()}`;
};

export function createFacebookShareUrl(url: string): string {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

export function createTwitterShareUrl(text: string, url: string, hashtags: string): string {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
}

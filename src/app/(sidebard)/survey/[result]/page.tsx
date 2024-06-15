import Head from 'next/head';
import Image from 'next/image';
import logo from 'public/orionLogo.png';
interface SurveyResultProps {
  result: string;
  title: string;
  description: string;
  imageUrl: string;
}
const results = ['angel', 'devil', 'king', 'sushi'] as const; // Обратите внимание на `as const`
type ResultType = (typeof results)[number]; // 'angel' | 'devil' | 'king' | 'sushi'
function SurveyResult({ params }: { params: { result: ResultType } }) {
  // console.log(params);
  const { result, title, description, imageUrl } = getDataFromResult(params);
  // const { result, title, description, imageUrl } = params;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={imageUrl}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={imageUrl}
        />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Image
					width={1000}
					height={1000}
          src={imageUrl}
          alt="Survey Result"
        />
      </div>
    </>
  );
}

export default SurveyResult;

export function getDataFromResult({ result }: { result: ResultType }) {
  const titles = {
    angel: 'Вы - Ангел!',
    devil: 'Вы - Дьявол!',
    king: 'Вы - Король!',
    sushi: 'Вы - Суши!',
  };

  const descriptions = {
    angel: 'Чистосердечный и добрый, вы всегда стремитесь помочь.',
    devil: 'Озорной и хитрый, вы всегда найдёте способ развлечься.',
    king: 'Достойный и мудрый, ваше правление бесспорно.',
    sushi: 'Уникальный и изысканный, вы ценитель тонких вкусов.',
  };

  const imageUrls = {
    angel: 'https://your-domain.com/images/angel.jpg',
    devil: 'https://you-are-falafel-git-main-ratiomarks-projects.vercel.app/orionLogo.png',
    king: 'https://your-domain.com/images/king.jpg',
    sushi: 'https://your-domain.com/images/sushi.jpg',
  };
  return {
    result,
    title: titles[result],
    description: descriptions[result],
    imageUrl: imageUrls[result],
  };
}
export async function generateStaticParams() {
  return results.map(result => ({
    result,
  }));
}

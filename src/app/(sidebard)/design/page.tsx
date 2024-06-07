import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription';
import { DesignForm } from './DesignForm';

export default async function ProjectPage() {
  return (
    // <main className="relative border-l px-6 pt-12 ">
    // {/* <main className='pt-12 px-6 border border-red-500'> */}
    // {/* <main className='m-20 max-w-[1152px] border border-red-500'> */}
    // <div className="">
    <>
      {/* <div className='border border-red-500'> */}
      <PageTitleAndDescription
        title="Design Parameters"
        description="Set up your Story Template with your company's logo, colors, fonts, and imagery so your client stories represent your brand faithfully"
      />
      {/* <p>Doppler Env: {process.env.ENV_TEST}</p> */}
      <DesignForm />
    </>
    // {/* </div> */}
    // </main>
  );
}

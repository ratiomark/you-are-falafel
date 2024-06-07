import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription'
import { DesignForm } from './DesignForm'
import { ComingSoon } from '@/shared/components/ComingSoon/ComingSoon'

export default async function ProjectPage() {
  return (
    // <main className="relative border-l px-6 pt-12 ">
    // {/* <main className='pt-12 px-6 border border-red-500'> */}
    // {/* <main className='m-20 max-w-[1152px] border border-red-500'> */}
    <div className="">
      {/* <div className='border border-red-500'> */}
      <PageTitleAndDescription
        title="My Story Library"
        description="You've done the work, now don't miss the opportunity to highlight your success."
        className="max-w-[600px]"
        // descriptionСlassName='min-w-[600px]'
      />
      <ComingSoon />
      {/* <DesignForm /> */}
    </div>
    // </main>
  )
}

import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription'
import { DesignForm } from './DesignForm'
import TeamTabsLink from '@/shared/components/Tabs/TeamTabsLink'
import { ComingSoon } from '@/shared/components/ComingSoon/ComingSoon'

export default async function TeamEditPage() {
  return (
    // <main className="relative border-l px-6 pt-12 ">
    // {/* <main className='pt-12 px-6 border border-red-500'> */}
    // {/* <main className='m-20 max-w-[1152px] border border-red-500'> */}
    <div className="">
      {/* <div className='border border-red-500'> */}
      <PageTitleAndDescription
        title="Edit Team"
        description="Manage your team's details and members. Set up general information, geographical spread, and additional data to ensure all relevant team information is up to date and accurately represented."
      />
      <TeamTabsLink
        active="/team/edit"
        className="mb-10"
      />
      {/* <DesignForm /> */}
      <ComingSoon />
    </div>
    // </main>
  )
}

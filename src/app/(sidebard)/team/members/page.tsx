import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription'
import { DesignForm } from './DesignForm'
import TeamTabsLink from '@/shared/components/Tabs/TeamTabsLink'
import { Button } from '@/shared/ui/button'
import plusIcon from 'public/plus.svg'
import Image from 'next/image'

export default async function TeamMembersPage() {
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
        active="/team/members"
        className="mb-10"
      />
      <div className="grid h-[68px] grid-cols-[68px_188px_188px_220px_220px_220px_48px] items-center gap-4 bg-primary px-4 font-creato text-base text-secondary-foreground">
        <p>Photo</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>E-mail</p>
        <p>Linkedin URL</p>
        <p>Role</p>
        <div></div>
      </div>
      {/* <DesignForm /> */}
      <div className="pt-6">
        <div className="flex gap-2 p-2">
          <Image
            src={plusIcon}
            alt={''}
            // className="border-red-400 border"
          />
          <Button
            size={'empty'}
            variant={'ghost'}
            // className="h-9"
          >
            Add new member
          </Button>
        </div>
      </div>
    </div>
    // </main>
  )
}

// Универсальное описание для обеих страниц (team/edit и team/members)
// "Manage your team's details and members. Set up general information, geographical spread, and additional data to ensure all relevant team information is up to date and accurately represented."

// Описание для страницы team/edit
// "Edit and update your team's details. Provide comprehensive information about your team, including general data, geographical distribution, and additional relevant information to keep your team profile accurate and complete."

// Описание для страницы team/members
// "Manage the members of your team. Add new members, update existing member details, and maintain an organized list of all team members with their roles and contact information."

import { PageTitleAndDescription } from '@/shared/components/PageTitleAndDescription'
import { ProjectForm } from './ProjectForm'

export default async function ProjectPage() {
	return (
		<main className='pt-12 px-6 border border-red-500'>
			{/* <main className='m-20 max-w-[1152px] border border-red-500'> */}
			<PageTitleAndDescription
				title='Project'
				description="Set up your Story Template with your company's logo, colors, fonts, and imagery so your client stories represent your brand faithfully"
			/>
			<ProjectForm />
		</main>
	)
}

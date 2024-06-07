import { Button } from '@/shared/ui/button'
import NavBar from '@/shared/components/NavBar'
import { getServerSession } from 'next-auth/next'
// import { authOptions } from '../auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { CustomButton } from './CustomButton'
import { SideBar } from '@/shared/components/SideBar/SideBar'
import { headers } from 'next/headers'
import { ProjectForm } from './ProjectForm'
import { XCircle } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'

export default async function ProfilePage() {
	const headersList = headers()
	const currentPath = headersList.get('x-pathname') || '/'
	return (
		<>
			{/* <SideBar currentPath={currentPath} /> */}

			<div
				className='m-20 max-w-[1152px]'
				// className='max-w-[1160px] border-dashed border-violet-700 border-2'
			>
				<ProjectForm />
				<div className='pb-20' />
				<div className='flex min-w-full gap-4 p-8 border-2 border-green-400'>
					<div className='flex flex-wrap min-w-full gap-4 p-8 border-2 border-pink-600'>
						<div className='flex-grow basis-[300px] min-w-[300px] border border-orange-400 w-full'>
							<div className='flex gap-1 overflow-hidden text-ellipsis whitespace-nowrap'>
								<Badge key={'value'}>
									<span>some contentsome </span>
								</Badge>

								<Badge key={'value'}>
									<span>some contentsome</span>
								</Badge>
							</div>
						</div>
						<div className='flex-grow basis-[300px] min-w-[300px] border border-orange-400 w-full'>
							<div className='overflow-hidden text-ellipsis whitespace-nowrap'>
								some contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome
							</div>
						</div>
						<div className='flex-grow basis-[300px] min-w-[300px] border border-orange-400 w-full'>
							<div className='overflow-hidden text-ellipsis whitespace-nowrap'>
								some contentsome contentsome contentsome contentsome contentsome contentsome contentsome contentsome
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				{/* <MultiSelectWithOptions /> */}
				<h1>Profile</h1>
				<CustomButton />
			</div>
		</>
	)
}

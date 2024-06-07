import { sleep } from '@/shared/utils/sleep'
import RandomPost from './rangomPostComponent'
import RandomPost2 from './rangomPostComponent2'
import { Suspense } from 'react'
import { ProjectForm } from '../posts/ProjectForm'

// export const dynamic = 'error'
export const dynamicParams = true // true | false,
// export const dynamicParams = false // true | false,

// создает статичные страницы для каждого поста, если страница не была создана прокидывает 404
// export const dynamicParams = false

// будет каждый раз делать новый рандомный пост
// export const dynamic = 'auto'

// будет каждый раз делать новый рандомный пост
export const dynamic = 'force-dynamic'
// export const dynamic = 'force-static'

// export const revalidate = false
// export const fallback = false
// export function generateStaticParams() {
// 	return [{ postId: '1' }, { postId: '2' }, { postId: '3' }]
// }

export default async function Page() {
	return (
		<div className='m-20 max-w-[1152px]'>
			<h1>Testik</h1>
			<p>Static description</p>
			<br />
			<Suspense fallback={<div>Loading22222222222222222222</div>}>
				<RandomPost />
			</Suspense>
			<br />
			<Suspense fallback={<div>Loading22222222222222222222</div>}>
				<RandomPost2 />
			</Suspense>
			<ProjectForm />
		</div>
	)
}

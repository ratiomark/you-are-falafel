import { sleep } from '@/shared/utils/sleep'
import Post from './post'
import RandomPost from './rangomPostComponent'
import RandomPost2 from './rangomPostComponent2'
import { Suspense } from 'react'
import PostFromPostId from './PostFromPostId'
interface PostPageProps {
	params: {
		postId: string
	}
}

// export const dynamic = 'error'
// export const dynamicParams = true // true | false,
// export const dynamicParams = false// true | false,

// создает статичные страницы для каждого поста, если страница не была создана прокидывает 404
// export const dynamicParams = false

// будет каждый раз делать новый рандомный пост
// export const dynamic = 'auto'

// будет каждый раз делать новый рандомный пост
// export const dynamic = 'force-dynamic'
// export const dynamic = 'force-static'

// export const revalidate = false
// export const fallback = false
// export function generateStaticParams() {
// 	return [{ postId: '1' }, { postId: '2' }, { postId: '3' }]
// }

export default async function PostPage() {
	// export default async function PostPage({ params }: PostPageProps) {
	// const postFromParams = await getPostById(postId)
	// const randomPost = await getRandomPost()
	// const randomPost2 = await getRandomPost2()

	return (
		<div className='m-20 max-w-[1152px]'>
			<br />
			<Suspense fallback={<div>Loading1111111111111111111</div>}>
				<RandomPost />
			</Suspense>
			<br />
			<Suspense fallback={<div>Loading22222222222222222222</div>}>
				<RandomPost2 />
			</Suspense>
		</div>
	)
}
// export default async function PostPage({ params }: PostPageProps) {
// 	const postId = params.postId
// 	const postFromParams = await getPostById(postId)
// 	// const randomPost = await getRandomPost()
// 	// const randomPost2 = await getRandomPost2()
// 	const content = (
// 		<div className='m-20 max-w-[1152px]'>
// 			<h2>
// 				Initial postId <b>{postId}</b>
// 			</h2>
// 			<Post post={postFromParams} />
// 			<br />
// 			<br />
// 			<br />
// 			<RandomPost />
// 			{/* <Post post={randomPost} /> */}
// 			<br />
// 			{/* <Post post={randomPost2} /> */}
// 			<RandomPost2 />
// 		</div>
// 	)

// 	return <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
// }

// const getPostById = async (postId: string) => {
// 	// await sleep(3)
// 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
// 		next: {
// 			tags: [`postId${postId}`],
// 			revalidate: 99999,
// 		},
// 	}).then((response) => response.json())
// }

// const getRandomPost = async () => {
// 	const randomPostId = Math.floor(Math.random() * 10) + 1
// 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
// 		next: {
// 			tags: ['post'],
// 			revalidate: 999999999,
// 		},
// 	}).then((response) => response.json())
// }
// const getRandomPost2 = async () => {
// 	const randomPostId = Math.floor(Math.random() * 10) + 1
// 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
// 		next: {
// 			tags: ['post2'],
// 			revalidate: 999999999,
// 		},
// 	}).then((response) => response.json())
// }
// import { sleep } from '@/shared/utils/sleep'
// import Post from './post'
// import RandomPost from './rangomPostComponent'
// import RandomPost2 from './rangomPostComponent2'
// import { Suspense } from 'react'
// import PostFromPostId from './PostFromPostId'
// interface PostPageProps {
// 	params: {
// 		postId: string
// 	}
// }

// // export const dynamic = 'error'
// // export const dynamicParams = true // true | false,
// // export const dynamicParams = false// true | false,

// // создает статичные страницы для каждого поста, если страница не была создана прокидывает 404
// // export const dynamicParams = false

// // будет каждый раз делать новый рандомный пост
// // export const dynamic = 'auto'

// // будет каждый раз делать новый рандомный пост
// // export const dynamic = 'force-dynamic'

// // export const revalidate = false
// // export const fallback = false
// // export function generateStaticParams() {
// // 	return [{ postId: '1' }, { postId: '2' }, { postId: '3' }]
// // }

// export default async function PostPage({ params }: PostPageProps) {
// 	const postId = params.postId
// 	// const postFromParams = await getPostById(postId)
// 	// const randomPost = await getRandomPost()
// 	// const randomPost2 = await getRandomPost2()

// 	return (
// 		<div className='m-20 max-w-[1152px]'>
// 			<h2>
// 				Initial postId <b>{postId}</b>
// 			</h2>
// 			<Suspense fallback={<div>Loading!!!!!!!!!!!!!!!!!!.</div>}>
// 				<PostFromPostId postId={postId} />
// 			</Suspense>

// 			<br />
// 			<br />
// 			<br />
// 			<Suspense fallback={<div>Loading1111111111111111111</div>}>
// 				<RandomPost />
// 			</Suspense>
// 			{/* <Post post={randomPost} /> */}
// 			<br />
// 			{/* <Post post={randomPost2} /> */}
// 			<Suspense fallback={<div>Loading22222222222222222222</div>}>
// 				<RandomPost2 />
// 			</Suspense>
// 		</div>
// 	)
// }
// // export default async function PostPage({ params }: PostPageProps) {
// // 	const postId = params.postId
// // 	const postFromParams = await getPostById(postId)
// // 	// const randomPost = await getRandomPost()
// // 	// const randomPost2 = await getRandomPost2()
// // 	const content = (
// // 		<div className='m-20 max-w-[1152px]'>
// // 			<h2>
// // 				Initial postId <b>{postId}</b>
// // 			</h2>
// // 			<Post post={postFromParams} />
// // 			<br />
// // 			<br />
// // 			<br />
// // 			<RandomPost />
// // 			{/* <Post post={randomPost} /> */}
// // 			<br />
// // 			{/* <Post post={randomPost2} /> */}
// // 			<RandomPost2 />
// // 		</div>
// // 	)

// // 	return <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
// // }

// // const getPostById = async (postId: string) => {
// // 	// await sleep(3)
// // 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
// // 		next: {
// // 			tags: [`postId${postId}`],
// // 			revalidate: 99999,
// // 		},
// // 	}).then((response) => response.json())
// // }

// // const getRandomPost = async () => {
// // 	const randomPostId = Math.floor(Math.random() * 10) + 1
// // 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
// // 		next: {
// // 			tags: ['post'],
// // 			revalidate: 999999999,
// // 		},
// // 	}).then((response) => response.json())
// // }
// // const getRandomPost2 = async () => {
// // 	const randomPostId = Math.floor(Math.random() * 10) + 1
// // 	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
// // 		next: {
// // 			tags: ['post2'],
// // 			revalidate: 999999999,
// // 		},
// // 	}).then((response) => response.json())
// // }

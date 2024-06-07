import { ProjectForm } from './ProjectForm'
import Post from './post'

export default async function ProjectPage() {
	const randomPostId = Math.floor(Math.random() * 10) + 1
	const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
		next: {
			tags: ['testing']
		}
	}).then((response) => response.json())
	return (
		<div className='m-20 max-w-[1152px]'>
			<h1>Posts</h1>
			<p>{randomPostId}</p>
			<Post post={posts} />
			{/* <ul className='flex flex-col gap-4'>
				{posts.map((post, i) => (
					<li
						key={post.id}
						className='flex flex-col gap-1'
					>
						<p>post {i}</p>
						<Post post={post} />
					</li>
				))}
			</ul> */}
		</div>
	)
}

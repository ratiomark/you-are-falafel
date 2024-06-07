import { ProjectForm } from './ProjectForm'
import Post from './post'

export default async function ProjectPage() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
	return (
		<div className='m-20 max-w-[1152px]'>
			<h1>Posts</h1>
			<ProjectForm />
			<ul className='flex flex-col gap-4'>
				{posts.map((post, i) => (
					<li
						key={post.id}
						className='flex flex-col gap-1'
					>
						<p>post {i}</p>
						<Post post={post} />
					</li>
				))}
			</ul>
		</div>
	)
}

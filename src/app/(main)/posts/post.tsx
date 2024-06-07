import React from 'react'

type Post = {
	userId: number
	id: number
	title: string
	body: string
}

type PostProps = {
	post: Post
}
const Post = ({post}: PostProps) => {
	return (
		<div className='flex flex-col gap-1'>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}

export default Post

import React from 'react'

export type PostT = {
	userId: number
	id: number
	title: string
	body: string
}

type PostProps = {
	post: PostT
}
const Post = ({post}: PostProps) => {
	return (
		<div className='flex flex-col gap-1'>
			<h2 className='text-lg'>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}

export default Post

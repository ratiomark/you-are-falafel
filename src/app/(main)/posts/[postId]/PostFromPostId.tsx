import { sleep } from '@/shared/utils/sleep'
import React from 'react'
import Post from '../post'

type PostProps = {
	postId: string
}

// export const revalidate = false
// export const dynamicParams = false
// export const dynamic = 'force-static'


const PostFromPostId = async ({ postId }: PostProps) => {
	const postFromParams = await getPostById(postId)
	return <Post post={postFromParams} />
}


const getPostById = async (postId: string) => {
	await sleep(2)
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
		next: {
			tags: [`postId${postId}`],
			revalidate: 99999,
		},
	}).then((response) => response.json())
}

export default PostFromPostId

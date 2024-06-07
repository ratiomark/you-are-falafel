import React from 'react'
import { sleep } from '@/shared/utils/sleep'
import Post, { PostT } from './post'

// export const revalidate = false
// export const dynamicParams = false
// export const dynamic = 'force-static'
export const RandomPost2 = async () => {
	const post = (await getRandomPost2()) as PostT
	return <Post post={post} />
}

const getRandomPost2 = async () => {
	await sleep(2)
	// const randomPostId = 3
	const randomPostId = Math.floor(Math.random() * 10) + 1
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
		next: {
			tags: ['post2'],
			revalidate: 999999999,
		},
		// cache: 'force-cache',
	}).then((response) => response.json())
}

export default RandomPost2

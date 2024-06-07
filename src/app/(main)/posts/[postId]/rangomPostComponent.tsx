import React from 'react'
import { sleep } from '@/shared/utils/sleep'
import Post from '../post'
import { PostT } from './post'

export const RandomPost = async () => {
	const post = (await getRandomPost()) as PostT
	return <Post post={post} />
}

const getRandomPost = async () => {
	await sleep(2)
	const randomPostId = Math.floor(Math.random() * 10) + 1
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, {
		next: {
			tags: ['post'],
			// revalidate: 999999999,
		},
		cache: 'force-cache',
	}).then((response) => response.json())
}

export default RandomPost

import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

type RevalidateRequestBody = {
	tag?: string
	path?: string
	pathType?: 'page' | 'layout'
	dynamic?: boolean
}

export async function POST(request: NextRequest) {
	const requestJson = await request.json()
	console.log('requestJson:', requestJson)
	const { tag, path, pathType = 'page', dynamic = false }: RevalidateRequestBody = requestJson
	// console.log('requestJson.data:', requestJson.data)
	// const path = request.nextUrl.searchParams.get('path')
	// let pathType = request.nextUrl.searchParams.get('pathType') ?? 'page'
	// const tag = request.nextUrl.searchParams.get('tag')
	const pathTypeChecked = pathType === 'page' ? 'page' : 'layout'

	if (path && tag) {
		console.log('Revalidating path:', path)
		console.log('Revalidating pathTypeChecked:', pathTypeChecked)
		console.log('Revalidating tag:', tag)
		revalidateTag(tag)
		if (dynamic) {
			revalidatePath(path)
		} else {
			revalidatePath(path, pathTypeChecked)
		}
		return new Response(JSON.stringify({ revalidated: true }), { status: 200 })
	} else if (path) {
		console.log('Revalidating path:', path)
		console.log('Revalidating pathTypeChecked:', pathTypeChecked)
		if (dynamic) {
			revalidatePath(path)
		} else {
			revalidatePath(path, pathTypeChecked)
		}
		return new Response(JSON.stringify({ revalidated: true }), { status: 200 })
	} else if (tag) {
		console.log('Revalidating tag:', tag)
		revalidateTag(tag)
		return new Response(JSON.stringify({ revalidated: true }), { status: 200 })
	}

	return new Response(JSON.stringify({ revalidated: false, message: 'Missing path to revalidate' }), { status: 400 })
}

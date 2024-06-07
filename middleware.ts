import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  response.headers.set('x-pathname', pathname)

  console.log(`Middleware: Запрошенный путь - ${pathname}`)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\.(?:svg|ico|jpg|jpeg|png|gif|webp|avif|js|jsx|ts|tsx|css|json|mdx|md)$).*)'],
}

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {
// 	const pathname = request.nextUrl.pathname
// 	const requestHeaders = new Headers(request.headers)
// 	requestHeaders.set('x-pathname', request.nextUrl.pathname)

// 	const response = NextResponse.next({ request: { headers: requestHeaders } })

// 	// Добавляем информацию о текущей странице в заголовки
// 	response.headers.set('x-pathname', pathname)

// 	// Выводим информацию о работе middleware в консоль
// 	console.log(`Middleware: Запрошенный путь - ${pathname}`)

// 	return response
// }
// // export function middleware(request: NextRequest) {
// // 	// Store current request url in a custom header, which you can read later
// // 	const requestHeaders = new Headers(request.headers)
// // 	console.log('request.url', request.url)
// // 	console.log('request.url', request.nextUrl.pathname)
// // 	request.headers.set('x-current-path', request.nextUrl.pathname)
// // 	const response = NextResponse.next()
// // 	response.headers.set('x-current-path', request.nextUrl.pathname)
// // 	return response
// // 	// return NextResponse.next({ headers: requestHeaders })
// // 	// return NextResponse.next({
// // 	// 	request: {
// // 	// 		// Apply new request headers
// // 	// 		headers: requestHeaders,
// // 	// 	},
// // 	// })
// // }
// export const config = {
// 	matcher: [
// 		'/(.*)',
// 		// match all routes except static files and APIs
// 		// '/((?!api|_next/static|_next/image|favicon.ico).*)',
// 	],
// }

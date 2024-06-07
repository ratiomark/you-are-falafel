// const headersList = headers()
// const currentPath = headersList.get('x-pathname') || '/'
import { headers } from 'next/headers'
import Link from 'next/link'

const navigationItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Profile', path: '/profile' },
	{ label: 'Dashboard', path: '/dashboard' },
]
//
export const dynamic = true

const NavBar = () => {
	// const NavBar = ({ currentPath }: { currentPath: string }) => {
	const headersList = headers()
	const currentPath = headersList.get('x-pathname') || '/'
	// const headersList = headers()
	// const currentPath = headersList.get('x-pathname') || '/'
	// const headersList = headers()
	// const currentPath = headersList.get('x-current-path') || '/'
	// const headersList = headers()
	// const currentPath = headersList.get('x-pathname') || '/'
	console.log('currentPath', currentPath)
	return (
		<nav>
			<ul className='flex flex-col gap-2 items-center justify-center'>
				{navigationItems.map((item) => (
					<li
						key={item.path}
						className={currentPath === item.path ? 'bg-slate-500' : ''}
					>
						<Link href={item.path}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar

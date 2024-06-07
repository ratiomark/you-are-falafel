'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '../../utils/cn'
import designIcon from 'public/sidebar-design.svg'
import storiesIcon from 'public/sidebar-stories.svg'
import teamsIcon from 'public/sidebar-teams.svg'
import orionLogo from 'public/orionLogo.png'
import Image from 'next/image'
const navigationItems = [
  { label: 'Stories', path: '/stories', icon: storiesIcon },
  { label: 'Design', path: '/design', icon: designIcon },
  { label: 'Team', path: '/team/members', icon: teamsIcon },
]

export const SideBar = () => {
  const currentPath = usePathname()
  const pathChecked = '/' + currentPath.split('/')[1]
  return (
      <aside
        id="default-sidebar"
        className="fixed bottom-0 left-6 top-[var(--header-height)] z-40 h-screen  border-input pt-12 transition-transform "
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-center pb-8">
          <Image
            width={192}
            src={orionLogo}
            alt="Orion Logo"
          />
        </div>
        <div className="h-full overflow-y-auto bg-background  py-4 dark:bg-gray-800">
          <ul className="space-y-2 ">
            {navigationItems.map(item => (
              <li
                className={cn(
                  pathChecked === '/' + item.path.split('/')[1] ? 'text-blue-800' : '',
                )}
                key={item.path}
              >
                <Link
                  href={item.path}
                  className={cn(
                    'group  text-description flex items-center gap-2 rounded-lg p-2   hover:bg-blue-50 ',
                  )}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.label}
                    />
                  )}
                  <span className="">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
  )
}

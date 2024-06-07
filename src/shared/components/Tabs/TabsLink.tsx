import { cn } from '@/shared/utils/cn'
import Link from 'next/link'

interface Tab {
  name: string
  href: string
}

interface TabsLinkProps {
  tabs: Tab[] | ReadonlyArray<Tab>
  active: string
  className?: string
}

export default function TabsLink({ tabs, active, className }: TabsLinkProps) {
  return (
    <div className={cn('flex gap-4 border-b border-secondary', className)}>
      {tabs.map(tab => (
        <Link
          key={tab.name}
          href={tab.href}
          className={cn('pb-[6px]', tab.href === active ? 'text-tab border-b-2 border-primary' : 'text-tab-secondary border-b-2 border-transparent')}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  )
}

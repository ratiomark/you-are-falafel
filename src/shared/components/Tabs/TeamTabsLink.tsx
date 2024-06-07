import TabsLink from './TabsLink'

const tabs = [
  { name: 'Team Info', href: '/team/edit' },
  { name: 'Team Members', href: '/team/members' },
] as const

type TabHref = (typeof tabs)[number]['href']

interface TeamTabsLinkProps {
  active: TabHref
  className?: string
}

export default function TeamTabsLink({ active, className }: TeamTabsLinkProps) {
  return (
    <TabsLink
      className={className}
      tabs={tabs}
      active={active}
    />
  )
}

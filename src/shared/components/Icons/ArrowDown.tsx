import { cn } from '@/shared/utils/cn'
import arrow from 'public/arrow=20.svg'
import Image from 'next/image'

interface ArrowDownProps {
  isOpen?: boolean
}

export const ArrowDown = ({ isOpen }: ArrowDownProps) => {
  return (
    <Image
      src={arrow}
      alt="Chevron Down"
      // width={24}
      // height={24}
      className={cn(`cursor-pointer `, isOpen ? 'animate-rotate180' : 'animate-rotate0')}
      // className={`cursor-pointer ${isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0'}`}
    />
  )
}

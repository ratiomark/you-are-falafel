import { cn } from '@/shared/utils/cn'

interface [FTName]Props {
	className?: string
}

export const [FTName] = (props: [FTName]Props) => {

	return (
		<div	className={cn('max-w-[475] pb-[80px]', props.className)}>
			[FTName]
		</div>
	)
}
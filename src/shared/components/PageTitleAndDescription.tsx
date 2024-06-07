import { Typography } from '../ui/typography'
import { cn } from '../utils/cn'

interface PageTitleAndDescriptionProps {
  title: string
  description?: string
  className?: string
  descriptionСlassName?: string
}

export const PageTitleAndDescription = (props: PageTitleAndDescriptionProps) => {
	return (
		<div
			className={cn('max-w-[535px] pb-20', props.className)}
			// className='max-w-[475px] pb-[80px]'
		>
			{/* <div className='max-w-[475px] pb-[80px]'> */}
			<Typography type='heading-page' variant='h1'>{props.title}</Typography>
			{props.description && <Typography className={cn('pt-6',  props.descriptionСlassName)}>{props.description}</Typography>}
			{/* <h1 className='main-heading text-primary'>{props.title}</h1> */}
			{/* {props.description && <p className='text-description pt-6 2xl:pt-0'>{props.description}</p>} */}
		</div>
	)
}

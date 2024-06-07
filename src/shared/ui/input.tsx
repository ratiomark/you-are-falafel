import * as React from 'react'

import { cn } from '@/shared/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'text-input flex w-full rounded-md border border-input bg-transparent px-4 py-3 font-light transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ',
        className,
      )}
      // className={cn(
      // 	'flex w-full px-4 py-3 font-light transition-colors bg-transparent border rounded-md border-input text-input leading-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      // 	className
      // )}
      // className={
      // 	'flex w-full px-4 py-3 font-light transition-colors bg-transparent border rounded-md border-input text-input leading-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
      // }
      // className={cn(
      // 	'flex h-9 w-full rounded-md border border-input  px-4 py-3 text-sm text-input leading-input shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent',
      // 	className
      // )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
// import * as React from 'react'

// import { cn } from '@/shared/utils/cn'

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
// 	return (
// 		<input
// 			type={type}
// 			className='flex w-full px-4 py-3 font-light transition-colors bg-transparent border rounded-md border-input text-input leading-input file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
// 			// className={cn(
// 			// 	'flex h-9 w-full rounded-md border border-input  px-4 py-3 text-sm text-input leading-input shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent',
// 			// 	className
// 			// )}
// 			ref={ref}
// 			{...props}
// 		/>
// 	)
// })
// Input.displayName = 'Input'

// export { Input }

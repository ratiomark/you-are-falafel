import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils/cn'

// Определяем варианты стилей для тегов h1 и p
const typographyVariants = cva(
	'', // базовые стили для всех элементов
	{
		variants: {
			h1: {
				'heading-page': 'main-heading',
				'heading-form-block': 'form-block-heading',
			},
			p: {
				'text-description': 'text-description',
			},
		},
	}
)

export type TypographyVariantProps = VariantProps<typeof typographyVariants>

// Определяем типы для вариантов
type H1Variants = TypographyVariantProps['h1']
type PVariants = TypographyVariantProps['p']

// Тип для зависимости variant и type
type VariantTypeMap = {
	h1: H1Variants
	p: PVariants
}

// Интерфейс для пропсов, с учетом зависимости между variant и type
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	asChild?: boolean
	variant?: keyof VariantTypeMap
	type?: VariantTypeMap[keyof VariantTypeMap]
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(({ className, variant = 'p', type, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : variant

	// Получаем стили для выбранного варианта и типа
	const variantClass = variant && type ? typographyVariants({ [variant]: type }) : typographyVariants({ p: 'text-description' })
	// console.log(variant)
	// console.log(type)
	// console.log(variantClass)
	return (
		<Comp
			className={cn(variantClass, className)}
			// className={cn(typographyVariants({ [variant]: type }), variantClass, className)}
			ref={ref as React.ForwardedRef<HTMLParagraphElement>}
			{...props}
		/>
	)
})
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
// import * as React from 'react'
// import { Slot } from '@radix-ui/react-slot'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { cn } from '@/shared/utils/cn'

// const typographyVariants = cva(
// 	'text-base leading-normal', // базовые стили для всех элементов
// 	{
// 		variants: {
// 			variant: {
// 				p: 'text-base leading-normal',
// 				h1: 'text-4xl font-bold leading-tight',
// 				h2: 'text-3xl font-bold leading-tight',
// 				h3: 'text-2xl font-bold leading-tight',
// 				h4: 'text-xl font-bold leading-tight',
// 				h5: 'text-lg font-bold leading-tight',
// 				h6: 'text-base font-bold leading-tight',
// 				span: 'text-base inline',
// 			},
// 		},
// 		defaultVariants: {
// 			variant: 'p',
// 		},
// 	}
// )

// export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
// 	asChild?: boolean
// }

// const Typography = React.forwardRef<HTMLElement, TypographyProps>(({ className, variant, asChild = false, ...props }, ref) => {
// 	const Comp = asChild ? Slot : variant || 'p'
// 	return (
// 		<Comp
// 			className={cn(typographyVariants({ variant, className }))}
// 			ref={ref as React.Ref<HTMLElement>}
// 			{...props}
// 		/>
// 	)
// })
// Typography.displayName = 'Typography'

// export { Typography, typographyVariants }
// import * as React from 'react'
// import { Slot } from '@radix-ui/react-slot'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { cn } from '@/shared/utils/cn'

// const typographyVariants = cva(
// 	'', // базовые стили для всех элементов
// 	{
// 		variants: {
// 			type: {
// 				'form-block-heading': 'form-block-heading',
// 			},
// 			variant: {
// 				p: 'text-description',
// 				h1: 'main-heading',
// 				h2: '',
// 				h3: 'text-2xl font-bold leading-tight',
// 				h4: 'text-xl font-bold leading-tight',
// 				h5: 'text-lg font-bold leading-tight',
// 				h6: 'text-base font-bold leading-tight',
// 				span: 'text-base inline',
// 			},
// 		},
// 		defaultVariants: {
// 			variant: 'p',
// 		},
// 	}
// )

// export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
// 	asChild?: boolean
// }

// const Typography = React.forwardRef<HTMLElement, TypographyProps>(({ className, variant, type, asChild = false, ...props }, ref) => {
// 	const Comp = asChild ? Slot : variant || 'p'
// 	return (
// 		<Comp
// 			className={cn(typographyVariants({ variant, type }), className)}
// 			ref={ref as React.ForwardedRef<HTMLParagraphElement>}
// 			{...props}
// 		/>
// 	)
// })
// Typography.displayName = 'Typography'

// export { Typography, typographyVariants }
// // import * as React from 'react'
// // import { Slot } from '@radix-ui/react-slot'
// // import { cva, type VariantProps } from 'class-variance-authority'
// // import { cn } from '@/shared/utils/cn'

// // const typographyVariants = cva(
// // 	'text-base leading-normal', // базовые стили для всех элементов
// // 	{
// // 		variants: {
// // 			variant: {
// // 				p: 'text-base leading-normal',
// // 				h1: 'text-4xl font-bold leading-tight',
// // 				h2: 'text-3xl font-bold leading-tight',
// // 				h3: 'text-2xl font-bold leading-tight',
// // 				h4: 'text-xl font-bold leading-tight',
// // 				h5: 'text-lg font-bold leading-tight',
// // 				h6: 'text-base font-bold leading-tight',
// // 				span: 'text-base inline',
// // 			},
// // 		},
// // 		defaultVariants: {
// // 			variant: 'p',
// // 		},
// // 	}
// // )

// // export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
// // 	asChild?: boolean
// // }

// // const Typography = React.forwardRef<HTMLElement, TypographyProps>(({ className, variant, asChild = false, ...props }, ref) => {
// // 	const Comp = asChild ? Slot : variant || 'p'
// // 	return (
// // 		<Comp
// // 			className={cn(typographyVariants({ variant, className }))}
// // 			ref={ref as React.Ref<HTMLElement>}
// // 			{...props}
// // 		/>
// // 	)
// // })
// // Typography.displayName = 'Typography'

// // export { Typography, typographyVariants }

'use client'
// import MultiSelectFormField from '@/shared/components/MultiSelect'

// import { SideBar } from '@/shared/components/SideBar'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { FormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/shared/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import MultiSelectFormField from '@/shared/components/MultiSelect'
import { Icons } from '@/shared/components/icons'
import { Input } from '@/shared/ui/input'

// const MultiSelectFormField = dynamic(() => import('@/shared/components/MultiSelect'), {
// 	// loading: () => <p>Loading...</p>,
// 	ssr: false,
// })
// const MultiSelectFormField = import('@/shared/components/MultiSelect', {s})
const frameworksList = [
	{
		value: 'next.js',
		label: 'Next.js',
		icon: Icons.dog,
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
		icon: Icons.cat,
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
		icon: Icons.turtle,
	},
	{
		value: 'remix',
		label: 'Remix',
		icon: Icons.rabbit,
	},
	{
		value: 'astro',
		label: 'Astro',
		icon: Icons.fish,
	},
]

const FormSchema = z.object({
	title: z.string().min(1, 'Title is required'), // Добавляем новое поле 'title', которое должно быть не пустым
	frameworks: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
	frameworks2: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
})

export function MultiSelectWithOptions() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			frameworks: ['next.js', 'nuxt.js', 'astro'],
			frameworks2: ['next.js', 'nuxt.js', 'astro'],
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log('You have selected following frameworks:', data.frameworks.join(', '))
		console.log('You have selected following frameworks:', data.frameworks2.join(', '))
		console.log('You have selected following title:', data.title)
		// alert(`You have selected following frameworks: ${data.frameworks.join(', ')}.`)
		// toast(`You have selected following frameworks: ${data.frameworks.join(', ')}.`)
	}

	return (
		<main
		// className='flex flex-col items-center justify-start min-h-screen p-3 space-y-3'
		// className='flex flex-col items-center justify-start min-h-screen p-3 space-y-3'
		>
			<Card className='p-5 '>
				{/* <Card className='w-full max-w-2xl p-5'> */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						// className='flex flex-wrap w-full gap-4 border-red-800 border'
						className='flex w-full  gap-4 border-red-800 border'
						// className='flex w-fit  gap-4 border-red-800 border'
						// className='flex flex-wrap w-full gap-4'
					>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem className='border-blue-500 border'>
									<FormControl>
										<Input
											{...field}
											placeholder='Enter title'
											required // делает поле обязательным для ввода
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='frameworks'
							render={({ field }) => (
								<FormItem className='border-blue-500 border'>
									{/* <FormLabel>Frameworks</FormLabel> */}
									<FormControl>
										<MultiSelectFormField
											options={frameworksList}
											defaultValue={field.value}
											onValueChange={field.onChange}
											placeholder='Select options'
											variant='inverted'
											animation={0}
										/>
									</FormControl>
									{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='frameworks2'
							render={({ field }) => (
								<FormItem className='border-blue-500 border'>
									{/* <FormLabel>Frameworks 2</FormLabel> */}
									<FormControl>
										<MultiSelectFormField
											options={frameworksList}
											defaultValue={field.value}
											onValueChange={field.onChange}
											placeholder='Select options'
											variant='inverted'
											animation={0}
										/>
									</FormControl>
									{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							variant='outline'
							type='submit'
						>
							Submit
						</Button>
					</form>
				</Form>
			</Card>
		</main>
	)
}

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
import { Badge } from '@/shared/ui/badge'

// const MultiSelectFormField = dynamic(() => import('@/shared/components/MultiSelect'), {
// const MultiSelectFormField = dynamic(() => import('@/shared/components/MultiSelect'), {
// 	// loading: () => <p>Loading...</p>,
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
	{
		value: 'astro2',
		label: 'Astro2',
		icon: Icons.fish,
	},
	{
		value: 'astro3',
		label: 'Astro3',
		icon: Icons.fish,
	},
]
const allFrameworks = new Array(4).fill(null).map((_, i) => [...frameworksList])

const FormSchema = z.object({
	title: z.string().min(1, 'Title is required'), // Добавляем новое поле 'title', которое должно быть не пустым
	frameworks0: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
	frameworks1: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
	frameworks2: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
	frameworks3: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
	storyImage: z.union([
		z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
			message: 'File size must be 10MB or less',
		}),
		z.undefined(),
	]),
})
type FormData = z.infer<typeof FormSchema>

type FormFieldNames = keyof FormData
type PreFrameworks = {
	[K in keyof FormData]: K extends `frameworks${infer N}` ? K : never
}[keyof FormData]
type Frameworks = Exclude<PreFrameworks, undefined>

export function ProjectForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			frameworks0: ['next.js', 'nuxt.js', 'astro'],
			frameworks1: ['next.js', 'nuxt.js', 'astro'],
			frameworks2: ['next.js', 'nuxt.js', 'astro'],
			frameworks3: ['next.js', 'nuxt.js', 'astro'],
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log('You have selected following frameworks:', data.frameworks0.join(', '))
		console.log('You have selected following frameworks:', data.frameworks1.join(', '))
		console.log('You have selected following frameworks:', data.frameworks2.join(', '))
		console.log('You have selected following frameworks:', data.frameworks3.join(', '))
		console.log('You have selected following title:', data.title)
	}

	return (
		<main
		>
			<div
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
					
						className='flex flex-col w-full gap-4'
					>
						<div
						>
							<FormField
								control={form.control}
								name='title'
								render={({ field }) => (
									<FormItem className='border border-blue-500'>
										<FormLabel>Project title</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder='Enter title'
												required 
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div
						>
							<div
								className='flex flex-wrap min-w-full gap-4 border-pink-600 '
							>
								{allFrameworks.map((frameworks, i) => (
									<div
										className=' flex-grow basis-[276px] min-w-[276px] w-full'
										key={i}
									>
										<FormField
											control={form.control}
											name={`frameworks${i}` as Frameworks}
											render={({ field }) => (
												<FormItem className='border border-blue-500'>
													<FormLabel>Frameworks {i}</FormLabel>
													<FormControl>
														<MultiSelectFormField
															options={frameworks}
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
									</div>
								))}

								<div
									className='flex flex-wrap min-w-full gap-4 border-pink-600 '
								>
									<div className='flex-grow '>
										<FormField
											control={form.control}
											name='storyImage'
											render={({ field }) => (
												<FormItem className='border border-blue-500'>
													<FormLabel>Story image</FormLabel>
													<FormControl>
														<label
															htmlFor='story-image'
															className='block w-full h-32 text-center border-2 border-gray-300 border-dashed rounded-md cursor-pointer pt-7'
														>
															<input
																id='story-image'
																type='file'
																style={{ display: 'none' }} 
																accept='image/*' 
																onChange={(e) => field.onChange(e.target.files[0])} // Обновляет форму при выборе файла
															/>
															<span className='text-gray-500'>Click to add an image</span>
															<span className='text-xs text-gray-500'>(Supported formats: jpg, png)</span>
														</label>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className='flex-grow '>
										<FormField
											control={form.control}
											name='storyImage'
											render={({ field }) => (
												<FormItem className='border border-blue-500'>
													<FormLabel>Story image</FormLabel>
													<FormControl>
														<label
															htmlFor='story-image'
															className='block w-full h-32 text-center border-2 border-gray-300 border-dashed rounded-md cursor-pointer pt-7'
														>
															<input
																id='story-image'
																type='file'
																style={{ display: 'none' }} 
																accept='image/*'
																onChange={(e) => field.onChange(e.target.files[0])} // Обновляет форму при выборе файла
															/>
															<span className='text-gray-500'>Click to add an image</span>
															<span className='text-xs text-gray-500'>(Supported formats: jpg, png)</span>
														</label>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
							</div>
						</div>

						<Button
							variant='outline'
							type='submit'
							className='absolute top-0 right-0'
						>
							Submit
						</Button>
					</form>
				</Form>
			</div>
		</main>
	)
}

// <div
// 									className=' basis-[276px] min-w-[276px] w-full'
// 									// className=' basis-[276px] min-w-[276px] border border-orange-400 w-full'
// 								>
// 									<FormField
// 										control={form.control}
// 										name='frameworks'
// 										render={({ field }) => (
// 											<FormItem className='border border-blue-500'>
// 												{/* <FormLabel>Frameworks</FormLabel> */}
// 												<FormControl>
// 													<MultiSelectFormField
// 														options={frameworksList}
// 														defaultValue={field.value}
// 														onValueChange={field.onChange}
// 														placeholder='Select options'
// 														variant='inverted'
// 														animation={0}
// 													/>
// 												</FormControl>
// 												{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								<div className=' basis-[276px] min-w-[276px] border border-orange-400 w-full'>
// 									<FormField
// 										control={form.control}
// 										name='frameworks2'
// 										render={({ field }) => (
// 											<FormItem className='border border-blue-500'>
// 												{/* <FormLabel>Frameworks 2</FormLabel> */}
// 												<FormControl>
// 													<MultiSelectFormField
// 														options={frameworksList}
// 														defaultValue={field.value}
// 														onValueChange={field.onChange}
// 														placeholder='Select options'
// 														variant='inverted'
// 														animation={0}
// 													/>
// 												</FormControl>
// 												{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								<div className=' basis-[276px] min-w-[276px] border border-orange-400 w-full'>
// 									<FormField
// 										control={form.control}
// 										name='frameworks2'
// 										render={({ field }) => (
// 											<FormItem className='border border-blue-500'>
// 												{/* <FormLabel>Frameworks 2</FormLabel> */}
// 												<FormControl>
// 													<MultiSelectFormField
// 														options={frameworksList}
// 														defaultValue={field.value}
// 														onValueChange={field.onChange}
// 														placeholder='Select options'
// 														variant='inverted'
// 														animation={0}
// 													/>
// 												</FormControl>
// 												{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								<div className=' basis-[276px] min-w-[276px] border border-orange-400 w-full'>
// 									<FormField
// 										control={form.control}
// 										name='frameworks2'
// 										render={({ field }) => (
// 											<FormItem className='border border-blue-500'>
// 												{/* <FormLabel>Frameworks 2</FormLabel> */}
// 												<FormControl>
// 													<MultiSelectFormField
// 														options={frameworksList}
// 														defaultValue={field.value}
// 														onValueChange={field.onChange}
// 														placeholder='Select options'
// 														variant='inverted'
// 														animation={0}
// 													/>
// 												</FormControl>
// 												{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>

// <FormField
// 							control={form.control}
// 							name='frameworks'
// 							render={({ field }) => (
// 								<FormItem className='border border-blue-500'>
// 									{/* <FormLabel>Frameworks</FormLabel> */}
// 									<FormControl>
// 										<MultiSelectFormField
// 											options={frameworksList}
// 											defaultValue={field.value}
// 											onValueChange={field.onChange}
// 											placeholder='Select options'
// 											variant='inverted'
// 											animation={0}
// 										/>
// 									</FormControl>
// 									{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>
// 						<FormField
// 							control={form.control}
// 							name='frameworks2'
// 							render={({ field }) => (
// 								<FormItem className='border border-blue-500'>
// 									{/* <FormLabel>Frameworks 2</FormLabel> */}
// 									<FormControl>
// 										<MultiSelectFormField
// 											options={frameworksList}
// 											defaultValue={field.value}
// 											onValueChange={field.onChange}
// 											placeholder='Select options'
// 											variant='inverted'
// 											animation={0}
// 										/>
// 									</FormControl>
// 									{/* <FormDescription>Choose the frameworks you are interested in.</FormDescription> */}
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

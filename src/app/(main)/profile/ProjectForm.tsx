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
import { Textarea } from '@/shared/ui/textarea'
import TextareaWithCounter from '@/shared/ui/textAreaWithCounter'
import { useFormState, useFormStatus } from 'react-dom'
import { sleep } from '@/shared/utils/sleep'
import { submitForm } from './submitForm'
import { ProjectFormSchemaFront } from './ProjectZod'

// const MultiSelectFormField = dynamic(() => import('@/shared/components/MultiSelect'), {
// 	// loading: () => <p>Loading...</p>,
// 	ssr: false,
// })
// const MultiSelectFormField = import('@/shared/components/MultiSelect', {s})
const IconComponent = Icons.turtle
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

// export const ProjectFormSchemaFront = z.object({
// 	portfolioItemName: z.string().min(1, 'Portfolio item name is required'), // Добавляем новое поле 'title', которое должно быть не пустым
// 	// frameworks0: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
// 	// frameworks1: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
// 	// frameworks2: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
// 	// frameworks3: z.array(z.string().min(1)).min(1).nonempty('Please select at least one framework.'),
// 	storyImage: z.union([
// 		z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
// 			message: 'File size must be 10MB or less',
// 		}),
// 		z.null(),
// 	]),
// 	title: z.union([z.string(), z.undefined()]),
// 	problem: z.union([z.string(), z.undefined()]),
// 	// title: z.string().min(1, 'Title is required'),
// 	// problem: z.string().max(7000, 'Problem must be less than 7000 characters'),
// })
export type ProjectFormData = z.infer<typeof ProjectFormSchemaFront>
export const formFields = Object.keys(ProjectFormSchemaFront.shape) as Array<keyof typeof ProjectFormSchemaFront.shape>
// type FormFieldNames = keyof FormData
type PreFrameworks = {
	[K in keyof ProjectFormData]: K extends `frameworks${infer N}` ? K : never
}[keyof ProjectFormData]
type Frameworks = Exclude<PreFrameworks, undefined>

// storyImage: z
// 	.instanceof(File)
// 	.optional()
// 	.refine((file) => file?.size <= 10 * 1024 * 1024, {
// 		message: 'File size must be 10MB or less',
// 	}),

const SubmitButton = () => {
	const { pending } = useFormStatus()

	return (
		<Button
			variant='outline'
			type='submit'
			className='absolute top-0 right-0'
			aria-disabled={pending}
		>
			Submit
		</Button>
	)
}

export function ProjectForm() {
	const form = useForm<ProjectFormData>({
		resolver: zodResolver(ProjectFormSchemaFront),
		defaultValues: {
			portfolioItemName: 'test',
			frameworks0: ['next.js', 'nuxt.js', 'astro'],
			frameworks1: ['next.js', 'nuxt.js', 'astro'],
			frameworks2: ['next.js', 'nuxt.js', 'astro'],
			frameworks3: ['next.js', 'nuxt.js', 'astro'],
			title: 'some title',
			problem: 'some problem',
		},
	})
	const [state, formAction] = useFormState(submitForm, {})

	async function onSubmit(data: z.infer<typeof ProjectFormSchemaFront>) {
        const formData = new FormData()
				// Перебор всех полей формы
				for (const key of Object.keys(data)) {
					const value = data[key]
					console.log('key', key, 'value', value)
					
					if(!value) continue
					if (value instanceof FileList) {
						// Добавляем файлы, если это input type="file"
						Array.from(value).forEach((file) => formData.append(key, file))
					}  else {
						formData.append(key, value)
					}
				}
				// Здесь вызовите вашу функцию отправки данных на сервер
				 formAction(formData)
		// alert(`You have selected following frameworks: ${data.frameworks.join(', ')}.`)
		// toast(`You have selected following frameworks: ${data.frameworks.join(', ')}.`)
	}

	return (
		<main
		// className='flex flex-col items-center justify-start min-h-screen p-3 space-y-3'
		// className='flex flex-col items-center justify-start min-h-screen p-3 space-y-3'
		>
			<div
			// className='p-5 '
			>
				{/* <Card className='w-full max-w-2xl p-5'> */}
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						// action={formAction}
						// action={form.handleSubmit(onSubmit)}
						// className='flex flex-wrap w-full gap-4 border border-red-800'
						// className='flex w-full gap-4 border-8 border-red-800'
						// className='flex gap-4 border border-red-800 w-fit'
						// className='flex flex-wrap w-full gap-4'
						className='flex flex-col w-full gap-4'
					>
						<FormField
							control={form.control}
							name='portfolioItemName'
							render={({ field }) => (
								<FormItem className=''>
									{/* <FormItem className='border border-blue-500'> */}
									<FormLabel>Project title</FormLabel>
									<FormControl>
										<Input
											// title='Project Title'
											{...field}
											placeholder='Enter title'
											required // делает поле обязательным для ввода
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex flex-wrap min-w-full gap-4'>
							<div
								// className='flex min-w-full gap-4 p-8 border-2 border-green-400'
								className='flex-grow min-w-[276px]'
								// className='flex-grow min-w-[276px]'
							>
								<FormField
									control={form.control}
									name='portfolioItemName'
									render={({ field }) => (
										<FormItem className=''>
											{/* <FormItem className='border border-blue-500'> */}
											<FormLabel>Project title</FormLabel>
											<FormControl>
												<Input
													// title='Project Title'
													{...field}
													placeholder='Enter title'
													required // делает поле обязательным для ввода
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div
								// className='flex min-w-full gap-4 p-8 border-2 border-green-400'
								className='flex-grow min-w-[276px]'
								// className='flex-grow min-w-[276px]'
							>
								<FormField
									control={form.control}
									name='portfolioItemName'
									render={({ field }) => (
										<FormItem className=''>
											{/* <FormItem className='border border-blue-500'> */}
											<FormLabel>Project title</FormLabel>
											<FormControl>
												<Input
													// title='Project Title'
													{...field}
													placeholder='Enter title'
													required // делает поле обязательным для ввода
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div
						// className='flex min-w-full gap-4 p-8 border-2 border-green-400'
						>
							<div
								className='flex flex-wrap min-w-full gap-4 border-pink-600 '
								// className='flex flex-wrap min-w-full gap-4 p-8 border-2 border-pink-600'
							>
								{allFrameworks.map((frameworks, i) => (
									<div
										className=' flex-grow basis-[276px] min-w-[276px] w-full'
										key={i}
										// className=' basis-[276px] min-w-[276px] border border-orange-400 w-full'
									>
										<FormField
											control={form.control}
											name={`frameworks${i}` as Frameworks}
											render={({ field }) => (
												<FormItem>
													{/* <FormItem className='border border-blue-500'> */}
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
									// className='flex flex-wrap min-w-full gap-4 p-8 border-2 border-pink-600'
								>
									<div className='flex-grow '>
										<FormField
											control={form.control}
											name='storyImage'
											render={({ field }) => (
												<FormItem className='border min-h-[108px] min-w-[50%] border-blue-500'>
													<FormLabel>Story image</FormLabel>
													<FormControl>
														<label
															htmlFor='story-image'
															className='flex flex-col items-center justify-center min-h-[108px] text-center border-2  border-gray-300 border-dashed rounded-md cursor-pointer'
															// className='block w-full h-32 text-center border-2 border-gray-300 border-dashed rounded-md cursor-pointer pt-7'
														>
															<Input
																id='story-image'
																type='file'
																style={{ display: 'none' }} // Скрывает стандартный input, но оставляет label кликабельным
																accept='image/*' // Принимает только изображения
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
									{/* <div className='flex-grow '>
										<FormField
											control={form.control}
											name='storyImage'
											render={({ field }) => (
												<FormItem className='border min-h-[108px] min-w-[50%] border-blue-500'>
													<FormLabel>Story image</FormLabel>
													<FormControl>
														<div className='flex flex-col items-center justify-center min-h-[108px]'>
															<Input
																id='story-image'
																type='file'
																style={{ display: 'none' }} // Скрывает стандартный input, но оставляет label кликабельным
																accept='image/*' // Принимает только изображения
																onChange={(e) => field.onChange(e.target.files[0])} // Обновляет форму при выборе файла
															/>
															<span className='text-gray-500'>Click to add an image</span>
															<span className='text-xs text-gray-500'>(Supported formats: jpg, png)</span>
														</div>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div> */}
								</div>
								<div
									className='flex flex-wrap min-w-full gap-4 border-pink-600 '
									// className='flex flex-wrap min-w-full gap-4 p-8 border-2 border-pink-600'
								>
									<div className='flex-grow '>
										<FormField
											control={form.control}
											name='title'
											render={({ field }) => (
												<FormItem className='border border-blue-500'>
													<FormLabel>
														Title <IconComponent className='w-4 h-4 mr-2' />
													</FormLabel>
													<FormControl>
														<TextareaWithCounter
															{...field}
															placeholder='Enter title'
															// required
															maxLength={100}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className='flex-grow '>
										<FormField
											control={form.control}
											name='problem'
											render={({ field }) => (
												<FormItem className='border border-blue-500'>
													<FormLabel>Problem</FormLabel>
													<FormControl>
														<Textarea
															{...field}
															placeholder='Describe the problem'
															maxLength={7000}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
							</div>
						</div>
						<SubmitButton />
						{/* <Button
							variant='outline'
							type='submit'
							className='absolute top-0 right-0'
						>
							Submit
						</Button> */}
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

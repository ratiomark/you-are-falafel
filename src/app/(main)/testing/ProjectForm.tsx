'use client'

import { Button } from '@/shared/ui/button'
import { FormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/shared/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import MultiSelectFormField from '@/shared/components/MultiSelect'
import { Icons } from '@/shared/components/icons'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { useFormState, useFormStatus } from 'react-dom'
import { useActionState } from 'react'
import { submitForm } from './submitProjectForm'
import { ProjectFormSchemaFront } from './ProjectZod'
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
]

export type ProjectFormData = z.infer<typeof ProjectFormSchemaFront>
export const formFields = Object.keys(ProjectFormSchemaFront.shape) as Array<keyof typeof ProjectFormSchemaFront.shape>

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
const defaultValues = {
	portfolioItemName: 'test',
	frameworks: ['next.js', 'nuxt.js', 'astro'],
	problem: 'some problem',
}
export function ProjectForm() {
	const form = useForm<ProjectFormData>({
		resolver: zodResolver(ProjectFormSchemaFront),
		defaultValues,
	})

	const [state, formAction] = useFormState(submitForm, defaultValues)

	return (
		<main>
			<div>
				<Form {...form}>
					<form
						// action={formAction.bind(null, form.getValues())}
						onSubmit={(e) => {
							e.preventDefault()
							const form = e.target as HTMLFormElement
							const formData = new FormData(form)
							submitForm(formData).then(() => {
								form.reset()
							})
						}}
						className='flex flex-col w-full gap-4'
					>
						<FormField
							control={form.control}
							name='portfolioItemName'
							render={({ field }) => (
								<FormItem className=''>
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

						<div>
							<div className='flex flex-wrap min-w-full gap-4 border-pink-600 '>
								<div className=' flex-grow basis-[276px] min-w-[276px] w-full'>
									<FormField
										control={form.control}
										name={'frameworks'}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Frameworks</FormLabel>
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
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className='flex flex-wrap min-w-full gap-4 border-pink-600 '>
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
														>
															<Input
																id='story-image'
																type='file'
																style={{ display: 'none' }}
																accept='image/*'
																onChange={(e) => field.onChange(e.target.files?.[0])}
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
								<div className='flex flex-wrap min-w-full gap-4 border-pink-600 '>
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
					</form>
				</Form>
			</div>
		</main>
	)
}

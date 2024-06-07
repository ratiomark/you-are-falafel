import { z } from 'zod'

export const ProjectFormSchema = z.object({
	portfolioItemName: z.string().min(1, 'Portfolio item name is required'), // Добавляем новое поле 'title', которое должно быть не пустым
	frameworks0: z.string().min(1),
	frameworks1: z.string().min(1),
	frameworks2: z.string().min(1),
	frameworks3: z.string().min(1),
	storyImage: z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
		message: 'File size must be 10MB or less',
	}).optional(),
	// storyImage: z
	// 	.union([
	// 		z.instanceof(File).refine((file) => file.size <= 10 * 1024 * 1024, {
	// 			message: 'File size must be 10MB or less',
	// 		}),
	// 		z.undefined(),
	// 	]),
	title: z.union([z.string().min(1), z.undefined()]),
	problem: z.union([z.string().min(1), z.undefined()]),
})
export const ProjectFormSchemaFront = z.object({
	portfolioItemName: z.string().min(1, 'Portfolio item name is required'), // Добавляем новое поле 'title', которое должно быть не пустым
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
	title: z.union([z.string().min(1), z.undefined()]),
	problem: z.union([z.string().min(1), z.undefined()]),
})
export type ProjectFormKyeType = Array<keyof typeof ProjectFormSchema.shape>

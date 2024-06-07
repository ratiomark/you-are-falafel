'use server'

import { sleep } from '@/shared/utils/sleep'
// export async function submitForm(prev: any, formData: {[key: string]: any}) {
export async function submitForm(prev: any, formData: FormData) {
	console.log(formData)
	const newFormData = new FormData()
	for (const [key, value] of Object.entries(formData)) {
		console.log(key, value)
		newFormData.append(key, value)
	}
	console.log(newFormData)
	await sleep(1)
	return {}
}

// 'use server'

// import { z } from 'zod'
// import { ProjectFormKyeType, ProjectFormSchema } from '@/app/(main)/profile/ProjectZod'

// import { sleep } from '@/shared/utils/sleep'
// export async function submitForm(prev: any, formData: FormData) {
// 	// Получаем массив ключей схемы
// 	console.log('formData')
// 	console.log(formData)
// 	const formFields = Object.keys(ProjectFormSchema.shape) as ProjectFormKyeType
// 	console.log('formFields')
// 	console.log(formFields)
// 	// Преобразуем FormData в объект
// 	const formDataObj: Record<string, any> = {}
// 	formFields.forEach((key) => {
// 		const value = formData.get(key)
// 		console.log('value', value)
// 		if (value instanceof File && value.size === 0) {
// 			formDataObj[key] = undefined // Обработка пустых файлов
// 		} else {
// 			formDataObj[key] = value
// 		}
// 	})

// 	console.log('start sleep')
// 	await sleep(1)
// 	console.log('parse form data')
// 	console.log(formDataObj)
// 	// const dataEntries = Object.fromEntries(formData)
// 	// console.log('dataEntries')
// 	// console.log(dataEntries)
// 	// Парсим данные формы используя схему
// 	// console.log('dataParseFromEntries')
// 	// const dataParseFromEntries = ProjectFormSchema.parse(dataEntries)
// 	const data = ProjectFormSchema.parse(formDataObj)
// 	console.log(data)

// 	return null
// }
// export async function submitForm(prev: any, formData: FormData) {
// 	const schema = z.object({
// 		portfolioItemName: z.string().min(1),
// 	})
// 	console.log('start sleep')
// 	await sleep(1)
// 	console.log('parse form data')
// 	const d2 = formData.getAll('portfolioItemName')
// 	console.log(d2)
// 	console.log(formData)
// 	const data = schema.parse({ test: formData.getAll('portfolioItemName') })
// 	// const data = schema.parse({ portfolioItemName: formData.get('portfolioItemName') })
// 	console.log(data)
// 	return null
// }

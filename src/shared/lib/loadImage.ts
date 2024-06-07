export const loadImage = async (files: FileList | null) => {
	if (files === null) return

	const file = files[0]
	const formData = new FormData()
	formData.append('file', file)
	formData.append('upload_preset', 'test_upload_present') // имя предустановки
	formData.append('fetch_format', 'auto') // Добавление автоматического определения формата
	formData.append('quality', 'auto') // Добавление автоматической оптимизации качества
	try {
		const response = await fetch('https://api.cloudinary.com/v1_1/dntzjcvfh/image/upload', {
			method: 'POST',
			body: formData,
		})
		const data = await response.json()
		if (!data.secure_url) {
			throw new Error('Image upload failed')
		}
		// Формирование URL с параметрами автоматической оптимизации
		const splitUrl = data.secure_url.split('/upload/')
		const optimizedUrl = `${splitUrl[0]}/upload/f_auto,q_auto/${splitUrl[1]}`
		console.log(optimizedUrl)
		return optimizedUrl
	} catch (error) {
		if (error instanceof Error) {
			return error.message
		} else {
			return 'An error occurred while uploading the image'
		}
	}
}

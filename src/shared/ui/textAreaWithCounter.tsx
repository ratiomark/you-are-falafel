import * as React from 'react'
import { Textarea, TextareaProps } from '@/shared/ui/textarea'

interface TextareaWithCounterProps extends TextareaProps {
	maxLength: number
}

const TextareaWithCounter = React.forwardRef<HTMLTextAreaElement, TextareaWithCounterProps>(({ maxLength, onChange, ...props }, ref) => {
	const [text, setText] = React.useState('')

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (event.target.value.length <= maxLength) {
			setText(event.target.value)
			if (onChange) {
				onChange(event)
			}
		}
	}

	return (
		<div>
			<Textarea
				{...props}
				ref={ref}
				value={text}
				onChange={handleChange}
				maxLength={maxLength} // HTML атрибут maxLength обеспечивает дополнительную защиту
			/>
			<div>{maxLength - text.length} characters left</div>
		</div>
	)
})

TextareaWithCounter.displayName = 'TextareaWithCounter'

export default TextareaWithCounter
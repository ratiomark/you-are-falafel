'use client'
// import { SideBar } from '@/shared/components/SideBar'
import { Button } from '@/shared/ui/button'

export const CustomButton = () => {
	return (
		<>
			<Button onClick={() => alert('Button')}>Click me</Button>
			{/* <SideBar /> */}
		</>
	)
}

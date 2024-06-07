import { useFormStatus } from 'react-dom'
import { Button } from '@/shared/ui/button'

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button
      variant="outline"
      type="submit"
      className="absolute right-4 top-4"
      aria-disabled={pending}
    >
      Save
    </Button>
  )
}

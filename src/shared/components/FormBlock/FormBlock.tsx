import { Typography } from '@/shared/ui/typography'
import { cn } from '@/shared/utils/cn'

type FormBlockProps = {
  children: React.ReactNode
  title: string
  childrenClassName?: string
  columns?: number
}
export const FormBlock = ({ children, title, columns = 2, childrenClassName }: FormBlockProps) => (
  <div>
    <Typography
      className="pb-7 "
      type="heading-form-block"
      variant="h1"
    >
      {title}
    </Typography>
    {/* {children} */}
    <div className={cn(`grid grid-cols-2 gap-4 md:grid-cols-1`, childrenClassName)}>{children}</div>
  </div>
)

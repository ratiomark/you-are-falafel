import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowDown } from '@/shared/components/Icons/ArrowDown'
import { CheckIcon, ChevronDown, Icon, WandSparkles, XCircle, XIcon } from 'lucide-react'
import * as React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '@/shared/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandInputSearch, CommandItem, CommandList, CommandSeparator } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator'
import { cn } from '../utils/cn'
import { Icons } from '@/shared/components/icons'
import arrow from 'public/arrow=20.svg'
import Image from 'next/image'
const multiSelectVariants = cva('m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300', {
  variants: {
    variant: {
      default: 'border-input drop-shadow-md text-primary bg-card hover:bg-card/80',
      // default: 'border-foreground/10 drop-shadow-md text-primary bg-card hover:bg-card/80',
      secondary: 'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      inverted: 'inverted',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface MultiSelectFormFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof multiSelectVariants> {
  asChild?: boolean
  options: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  defaultValue?: string[]
  disabled?: boolean
  placeholder: string
  className?: string
  animation?: number
  onValueChange: (value: string[]) => void
}

const MultiSelectFormField = React.forwardRef<HTMLButtonElement, MultiSelectFormFieldProps>(
  ({ className, variant, asChild = false, options, defaultValue, onValueChange, disabled, placeholder, animation = 0, ...props }, ref) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue || [])
    const selectedValuesSet = React.useRef(new Set(selectedValues))
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
    const [isAnimating, setIsAnimating] = React.useState(animation > 0)

    React.useEffect(() => {
      setSelectedValues(defaultValue || [])
      selectedValuesSet.current = new Set(defaultValue)
    }, [defaultValue])

    const handleInputKeyDown = (event: any) => {
      if (event.key === 'Enter') {
        setIsPopoverOpen(true)
      } else if (event.key === 'Backspace' && !event.target.value) {
        selectedValues.pop()
        setSelectedValues([...selectedValues])
        selectedValuesSet.current.delete(selectedValues[selectedValues.length - 1])
        onValueChange([...selectedValues])
      }
    }

    const toggleOption = (value: string) => {
      if (selectedValuesSet.current.has(value)) {
        selectedValuesSet.current.delete(value)
        setSelectedValues(selectedValues.filter(v => v !== value))
      } else {
        selectedValuesSet.current.add(value)
        setSelectedValues([...selectedValues, value])
      }
      onValueChange(Array.from(selectedValuesSet.current))
    }

    return (
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <PopoverTrigger
          className="min-w-[var(--radix-popper-anchor-width)]"
          asChild
        >
          <Button
            ref={ref}
            // hover:bg-card
            className="leading-input text-input flex h-auto w-full flex-1 items-center justify-between rounded-md border border-input bg-inherit p-1 px-4 py-3 font-light  focus-visible:ring-ring"
            {...props}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            // className='flex-1 h-auto min-w-full p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
            // className='flex items-center min-w-[276px] justify-between w-full  h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
            // className='flex items-center justify-between flex-1 w-full h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
          >
            <div className="flex w-full items-center justify-between gap-1">
              {selectedValues.length > 0 ? (
                <>
                  <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {selectedValues.map((value, index) => {
                      const option = options.find(o => o.value === value)
                      return (
                        <span
                          key={value}
                          className="text-input"
                        >
                          {option?.label}
                          {'  '}
                          {/* {option?.label},{' '} */}
                        </span>
                      )
                    })}
                  </div>
                  {/* <div className='flex items-center justify-between'>
										<XIcon
											className='h-3 mx-2 cursor-pointer text-muted-foreground'
											onClick={(event) => {
												setSelectedValues([])
												selectedValuesSet.current.clear()
												onValueChange([])
												event.stopPropagation()
											}}
										/>
									</div> */}
                </>
              ) : (
                <span className=" text-input text-muted-foreground">{placeholder}</span>
              )}
              <ArrowDown isOpen={isPopoverOpen} />
              {/* <Image
                src={arrow}
                alt="Chevron Down"
                // width={24}
                // height={24}
                className={cn(`cursor-pointer `, isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0')}
                // className={`cursor-pointer ${isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0'}`}
              /> */}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="custom-scrollbar min-w-[var(--radix-popper-anchor-width)] p-0"
          // className='min-w-[var(--radix-popper-anchor-width)] p-0 drop-shadow-sm'
          // className='w-[200px] p-0 drop-shadow-sm'
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command
            // className='bg-red-500 '
            className="w-full"
          >
            {options.length > 10 && (
              <CommandInput
                placeholder="Search..."
                onKeyDown={handleInputKeyDown}
              />
            )}
            <CommandList className="custom-scrollbar">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map(option => {
                  const isSelected = selectedValuesSet.current.has(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => toggleOption(option.value)}
                      style={{
                        pointerEvents: 'auto',
                        opacity: 1,
                      }}
                      className={cn('cursor-pointer', isSelected ? '' : '')}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                          isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible',
                        )}
                      >
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      {/* {option.icon && <option.icon className='w-4 h-4 mr-2 text-muted-foreground' />} */}
                      <span>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandGroup>
              <div className="flex items-center justify-between">
                {selectedValues.length > 0 && (
                  <>
                    <CommandItem
                      onSelect={() => {
                        setSelectedValues([])
                        selectedValuesSet.current.clear()
                        onValueChange([])
                      }}
                      style={{
                        pointerEvents: 'auto',
                        opacity: 1,
                      }}
                      className="flex-1 cursor-pointer justify-center"
                    >
                      Clear
                    </CommandItem>
                    <Separator
                      orientation="vertical"
                      className="flex h-full min-h-6"
                    />
                  </>
                )}
                <CommandSeparator />
                <CommandItem
                  onSelect={() => setIsPopoverOpen(false)}
                  style={{
                    pointerEvents: 'auto',
                    opacity: 1,
                  }}
                  className="flex-1 cursor-pointer justify-center"
                >
                  Close
                </CommandItem>
              </div>
            </CommandGroup>
          </Command>
        </PopoverContent>
        {/* {animation > 0 && selectedValues.length > 0 && (
					<WandSparkles
						className={cn('cursor-pointer my-2 text-foreground bg-background w-3 h-3', isAnimating ? '' : 'text-muted-foreground')}
						onClick={() => setIsAnimating(!isAnimating)}
					/>
				)} */}
      </Popover>
    )
  },
)

MultiSelectFormField.displayName = 'MultiSelectFormField'

export default MultiSelectFormField
// const MultiSelectFormField = React.forwardRef<HTMLButtonElement, MultiSelectFormFieldProps>(
// 	({ className, variant, asChild = false, options, defaultValue, onValueChange, disabled, placeholder, animation = 0, ...props }, ref) => {
// 		const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue || [])
// 		const selectedValuesSet = React.useRef(new Set(selectedValues))
// 		const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
// 		const [isAnimating, setIsAnimating] = React.useState(animation > 0)

// 		React.useEffect(() => {
// 			setSelectedValues(defaultValue || [])
// 			selectedValuesSet.current = new Set(defaultValue)
// 		}, [defaultValue])

// 		const handleInputKeyDown = (event: any) => {
// 			if (event.key === 'Enter') {
// 				setIsPopoverOpen(true)
// 			} else if (event.key === 'Backspace' && !event.target.value) {
// 				selectedValues.pop()
// 				setSelectedValues([...selectedValues])
// 				selectedValuesSet.current.delete(selectedValues[selectedValues.length - 1])
// 				onValueChange([...selectedValues])
// 			}
// 		}

// 		const toggleOption = (value: string) => {
// 			if (selectedValuesSet.current.has(value)) {
// 				selectedValuesSet.current.delete(value)
// 				setSelectedValues(selectedValues.filter((v) => v !== value))
// 			} else {
// 				selectedValuesSet.current.add(value)
// 				setSelectedValues([...selectedValues, value])
// 			}
// 			onValueChange(Array.from(selectedValuesSet.current))
// 		}

// 		return (
// 			<Popover
// 				open={isPopoverOpen}
// 				onOpenChange={setIsPopoverOpen}
// 			>
// 				<PopoverTrigger asChild>
// 					<Button
// 						ref={ref}
// 						{...props}
// 						onClick={() => setIsPopoverOpen(!isPopoverOpen)}
// 						// className='flex-1 h-auto min-w-full p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
// 						// className='flex items-center min-w-[276px] justify-between w-full  h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
// 						className='flex items-center justify-between flex-1 w-full h-auto p-1 px-4 py-3 font-light border rounded-md border-input text-input leading-input bg-inherit hover:bg-card'
// 						// className='flex items-center justify-between flex-1 w-full h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
// 					>
// 						{selectedValues.length > 0 ? (
// 							<div className='flex items-center justify-between flex-grow-0 w-full'>
// 								<div className='flex flex-grow-0 w-full overflow-hidden items-left'>
// 									{selectedValues.map((value, index) => {
// 										const option = options.find((o) => o.value === value)
// 										const IconComponent = option?.icon
// 										return (
// 											<React.Fragment key={value}>
// 												{index > 0 && <span className='mr-1'>,</span>}
// 												<span className='overflow-hidden text-gray-950 whitespace-nowrap text-ellipsis'>{option?.label}</span>
// 											</React.Fragment>
// 										)
// 									})}
// 								</div>
// 								<div className='flex items-center justify-between'>
// 									<XIcon
// 										className='h-3 mx-2 cursor-pointer text-muted-foreground'
// 										onClick={(event) => {
// 											setSelectedValues([])
// 											selectedValuesSet.current.clear()
// 											onValueChange([])
// 											event.stopPropagation()
// 										}}
// 									/>
// 									{/* <ChevronDown className='h-3 mx-2 cursor-pointer text-muted-foreground' /> */}
// 									<Image
// 										src={arrow}
// 										alt='Chevron Down'
// 										// width={24}
// 										// height={24}
// 										className={cn(`cursor-pointer `, isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0')}
// 										// className={`cursor-pointer ${isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0'}`}
// 									/>
// 								</div>
// 							</div>
// 						) : (
// 							<div className='flex items-center justify-between w-full mx-auto'>
// 								<span className='mx-3 text-sm text-muted-foreground'>{placeholder}</span>
// 								{/* <ChevronDown className='h-4 mx-2 cursor-pointer text-muted-foreground' /> */}
// 								<Image
// 									src={arrow}
// 									alt='Chevron Down'
// 									// width={24}
// 									// height={24}
// 									className={cn(`cursor-pointer `, isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0')}
// 									// className={`cursor-pointer ${isPopoverOpen ? 'animate-rotate180' : 'animate-rotate0'}`}
// 								/>
// 							</div>
// 						)}
// 					</Button>
// 				</PopoverTrigger>
// 				<PopoverContent
// 					className='w-full p-0 drop-shadow-sm'
// 					// className='w-[200px] p-0 drop-shadow-sm'
// 					align='start'
// 					onEscapeKeyDown={() => setIsPopoverOpen(false)}
// 				>
// 					<Command
// 						// className='bg-red-500 '
// 						className='w-full '
// 					>
// 						<CommandInput
// 							placeholder='Search...'
// 							onKeyDown={handleInputKeyDown}
// 						/>
// 						<CommandList>
// 							<CommandEmpty>No results found.</CommandEmpty>
// 							<CommandGroup>
// 								{options.map((option) => {
// 									const isSelected = selectedValuesSet.current.has(option.value)
// 									return (
// 										<CommandItem
// 											key={option.value}
// 											onSelect={() => toggleOption(option.value)}
// 											style={{
// 												pointerEvents: 'auto',
// 												opacity: 1,
// 											}}
// 											className='cursor-pointer'
// 										>
// 											<div
// 												className={cn(
// 													'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
// 													isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
// 												)}
// 											>
// 												<CheckIcon className='w-4 h-4' />
// 											</div>
// 											{option.icon && <option.icon className='w-4 h-4 mr-2 text-muted-foreground' />}
// 											<span>{option.label}</span>
// 										</CommandItem>
// 									)
// 								})}
// 							</CommandGroup>
// 							<CommandSeparator />
// 							<CommandGroup>
// 								<div className='flex items-center justify-between'>
// 									{selectedValues.length > 0 && (
// 										<>
// 											<CommandItem
// 												onSelect={() => {
// 													setSelectedValues([])
// 													selectedValuesSet.current.clear()
// 													onValueChange([])
// 												}}
// 												style={{
// 													pointerEvents: 'auto',
// 													opacity: 1,
// 												}}
// 												className='justify-center flex-1 cursor-pointer'
// 											>
// 												Clear
// 											</CommandItem>
// 											<Separator
// 												orientation='vertical'
// 												className='flex h-full min-h-6'
// 											/>
// 										</>
// 									)}
// 									<CommandSeparator />
// 									<CommandItem
// 										onSelect={() => setIsPopoverOpen(false)}
// 										style={{
// 											pointerEvents: 'auto',
// 											opacity: 1,
// 										}}
// 										className='justify-center flex-1 cursor-pointer'
// 									>
// 										Close
// 									</CommandItem>
// 								</div>
// 							</CommandGroup>
// 						</CommandList>
// 					</Command>
// 				</PopoverContent>
// 				{/* {animation > 0 && selectedValues.length > 0 && (
// 					<WandSparkles
// 						className={cn('cursor-pointer my-2 text-foreground bg-background w-3 h-3', isAnimating ? '' : 'text-muted-foreground')}
// 						onClick={() => setIsAnimating(!isAnimating)}
// 					/>
// 				)} */}
// 			</Popover>
// 		)
// 	}
// )

// MultiSelectFormField.displayName = 'MultiSelectFormField'

// export default MultiSelectFormField
// import { cva, type VariantProps } from 'class-variance-authority'
// import { CheckIcon, ChevronDown, WandSparkles, XCircle, XIcon } from 'lucide-react'
// import * as React from 'react'
// import { Badge } from '../ui/badge'
// import { Button } from '../ui/button'
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Separator } from '../ui/separator'
// import { cn } from '../utils/cn'

// const multiSelectVariants = cva('m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300', {
// 	variants: {
// 		variant: {
// 			default: 'border-foreground/10 drop-shadow-md text-foreground bg-card hover:bg-card/80',
// 			secondary: 'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
// 			destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
// 			inverted: 'inverted',
// 		},
// 	},
// 	defaultVariants: {
// 		variant: 'default',
// 	},
// })

// interface MultiSelectFormFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof multiSelectVariants> {
// 	asChild?: boolean
// 	options: {
// 		label: string
// 		value: string
// 		icon?: React.ComponentType<{ className?: string }>
// 	}[]
// 	defaultValue?: string[]
// 	disabled?: boolean
// 	placeholder: string
// 	className?: string
// 	animation?: number
// 	onValueChange: (value: string[]) => void
// }

// const MultiSelectFormField = React.forwardRef<HTMLButtonElement, MultiSelectFormFieldProps>(
// 	({ className, variant, asChild = false, options, defaultValue, onValueChange, disabled, placeholder, animation = 0, ...props }, ref) => {
// 		const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue || [])
// 		const selectedValuesSet = React.useRef(new Set(selectedValues))
// 		const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
// 		const [isAnimating, setIsAnimating] = React.useState(animation > 0)

// 		React.useEffect(() => {
// 			setSelectedValues(defaultValue || [])
// 			selectedValuesSet.current = new Set(defaultValue)
// 		}, [defaultValue])

// 		const handleInputKeyDown = (event: any) => {
// 			if (event.key === 'Enter') {
// 				setIsPopoverOpen(true)
// 			} else if (event.key === 'Backspace' && !event.target.value) {
// 				selectedValues.pop()
// 				setSelectedValues([...selectedValues])
// 				selectedValuesSet.current.delete(selectedValues[selectedValues.length - 1])
// 				onValueChange([...selectedValues])
// 			}
// 		}

// 		const toggleOption = (value: string) => {
// 			if (selectedValuesSet.current.has(value)) {
// 				selectedValuesSet.current.delete(value)
// 				setSelectedValues(selectedValues.filter((v) => v !== value))
// 			} else {
// 				selectedValuesSet.current.add(value)
// 				setSelectedValues([...selectedValues, value])
// 			}
// 			onValueChange(Array.from(selectedValuesSet.current))
// 		}

// 		return (
// 			<Popover
// 				open={isPopoverOpen}
// 				onOpenChange={setIsPopoverOpen}
// 			>
// 				<PopoverTrigger asChild>
// 					<Button
// 						ref={ref}
// 						{...props}
// 						onClick={() => setIsPopoverOpen(!isPopoverOpen)}
// 						className='flex items-center min-w-[276px] justify-between w-full  h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
// 						// className='flex items-center justify-between w-full h-auto p-1 border rounded-md min-h-10 bg-inherit hover:bg-card'
// 					>
// 						{selectedValues.length > 0 ? (
// 							<div className='flex items-center justify-between w-full'>
// 								<div className='flex flex-wrap items-center'>
// 									{selectedValues.map((value) => {
// 										const option = options.find((o) => o.value === value)
// 										const IconComponent = option?.icon
// 										return (
// 											<Badge
// 												key={value}
// 												className={cn(isAnimating ? 'animate-bounce' : '', multiSelectVariants({ variant, className }))}
// 												style={{
// 													animationDuration: `${animation}s`,
// 												}}
// 											>
// 												{/* {IconComponent && <IconComponent className='w-4 h-4 mr-2' />} */}
// 												{option?.label}
// 												{/* {option?.value} */}
// 												<XCircle
// 													className='w-4 h-4 ml-2 cursor-pointer'
// 													onClick={(event) => {
// 														event.stopPropagation()
// 														toggleOption(value)
// 													}}
// 												/>
// 											</Badge>
// 										)
// 									})}
// 								</div>
// 								<div className='flex items-center justify-between'>
// 									<XIcon
// 										className='h-4 mx-2 cursor-pointer text-muted-foreground'
// 										onClick={(event) => {
// 											setSelectedValues([])
// 											selectedValuesSet.current.clear()
// 											onValueChange([])
// 											event.stopPropagation()
// 										}}
// 									/>
// 									<Separator
// 										orientation='vertical'
// 										className='flex h-full min-h-6'
// 									/>
// 									<ChevronDown className='h-4 mx-2 cursor-pointer text-muted-foreground' />
// 								</div>
// 							</div>
// 						) : (
// 							<div className='flex items-center justify-between w-full mx-auto'>
// 								<span className='mx-3 text-sm text-muted-foreground'>{placeholder}</span>
// 								<ChevronDown className='h-4 mx-2 cursor-pointer text-muted-foreground' />
// 							</div>
// 						)}
// 					</Button>
// 				</PopoverTrigger>
// 				<PopoverContent
// 					className='w-full p-0 drop-shadow-sm'
// 					// className='w-[200px] p-0 drop-shadow-sm'
// 					align='start'
// 					onEscapeKeyDown={() => setIsPopoverOpen(false)}
// 				>
// 					<Command
// 						// className='bg-red-500 '
// 						className='w-full '
// 					>
// 						<CommandInput
// 							placeholder='Search...'
// 							onKeyDown={handleInputKeyDown}
// 						/>
// 						<CommandList>
// 							<CommandEmpty>No results found.</CommandEmpty>
// 							<CommandGroup>
// 								{options.map((option) => {
// 									const isSelected = selectedValuesSet.current.has(option.value)
// 									return (
// 										<CommandItem
// 											key={option.value}
// 											onSelect={() => toggleOption(option.value)}
// 											style={{
// 												pointerEvents: 'auto',
// 												opacity: 1,
// 											}}
// 											className='cursor-pointer'
// 										>
// 											<div
// 												className={cn(
// 													'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
// 													isSelected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
// 												)}
// 											>
// 												<CheckIcon className='w-4 h-4' />
// 											</div>
// 											{option.icon && <option.icon className='w-4 h-4 mr-2 text-muted-foreground' />}
// 											<span>{option.label}</span>
// 										</CommandItem>
// 									)
// 								})}
// 							</CommandGroup>
// 							<CommandSeparator />
// 							<CommandGroup>
// 								<div className='flex items-center justify-between'>
// 									{selectedValues.length > 0 && (
// 										<>
// 											<CommandItem
// 												onSelect={() => {
// 													setSelectedValues([])
// 													selectedValuesSet.current.clear()
// 													onValueChange([])
// 												}}
// 												style={{
// 													pointerEvents: 'auto',
// 													opacity: 1,
// 												}}
// 												className='justify-center flex-1 cursor-pointer'
// 											>
// 												Clear
// 											</CommandItem>
// 											<Separator
// 												orientation='vertical'
// 												className='flex h-full min-h-6'
// 											/>
// 										</>
// 									)}
// 									<CommandSeparator />
// 									<CommandItem
// 										onSelect={() => setIsPopoverOpen(false)}
// 										style={{
// 											pointerEvents: 'auto',
// 											opacity: 1,
// 										}}
// 										className='justify-center flex-1 cursor-pointer'
// 									>
// 										Close
// 									</CommandItem>
// 								</div>
// 							</CommandGroup>
// 						</CommandList>
// 					</Command>
// 				</PopoverContent>
// 				{/* {animation > 0 && selectedValues.length > 0 && (
// 					<WandSparkles
// 						className={cn('cursor-pointer my-2 text-foreground bg-background w-3 h-3', isAnimating ? '' : 'text-muted-foreground')}
// 						onClick={() => setIsAnimating(!isAnimating)}
// 					/>
// 				)} */}
// 			</Popover>
// 		)
// 	}
// )

// MultiSelectFormField.displayName = 'MultiSelectFormField'

// export default MultiSelectFormField

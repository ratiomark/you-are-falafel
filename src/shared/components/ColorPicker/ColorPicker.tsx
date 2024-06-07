import React, { useState } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import { Input, InputProps } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/utils/cn'
import './color-picker.css'
import { ArrowDown } from '@/shared/components/Icons/ArrowDown'

interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
}

export const ColorPickerInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [color, setColor] = useState(props.value as string)
  const handleColorChange = (color: string) => {
    setColor(color)
    // @ts-expect-error
    props.onChange!(color)
  }
  return (
    <div className="relative ">
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <PopoverTrigger
          asChild
          // className="flex w-full items-center rounded-md border bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {/* <Button
            className="leading-input text-input flex h-auto w-full flex-1 items-center justify-between rounded-md border border-input bg-inherit p-1 px-4 py-3 font-light  focus-visible:ring-ring"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            {color}
          </Button> */}
          <div className="text-input flex w-full cursor-pointer	 overflow-hidden rounded-lg border  border-input bg-transparent pr-4 font-light transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none">
            <div
              className="min-w-11 border-r border-r-input"
              style={{ background: color }}
            />
            <Input
              className="cursor-pointer border-none  py-3 pl-4	pr-0 focus-visible:ring-0 "
              // disabled={true}
              // onClick={() => console.log('clicked')}
              readOnly
              ref={ref}
              {...props}
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            />
            <ArrowDown isOpen={isPopoverOpen} />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="picker  rounded-md border bg-[#F8FFFE] p-4 shadow-lg"
        >
          <HexColorPicker
            color={color}
            onChange={handleColorChange}
          />
          <div className="flex flex-col  ">
            <span className="py-1 pt-2 text-sm font-medium">HEX</span>
            <Input
              // это инпут который отображает данные в самом поповере
              type="text"
              value={color}
              onChange={e => handleColorChange(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )

  // return (
  //   <Input
  // 		// disabled={true}
  // 		// onClick={() => console.log('clicked')}
  // 		readOnly
  //     ref={ref}
  //     {...props}
  //   />
  // )
})
ColorPickerInput.displayName = 'ColorPickerInput'

export const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [color, setColor] = useState(value)
  const handleColorChange = (color: string) => {
    setColor(color)
    onChange(color)
  }
  return (
    <div className="relative w-64">
      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <PopoverTrigger
          asChild
          // className="flex w-full items-center rounded-md border bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Button
            className="leading-input text-input flex h-auto w-full flex-1 items-center justify-between rounded-md border border-input bg-inherit p-1 px-4 py-3 font-light  focus-visible:ring-ring"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            {color}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="picker  rounded-md border bg-white p-4 shadow-lg"
        >
          <HexColorPicker
            color={color}
            onChange={handleColorChange}
          />
          <div className="flex flex-col  ">
            <span className="py-1 pt-2 text-sm font-medium">HEX</span>
            <Input
              // это инпут который отображает данные в самом поповере
              type="text"
              value={color}
              onChange={e => handleColorChange(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

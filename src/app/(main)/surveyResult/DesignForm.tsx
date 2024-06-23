'use client'

import { Button } from '@/shared/ui/button'
import { FormField, Form, FormItem, FormLabel, FormControl, FormMessage } from '@/shared/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select/select'
import { useFormState, useFormStatus } from 'react-dom'
import { Typography } from '@/shared/ui/typography'
import { cn } from '@/shared/utils/cn'
import { FormBlock } from '@/shared/components/FormBlock/FormBlock'
import { useToast } from '@/shared/ui/use-toast'
import { submitForm } from './submitProjectForm'
import { loadImage } from '@/shared/lib/loadImage'
import { SubmitButton } from '@/shared/components/Buttons/SubmitButton'

const fonts = [
  'Arial',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Georgia',
  'Comic Sans MS',
  'Impact',
  'Lucida Console',
  'Tahoma',
  'Trebuchet MS',
  'Palatino Linotype',
  'Book Antiqua',
  'Arial Black',
  'Garamond',
  'Courier',
  'Brush Script MT',
  'Arial Narrow',
  'Geneva',
  'Lucida Sans Unicode',
  'Century Gothic',
  'Lucida Grande',
  'MS Sans Serif',
  'MS Serif',
  'Lucida Handwriting',
  'Webdings',
  'Wingdings',
  'Symbol',
  'Bookman Old Style',
]
const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF']

const ProjectFormSchema = z.object({
  primaryFontType: z.string().min(1, 'Required'),
  primaryFontColor: z.string().min(1, 'Required'),
  secondaryFontType: z.string().min(1, 'Required'),
  secondaryFontColor: z.string().min(1, 'Required'),
  primaryColor: z.string().min(1, 'Required'),
  storyHeaderFontColor: z.string().min(1, 'Required'),
  website: z.string().url('Invalid URL').min(1, 'Required'),
  contactUsLink: z.string().url('Invalid URL').min(1, 'Required'),
  logo: z.any().optional(),
  storyPageBanner: z.any().optional(),
})

export type ProjectFormData = z.infer<typeof ProjectFormSchema>

// const TostButton = () => {
// 	const { toast } = useToast()

// 	return (
// 		<Button
// 			onClick={() => {
// 				toast({
// 					variant: 'success',
// 					title: 'Scheduled: Catch up',
// 					description: 'Friday, February 10, 2023 at 5:57 PM',
// 				})
// 			}}
// 		>
// 			Show Toast
// 		</Button>
// 	)
// }

const defaultValues = {
  logo: null,
  storyPageBanner: null,
}
// const defaultValues = {
// 	primaryFontType: '',
// 	primaryFontColor: '',
// 	secondaryFontType: '',
// 	secondaryFontColor: '',
// 	primaryColor: '',
// 	storyHeaderFontColor: '',
// 	website: '',
// 	contactUsLink: '',
// 	logo: null,
// 	storyPageBanner: null,
// }

export function DesignForm() {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues,
    // shouldFocusError: false,
    criteriaMode: 'firstError',
  })
  const { control: formControl } = form

  const [state, formAction] = useFormState(submitForm, defaultValues)
  return (
    <Form {...form}>
      {/* <TostButton /> */}
      <form
        noValidate
        onSubmit={form.handleSubmit(formAction.bind(null, form.getValues()))}
        className="flex w-full flex-col gap-10"
      >
        <FormBlock title="Primary Font">
          <FormField
            control={formControl}
            name="primaryFontType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Font Type</FormLabel>
                <Select
                  // open
                  {...field}
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      {/* <SelectValue placeholder='Select a font' /> */}
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {fonts.map(font => (
                      <SelectItem
                        key={font}
                        value={font}
                        tabIndex={0}
                        // className='text-input text-red-500'
                      >
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formControl}
            name="primaryFontColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Font Color</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map(color => (
                      <SelectItem
                        key={color}
                        value={color}
                      >
                        <span style={{ color }}>{color}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormBlock>

        <FormBlock title="Secondary Font">
          <FormField
            control={formControl}
            name="secondaryFontType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Font Type</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {fonts.map(font => (
                      <SelectItem
                        key={font}
                        value={font}
                      >
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formControl}
            name="secondaryFontColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Font Color</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map(color => (
                      <SelectItem
                        key={color}
                        value={color}
                      >
                        <span style={{ color }}>{color}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormBlock>

        <FormBlock title="General Colors">
          <FormField
            control={formControl}
            name="primaryColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Color</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map(color => (
                      <SelectItem
                        key={color}
                        value={color}
                      >
                        <span style={{ color }}>{color}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formControl}
            name="storyHeaderFontColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Story Header Font Color</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map(color => (
                      <SelectItem
                        key={color}
                        value={color}
                      >
                        <span style={{ color }}>{color}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormBlock>

        <FormBlock title="Contact Information">
          <FormField
            control={formControl}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter website URL"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formControl}
            name="contactUsLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Us Link</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter contact us link"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormBlock>

        <FormBlock title="Files">
          <FormField
            control={formControl}
            name="logo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <label
                    htmlFor="logo"
                    className="flex min-h-[108px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center"
                  >
                    <Input
                      id="logo"
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={async e => {
                        const url = await loadImage(e.target.files)
                        field.onChange(url)
                      }}
                    />
                    <span className="text-gray-500">Click to add a logo</span>
                    <span className="text-xs text-gray-500">(Supported formats: jpg, png)</span>
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formControl}
            name="storyPageBanner"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Story Page Banner</FormLabel>
                <FormControl>
                  <label
                    htmlFor="story-page-banner"
                    className="flex min-h-[108px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-center"
                  >
                    <Input
                      id="story-page-banner"
                      type="file"
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={async e => {
                        const url = await loadImage(e.target.files)
                        field.onChange(url)
                      }}
                    />
                    <span className="text-gray-500">Click to add a banner</span>
                    <span className="text-xs text-gray-500">(Supported formats: jpg, png)</span>
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormBlock>
        <SubmitButton />
      </form>
    </Form>
  )
}

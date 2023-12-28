import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import Slider from '@mui/material/Slider'

export const VerticalSliderInput = (props: any) => {
  const {elementProps, onChange, value = 1 as number | unknown} = props

  const handleChange = useCallback(
    (event: any) => {
      const nextValue = event.target.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  return (
    <Stack space={2}>
      {/* <TextInput {...elementProps} onChange={handleChange} value={value} /> */}
      <Slider
        {...elementProps}
        onChange={(e: any) => handleChange(e)}
        defaultValue={value}
        step={1}
        marks
        min={1}
        max={22}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Text>Zoom: {value}</Text>
    </Stack>
  )
}

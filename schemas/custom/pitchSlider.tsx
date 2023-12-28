import {useCallback} from 'react'
import {Stack, Text, TextInput} from '@sanity/ui'
import {set, unset} from 'sanity'
import Slider from '@mui/material/Slider'

export const PitchSlider = (props: any) => {
  const {elementProps, onChange, value = 0 as number | unknown} = props

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
        min={0}
        max={85}
        track="inverted"
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Text>Degrees: {value}</Text>
    </Stack>
  )
}

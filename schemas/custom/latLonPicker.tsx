import '../../static/leaflet.css'
import {Stack, Button, Text} from '@sanity/ui'
import {Box, Modal} from '@mui/material'
import {set, StatusButton, unset} from 'sanity'
import {useCallback, useState} from 'react'
import {MapContainer, TileLayer, useMapEvents} from 'react-leaflet'

export const LatLonInput = (props: any) => {
  const {
    elementProps,
    onChange,
    value = {lat: 68.70103154190423, lng: 15.397382820144628} as
      | {lat: number; lng: number}
      | unknown,
  } = props
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleChange = useCallback(
    (event: any) => {
      const nextValue = {lat: event.lat, lng: event.lng}
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        const center = map.getCenter()
        console.log(center)
        handleChange(center)
        handleClose()
      },
    })

    return <>{}</>
  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  return (
    <Stack space={2}>
      <div style={{padding: '8pt 0 8pt'}}>
        <Text>lat: {value.lat}</Text>
      </div>
      <div style={{padding: '8pt 0 0'}}>
        <Text>lng: {value.lng}</Text>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MapContainer
            style={{height: '500px'}}
            center={[value.lat, value.lng]}
            zoom={6}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
          <div style={{padding: '8pt 0 8pt'}}>
            <Text>lat: {value.lat}</Text>
          </div>
          <div style={{padding: '8pt 0 0'}}>
            <Text>lng: {value.lng}</Text>
          </div>
        </Box>
      </Modal>
      <Button
        fontSize={[2, 2, 3]}
        mode="bleed"
        padding={[0, 0, 4]}
        justify={'flex-start'}
        text="Choose location"
        onClick={handleOpen}
        tone="primary"
      />
    </Stack>
  )
}

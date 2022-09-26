import { Box } from '@chakra-ui/react'
import React from 'react'
import GoogleMapReact from 'google-map-react'

export default function Map({ coordinates, setCoordinates }) {
  return (
    <Box width="full" height="full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={3}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => { "" }}
        onChildClick={() => { "" }}
      >

      </GoogleMapReact>
    </Box>
  )
}

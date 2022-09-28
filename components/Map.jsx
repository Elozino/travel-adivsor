import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { ImLocation2 } from 'react-icons/im'
import { BiX } from 'react-icons/bi'

export default function Map({ places, coordinates, setCoordinates, setBounds }) {
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState(null)
  return (
    <Box width="full" height="full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => {
          // console.log(child)
          setCardData(places[child])
          setIsCard(true)
        }}
      >
        {places?.map((place, i) => (
          <Box
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={"relative"}
            cursor="pointer"
          >
            <ImLocation2 color="red" fontSize={18} />
          </Box>
        ))}
        {isCard && (
          <Box
            width="200"
            height="150"
            bg="whiteAlpha.900"
            position="absolute"
            top={-12}
            left={0}
            shadow="lg"
            rounded="lg"
          >
            <Image
              src={cardData?.photo
                ? cardData?.photo?.images?.large?.url
                : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt={cardData?.name}
              objectFit="cover"
              height="120"
              width="full"
              rounded="lg"
            />
            <Text
              noOfLines={1}
              fontSize="lg"
              fontWeight={500}
              textTransform="capitalize"
              width="40"
            >
              {cardData.name}
            </Text>
            <Box
              cursor={"pointer"}
              position="absolute"
              top="2"
              right="2"
              width="20px"
              height="20px"
              bg="red.300"
              rounded="full"
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              onClick={() => {
                setIsCard(false)
              }}
            >
              <BiX size={18} />
            </Box>
          </Box>
        )}
      </GoogleMapReact>
    </Box>
  )
}

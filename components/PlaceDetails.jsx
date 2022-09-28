import { Flex, Text, Image, Badge } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
// import Image from 'next/image'
import React from 'react'
import { IoLocation } from "react-icons/io"
import { GoLocation } from "react-icons/go"

export default function PlaceDetails({ place, key }) {
  return (
    <Flex
      bg="whiteAlpha.900"
      px={4}
      py={2}
      mb={2}
      direction="column"
      alignItems="start"
      justifyContent="space-between"
    >
      <Flex width="full" justifyContent={'space-between'}>
        <Flex
          direction="column"
          justifyContent={"start"}
          alignItems=" start"
          width="full"
          px={2}
        >
          <Flex
            alignItems="center"
            width="full"
            justifyContent={"space-between"}
          >
            <Text textTransform="capitalize"
              width="40" fontSize="lg"
              fontWeight={500} noOfLines={1}>
              {place.name ? place.name : "Cool"}
            </Text>
            <Text fontSize="small"
              fontWeight="500" color="gray.500">
              {place.price}
            </Text>
          </Flex>
          {/* ratings */}
          <Flex alignItems="center" width="full">
            <Rating size="small" value={Number(place.rating)} readOnly />
            <Text fontSiz="sm" fontWeight="500" color="gray.500">({place.num_reviews})</Text>
            <Text fontSiz="sm" fontWeight="500" color="gray.500" ml="auto">{place.price_level}</Text>
          </Flex>
          {/* ranking */}
          <Text fontSiz="sm" fontWeight="500" color="gray.400">{place.price_level}</Text>

          {/* open status */}
          <Text fontSiz="sm" fontWeight="500" color="gray.600">{place.price_level}</Text>

          {/* diet */}
          {place?.dietary_restrictions && (
            <Flex
              width="full"
              flexWrap={"wrap"}
            >
              {place.dietary_restrictions.map((item, i) => (
                <Badge colorScheme="teal" cursor="pointer" key={i} m={1} fontSize="10">
                  {item.name}
                </Badge>
              ))}
            </Flex>
          )}

        </Flex>
        <Image
          src={place.photo ? place.photo.images.large.url :
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt={place.name}
          objectFit="cover"
          height="120"
          width={120}
          rounded="lg"
        />
      </Flex>
      {place?.address && (
        <Flex alignItems="center" width="full" px={1} py={2}>
          <GoLocation fontSize={18} color="gray" />
          <Text noOfLines={1} fontSize="small" fontWeight={500} color="gray.700" ml={1}>
            {place.address}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}

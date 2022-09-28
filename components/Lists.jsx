import { Flex, Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
import React from 'react'
import PlaceDetails from './PlaceDetails'


export default function Lists({ places, isLoading }) {
  if (isLoading) {
    return (
      <Flex direction="column"
        bg="whiteAlpha.900"
        width="35vw"
        height="100vh"
        overflow="hidden"
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        px={2}
      >
        <Box mt={14} padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box mt={2} padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box mt={2} padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box mt={2} padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
        <Box mt={2} padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box>
      </Flex>
    )
  } else {
    return (
      <Flex direction="column"
        bg="whiteAlpha.900"
        width="35vw"
        height="100vh"
        overflow="hidden"
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        px={2}
      >
        <Flex
          flex={1}
          direction="column"
          mt={14}
          overflowY="scroll"
        >
          {places && places.map((place, i)=> (
            <PlaceDetails place={place} key={i}/>
          ))}
        </Flex>
      </Flex>
    )
  }
}

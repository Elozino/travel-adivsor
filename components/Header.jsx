import { Flex, Input, InputGroup, InputRightElement, Menu, MenuItem, MenuList, MenuButton, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'

import { BiChevronDown, BiHotel, BiMapAlt, BiRestaurant, BiSearch, BiStar } from "react-icons/bi"

export default function Header({ type, setType, setRatings }) {
  return (
    <Flex
      position="absolute"
      top={0}
      left={0}
      width="full"
      px={4}
      py={2}
      zIndex={100}
    >
      <Flex>
        {/* <Autocomplete> */}
        <InputGroup width={"35vw"} shadow="lg">
          <InputRightElement
            pointerEvents={"none"}
            // eslint-disable-next-line react/no-children-prop
            children={
              <BiSearch size={20} color="gray" />
            }
          />
          <Input type="text"
            placeholder="Search Google Map..."
            variant="filled"
            fontSize={18}
            bg="white"
            color="gray.700"
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ color: "" }}
          />
        </InputGroup>
        {/* </Autocomplete> */}
        <Flex
          alignItems={"center"}
          justifyContent="center"
        >
          <Flex
            alignItems={"center"}
            justifyContent="center"
            px={4}
            py={2}
            bg="white"
            rounded="full"
            ml={4}
            shadow="lg"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            transition="ease-in"
            transitionDuration="0.3s"
          >
            <Menu>
              <BiStar size={24} />
              <MenuButton mx={2} transition="all .2s" borderRadius={"md"}>
                Choose Ratings
              </MenuButton>
              <MenuList>
                <MenuItem display="flex" justifyContent="center" onClick={() => setRatings("")}>
                  <Text fontSize={18} fontWeight={500} color="gray.700">All Ratings</Text>
                </MenuItem>
                <MenuItem display="flex" justifyContent="space-around" alignItems="center" onClick={() => setRatings("all")}>
                  <Text fontSize={18} fontWeight={500} color="orange.700">2.0</Text>
                  <Rating size="small" value={2} readOnly />
                </MenuItem>
                <MenuItem display="flex" justifyContent="space-around" alignItems="center" onClick={() => setRatings("all")}>
                  <Text fontSize={18} fontWeight={500} color="orange.700">3.0</Text>
                  <Rating size="small" value={3} readOnly />
                </MenuItem>
                <MenuItem display="flex" justifyContent="space-around" alignItems="center" onClick={() => setRatings("all")}>
                  <Text fontSize={18} fontWeight={500} color="orange.700">4.00</Text>
                  <Rating size="small" value={3} readOnly />
                </MenuItem>
                <MenuItem display="flex" justifyContent="space-around" alignItems="center" onClick={() => setRatings("all")}>
                  <Text fontSize={18} fontWeight={500} color="orange.700">4.5</Text>
                  <Rating size="small" value={4.5} readOnly />
                </MenuItem>
                <MenuItem display="flex" justifyContent="space-around" alignItems="center" onClick={() => setRatings("all")}>
                  <Text fontSize={18} fontWeight={500} color="orange.700">5.0</Text>
                  <Rating size="small" value={5} readOnly />
                </MenuItem>
              </MenuList>
            </Menu>
            <BiChevronDown size={25} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent="center"
            px={4}
            py={2}
            bg="white"
            rounded="full"
            ml={4}
            shadow="lg"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            transition="ease-in"
            transitionDuration="0.3s"
            onClick={() => setType("restaurants")}
          >
            <BiRestaurant size={25} />
            <Text ml={3} fontSize="16">Restaurant</Text>
          </Flex>
           
          <Flex
            alignItems={"center"}
            justifyContent="center"
            px={4}
            py={2}
            bg="white"
            rounded="full"
            ml={4}
            shadow="lg"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            transition="ease-in"
            transitionDuration="0.3s"
            onClick={() => setType("hotels")}
          >
            <BiHotel size={25} />
            <Text ml={3} fontSize="16">Hotels</Text>
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent="center"
            px={4}
            py={2}
            bg="white"
            rounded="full"
            ml={4}
            shadow="lg"
            cursor="pointer"
            _hover={{ bg: "gray.100" }}
            transition="ease-in"
            transitionDuration="0.3s"
            onClick={() => setType("attractions")}
          >
            <BiMapAlt size={25} />
            <Text ml={3} fontSize="16">Attractions</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

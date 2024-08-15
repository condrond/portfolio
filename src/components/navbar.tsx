"use client"

import { Box, Flex, Link, Wrap, IconButton, Spacer, Image, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useMediaQuery } from 'react-responsive'

const DucssLogo = <Image src="/logo.png" alt="DUCSS logo"/>

export const Header = () => {
  return (
    <Box
      h={"10vh"}
      bg="orange.500"
      as="header"
      paddingTop={5}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={5}
      top={0}
      zIndex={10}
      boxShadow="sm"
    >
      <Flex>
        <Flex p={0} minW={"8%"}>
          <Link href="/" w={"100%"} h={"100%"}>
            <IconButton icon={<Image src="/logo_white.svg" alt="Darragh Condron"/>} w={"100%"} h={"100%"} aria-label="" colorScheme='transparent'/>
          </Link>
        </Flex>

        <Spacer />
        
        <Flex p={0} maxW={"95%"}>
          <Navbar />
        </Flex>
      </Flex>
    </Box>
  );
};


export const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  if (isTabletOrMobile) {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label=""
          icon={<HamburgerIcon />}
        />
        <MenuList bg={"orange.300"}>
          <Link href="/about">
            <MenuItem bg={"orange.300"}>
              About
            </MenuItem>
          </Link>
          <Link href="/experience">
            <MenuItem bg={"orange.300"}>
              Experience
            </MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem bg={"orange.300"}>
              Contact
            </MenuItem>
          </Link>
          <Link href="/store">
            <MenuItem bg={"orange.300"}>
              Store
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    )
  }
  else {
    return (
      <Flex align="center" justify="center">
        <Wrap direction="row" align="stretch" justify="center" spacing={4}>
          <Link fontSize={{ base: "1xl" }} href="/about">About</Link>
          <Link fontSize={{ base: "1xl" }} href="/experience">Experience</Link>
          <Link fontSize={{ base: "1xl" }} href="/contact">Contact</Link>
          <Link fontSize={{ base: "1xl" }} href="/store">Store?</Link>
        </Wrap>
      </Flex>
    )
  }
}
import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import  NavButton from "../Buttons/navbarButton"


interface User {
  name: string;
  avatar: string;
}

const NavBarComponent: React.FC = () => {
  const Links = ['Home', 'About', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Simulates whether the user is logged in

  const handleLogin = () => {
    // Simulate login logic
    setUser({
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    });
  };

  const handleLogout = () => {
    // Simulate logout logic
    setUser(null);
  };
  const toggleMenu = () => setIsOpen(!isOpen);


  function handleClick(): void {
    handleLogin();
  }
  return (
    <>
    <Box bg={useColorModeValue('custom.500', 'custom.600')} px={4} className=" -mb-20 z-auto">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        position="relative"
      >
        {/* Logo */}
        <Box color="white" fontWeight="bold" fontSize="lg" className=" md:ml-36" >
          Logo
        </Box>

        {/* Centered Links */}
        <HStack
          as="nav"
          spacing={4}
          color="white"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          display={{ base: 'none', md: 'flex' }}
        >
          {Links.map((link) => (
            <a key={link} 
            color="white" href={`/${link.toLowerCase()}`} className="link" style={{
              outline: 'none',
            }}>
              {link}
            </a>
          ))}
        </HStack>

        {/* Right Section */}
        <Flex alignItems="center" gap={4}>
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" src={user.avatar} />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <HStack spacing={4}>

              <NavButton text="SignIn" onClick={handleClick} />
              <NavButton text="SignUp"  />
            </HStack>
          )}

          {/* Hamburger Icon */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: 'none' }}
            onClick={toggleMenu}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
               <a key={link} 
               color="white" href={`#${link.toLowerCase()}`} className="link" style={{
                 outline: 'none',
               }}>
                 {link}
               </a>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  </>
  );
};

export default NavBarComponent;

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
  Box,
  Flex,
 
  
  HStack,
  
  IconButton,
  Button,
  Menu,
  MenuButton,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Contact from './Contact';

const Links = [<a href='/' style={{color:"white",_hover:{ bg:"blue"
}}}>HOME</a>, <a href='/projects' style={{color:"white"}}>PROJECT</a>, <a href='/about' style={{color:"white"}}>ABOUT ME</a>, <a href='/skills' style={{color:"white"}}>SKILL</a>,<a href='/contact' style={{color:"white"}}>CONTACT</a>];



const NavLink = ({ children }) => (
  <Text
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Text>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
     <Box position={'fixed'} w={'100%'} zIndex={999} bg={useColorModeValue('gray.100', 'gray.900')} px={4} bgColor={"#12005e"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
             
             
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
      
    </>
  );
}
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
import NavLink  from './Navlink';

const Links = [{name:"HOME",id:"home"}, {id:'projects',name:"PROJECT"}, {id:'about',name:"ABOUT ME"}, {id:'skills' ,name:"SKILL"},{id:'contact',name:"CONTACT"},{id:"resume",name:"RESUME"}];






export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
     <Box position={'fixed'} w={'100%'} zIndex={999} bg={useColorModeValue('blue.200', 'blue.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={useColorModeValue('blue.600', 'blue.200')} fontFamily={"fantasy"}>SSAINI</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
               {Links.map((link,i) => (
                <NavLink name={link.name} key={i} to={link.id} onClick={()=>onClose()}/>

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
            {Links.map((link,i) => (
                <NavLink name={link.name} key={i} to={link.id} onClick={()=>onClose()}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
      
    </>
  );
}
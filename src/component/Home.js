import Typewriter from "typewriter-effect"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image
} from '@chakra-ui/react';
import Contact from './Contact';
import Projects from './Projects';
import Github from "./github";
import Skills from "./Skills";
import About from "./About";

export default function Home() {
  return (
    <>
     
     
      <Container maxW={'7xl'} style={{display:"flex",gap:"3rem",justifyContent:"center"}} id="home"  height={{md:"80vh",base:"50vh"}} >
      <Box mt="2rem" style={{display:"flex",gap:"3rem",justifyContent:"center", height:"100vh"}}> 
      
        <Stack

          as={Box}
          textAlign={'start'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            marginTop="-30px">
            Hi There! 
         <br />
            <Text as={'span'} color={'blue.400'}>
              I am Sonia Saini
            </Text>
            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Full-Stack Developer.",
                "Problem Solver.",
                "Tech Lover."
              ]
            }}/>
          </Heading>
         
         
        </Stack>
        </Box>
      </Container>
     <About/>
      <Projects/>
      <Github/>
      <Skills/>
      <Contact/>
    </>
  );
}


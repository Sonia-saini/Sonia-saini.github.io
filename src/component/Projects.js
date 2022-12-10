import React from "react";


import {
  Box,
  Heading,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

const Projects = () => {
  const ProjectData = [
    {
      title: "Zara-Website",
      link: "https://kunalchandel4.github.io/teamDeskChampions/",
      url: "https://github.com/kunalchandel4/teamDeskChampions",
      description:
        "The company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes. It is the largest company in the Inditex group, the world's largest apparel retailer. Zara is one of the most successful fashion retail brands in the world.",
      language:["html"," ","Css"," ","JavaScript"," "," "],
      image:"https://kunalchandel4.github.io/Images/Zara.png"

      
        
    },
    {
      title: "Deccan Herald",
      link: "https://deccan-herald-clone.netlify.app/",
      url: "https://github.com/erpushpendrasingh/handsomely-clam-5290",
      description:"Deccan Herald is an Indian English language daily newspaper published from the Indian state of Karnataka. It was founded by K. N. Guruswamy, a liquor businessman from Ballari and was launched on 17 June 1948.",
      language: ["html", " ", "css", " ", "javaScript", " ",""],
      image:
        "https://scontent.fluh3-1.fna.fbcdn.net/v/t39.30808-6/318094665_1155458405176363_1405196538203393011_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=LOWRt3XKRuoAX_S-Eso&_nc_ht=scontent.fluh3-1.fna&oh=00_AfAmGd8mTrQPVNLyUZDjhIYnhT2FKE98fOLcEiKKsLvq2w&oe=6390A0E4",
    },
    {
      title: "Codecov",
      link: "https://comfy-peony-436092.netlify.app/",
      url: "https://github.com/rajshekar11/shocking-blood-2056",
      description:
        "Codecov gives companies actionable coverage insights when and where they need them to ensure they are shipping quality code. Collaborative project: Accomplished with a team of 5 developers in 7days JavaScript Css3 Html5 Node.js.",
      language: ["html", " ", "css", " ", "javaScript", " ",""],
      image:
        "https://scontent.fluh3-1.fna.fbcdn.net/v/t39.30808-6/318015295_1155459541842916_8757769175769318714_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=mc45vtI7pg0AX9xTG92&_nc_ht=scontent.fluh3-1.fna&oh=00_AfCPY2D-mDd8JiHYrL6_kvxnfijrAQQ7vDMX3nxNgu1e0Q&oe=63909E5B",
    },
    {
      title: "Shine confidently",
      link: "https://guileless-douhua-fc8d49.netlify.app/",
      url: "https://github.com/Sonia-saini/-remarkable-border-1662/tree/main/beauty-product",
      description:
        "we have cloned the Demstore Website this is an E-Commerce Website here you can buy the beauty products and the project is based on the technology we are learned in the whole unit in this project we are used  React -Router-Dom and Chakra UI.",
      language: ["React", " ","Javascript"," ","Chakra UI"," ","Html"],
      image:
        "https://scontent.fluh3-1.fna.fbcdn.net/v/t39.30808-6/318203765_1155459971842873_7445145728722038519_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=6bS8qY56x3cAX85fLV5&_nc_ht=scontent.fluh3-1.fna&oh=00_AfCkUAexqptrJQIXv0HcqBQ9AilYHoUhhA9uLQsR3jtQmA&oe=6390DF24",
    },
   
    

    
  ];
  return (
    <Box mt={{md:40,base:20}} id="projects" >
      <Heading color={"blue.500"}>Projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={8}>
        {ProjectData.map((t) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              border="1px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
              _hover={{border:"3px solid blue"}}
              bgColor={"blue.200"}
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"} color={"blue.900"}>{t.title}</Text>
              <Text color={"blue.800"}>{t.language}</Text>
              <Text color={"blue.800"}>{t.description}</Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <Button target="_blank" as="a" href={t.url} bg={"blue.700"} color="white">
                  Github
                </Button>
                <Button as="a" href={t.link} target="_blank" bg={"blue.700"} color="white">
                  Go live
                </Button>
              </Flex>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;

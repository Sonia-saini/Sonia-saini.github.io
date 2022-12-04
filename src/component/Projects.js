import React from "react";
import  Images  from "./images/Screenshot (1094).png";
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
      url: "https://github.com/chhavi48/Bella-Vita-Organic",
      description:
        "The company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes. It is the largest company in the Inditex group, the world's largest apparel retailer. Zara is one of the most successful fashion retail brands in the world.",
      language:["html"," ","Css"," ","JavaScript"," "," "],
      image:{Images}

      
        
    },
    {
      title: "Small-case-website",
      link: "https://hilarious-baklava-9743c9.netlify.app/",
      url: "https://github.com/chhavi48/smallCase-clone",
      description:
        "we have cloned the SmallCase Website within 5 days this is the E-investing company. smallCase account that allows an investor to buy and sell tradable securities based on the predefined combinations",
      language: ["html", " ", "css", " ", "javaScript", " ",""],
      image:
        "https://user-images.githubusercontent.com/77965216/161383198-0b12af05-3c65-464b-80f5-35252704ea0f.JPG",
    },
    {
      title: "Resume Builder",
      link: "https://resume-builder-cssv.vercel.app/",
      url: "https://github.com/chhavi48/ResumeBuilder/tree/main",
      description:
        "This is a personal project based Professional Resume Builder, with downloading in PDF format feature. Made with the help of react redux.",
      language: ["React", " ", "Redux", " ", "React-print"],
      image:
        "https://user-images.githubusercontent.com/94439105/175854197-45c646f0-1a11-4039-b633-efbd452075ca.png",
    },
    {
      title: "Nature-Basket",
      link: "https://naturebasket-cw.netlify.app/",
      url: "https://github.com/chhavi48/clone-of-Natures-Basket",
      description:
        "we have cloned the Nature’s Basket Website this is an E-Commerce Website for helping this site you can buy the nature-related product and find the details of the product .at the end of unit Masai team is assigned a project and the project is based on the technology we are learned in the whole unit in this project we are used React- Redux and React -Router-Dom.",
      language: ["React", " ", "Redux"],
      image:
        "https://camo.githubusercontent.com/865b8ec6b8a17a32f26769ad88a80f069f82d1015c765d716d9b9d47ccf1c266/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313035302f312a32513975644a687272535f496165526244564c3870512e6a706567",
    },
   
    

    
  ];
  return (
    <Box mt={40} id="projects">
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
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"}>{t.title}</Text>
              <Text>{t.language}</Text>
              <Text>{t.description}</Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <Button target="_blank" as="a" href={t.url} bg={"blue.300"}>
                  Github
                </Button>
                <Button as="a" href={t.link} target="_blank">
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

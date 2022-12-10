import React from 'react'
import GitHubCalendar from "react-github-calendar"
import { Box, Heading } from '@chakra-ui/react'
const Github = () => {
  return (
    <Box mt={'5rem'} >
          <Heading color={'blue.500'}>Github-Stats</Heading>
          <Box px={['2%','4%','8%','16%','24%']} py={8}>
   <GitHubCalendar
        username="Sonia-saini"
        blockSize={10}
        blockMargin={5}
        color="teal"
        fontSize={16}
        m={40}
        w='70%'
        // mx={[0,4,8,16,20]}
      />
      </Box>
      <Box style={{display:"flex",margin:"auto",width:"65%",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",gap:"20px",padding:"10px"}}>
    <Box><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=sonia-saini&show_icons=true&locale=en&layout=compact" alt="sonia-saini" width={"500px"} height="300px"/></Box>

<Box>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=sonia-saini&show_icons=true&locale=en" alt="sonia-saini"/></Box></Box>
    </Box>
  )
}

export default Github
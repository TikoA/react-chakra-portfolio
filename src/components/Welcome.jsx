import React from 'react';
import {Box, Text} from '@chakra-ui/core'

function Welcome() {

  return (
    <>
      <Box
        display='flex'
        justifyContent='center' 
        alignItems='center' 
        width='100%' 
        flexDirection='column'
        backgroundColor='yellow.400' 
        height='100vh'
        color='gray.800'
      >
        <Text fontFamily='Franklin Gothic Medium' fontSize='45px' fontWeight='600'>
          Raz Snkhchyan
        </Text>

        <Text marginBottom='2rem' fontFamily='Franklin Gothic Medium' fontSize={['30px','45px']} fontWeight='600'>
          Front-End developer
        </Text>

        <a href='https://github.com/RazO-tech'><Text fontSize='6xl'><i class="devicon-github-plain colored"></i></Text></a>
        
      </Box>
    </>
  );
}

export default Welcome;
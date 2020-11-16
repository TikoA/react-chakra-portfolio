import { Box, Text } from '@chakra-ui/core'

const Skills = () => {
    return (
        <Box 
            width='100%' 
            padding='3rem' 
            backgroundColor='gray.700'
            textAlign='center'
        >
            <Text color='white' fontFamily='Mechanical Outline, Franklin Gothic Medium' fontSize='5xl'>Skills</Text>
            <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-html5-plain-wordmark colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-css3-plain-wordmark colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-javascript-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-react-original colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-php-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-git-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-wordpress-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-yarn-plain colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-photoshop-line colored"></i></Text>
                <Text marginRight='1rem' fontSize='6xl'><i class="devicon-google-plain colored"></i></Text>
            </Box>
        </Box>
    )
}

export default Skills;
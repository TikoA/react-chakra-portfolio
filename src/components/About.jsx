const { Box, Image, Text, Stack, Badge, Link, Divider } = require("@chakra-ui/core")


const About = () => {
    return (
        <Box 
            display='flex'
            backgroundColor='gray.900' width='100%' padding='2rem'
            justifyContent={['space-between','center'].reverse()}
            flexWrap='wrap'
        >

        <Box
            maxWidth='300px' 
            padding='1rem' 
            marginBottom='1rem'
            border='1px solid lightgray'
            borderRadius='10px'
            backgroundColor='white'
        >
            <Image 
                src='https://instagram.fevn2-1.fna.fbcdn.net/v/t51.2885-15/e35/81429202_436719407044673_4893142428596604597_n.jpg?_nc_ht=instagram.fevn2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2T9nI42OTNYAX8T-7Fy&tp=18&oh=c264fba5ee3e8d72d97b138434d9359b&oe=5FDAD152' 
                borderRadius='10px'
            />
            <Divider />
            <Text fontSize='xl'>Razmik</Text>
            <Stack isInline>
                <Badge variantColor="green">Developer</Badge>
                <Badge variantColor="red">Front-End</Badge>
            </Stack>
        </Box>

        <Box maxWidth='700px'>
            <Box 
                backgroundColor='gray.300' 
                width='100%' 
                padding='.1rem' 
                display='flex' 
                justifyContent='start' 
                height='1.4rem'
                borderTopLeftRadius='4px'
                borderTopRightRadius='4px'
            >
                <Box borderRadius='50%' width='.8rem' margin='.2rem' marginRight='10px' backgroundColor='red.400'></Box>
                <Box borderRadius='50%' width='.8rem' margin='.2rem' marginRight='10px' backgroundColor='yellow.400'></Box>
                <Box borderRadius='50%' width='.8rem' margin='.2rem' backgroundColor='green.400'></Box>
            </Box>
            <Box 
                backgroundColor='gray.400'
                height='100%'
                color='black'
                padding='1rem'
            >
                <Text fontSize='md' fontWeight='600' fontSize='1rem'>
                    I am front-end web developer from Yerevan,
                    I learn new things every day constantly from Internet, books,
                    and my teacher <Link color='gray.900' href='https://github.com/TikoA'>Tigran Arshakyan</Link> who helped me to make 
                    this portfolio.
                    I support Artsakh and Armenia. 
                    <Link color='red.600'>#Reco</Link>
                    <Link color='blue.700'>gnizeA</Link>
                    <Link color='orange.600'>rtsakh</Link>
                </Text>
            </Box>
        </Box>

        </Box>
    )
}

export default About
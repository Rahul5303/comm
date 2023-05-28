import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button,Flex, Heading, Image, Spacer, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    
    <Box bg={useColorModeValue('gray.400', 'gray.200')} px={4} position="sticky" zIndex="sticky">
    <Flex h={20} alignItems={'center'} justifyContent={'space-between'} marginTop="10px" ml="40px">
    <Heading>E-Commerce</Heading>
    {/* <Image src='./Images/E-COMMERCE.png' alt="image"/> */}
    <Spacer />
        <Box>
            <Button colorScheme='teal' variant='ghost'><Link to="/">Product Page</Link></Button>
            {/* <Button colorScheme='teal' variant='ghost'><Link to="/product">Product</Link></Button> */}
            <Button colorScheme='teal' variant='ghost'><Link to="/cart">Cart Page</Link></Button>
            <Button colorScheme='teal' variant='ghost'><Link to="/checkout">Checkout Page</Link></Button>

        </Box>

        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

               
                    
            </Stack>
        </Flex>
    </Flex>
</Box>
</>
  )
}

export default Navbar;



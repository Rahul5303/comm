import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button,Flex, Heading, Icon, Image, Spacer, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const cart = useSelector((store) => store.CartReducer.cart);
  return (
    <>
    
    <Box bg={useColorModeValue('gray.400', 'gray.200')} px={4} position="sticky" top={0} zIndex={10}>
    <Flex h={20} alignItems={'center'} justifyContent={'space-between'} marginTop="10px" ml="40px">
    <Heading>E-Commerce</Heading>
    {/* <Image src='./Images/E-COMMERCE.png' alt="image"/> */}
    <Spacer />
        <Box>
            <Button colorScheme='teal' variant='ghost'><Link to="/">Product Page</Link></Button>
            {/* <Button colorScheme='teal' variant='ghost'><Link to="/product">Product</Link></Button> */}
            <Button colorScheme='teal' variant='ghost'><Link to="/cart">Cart Page</Link></Button>
            {/* <Button colorScheme='teal' variant='ghost'><Link to="/checkout">Checkout Page</Link></Button> */}
           
           
           
            

        </Box>

        <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={5}>
            <Button><Link to="/checkout"><Icon as={FaShoppingBag} spacing={7} color="black"/></Link>  {cart.length > 0 && (
      <span
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px',
        }}
      >
        {cart.length}
      </span>
      
      
    )}</Button>
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



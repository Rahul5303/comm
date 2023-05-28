import React, { useEffect, useState } from 'react'
import { Box, Divider, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import Navbar from '../Component/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/AppReducer/actionCreator';
import ProductsCard from './ProductsCard';

const Products = () => {

  const products=useSelector((state)=>state.AppReducer.products);
  console.log(products);

  const dispatch = useDispatch();


  useEffect(() => {
    
      dispatch(getProducts());
  }, []);


   
  return (
    <Box>
      <Navbar/>
      <Image mt="5px" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width="100%"  objectFit="cover" h="1000px"
         />
      
      <Heading fontFamily="Arial" marginTop="50px">Product Page</Heading>
      <Divider size="sm" color="black"/>
      
      <Box  p='6' rounded='md'  w="90%" m="auto" mt="50px">
      <SimpleGrid columns={[1,2,3,4]} spacing={10} >
      {products.length > 0 &&
        products.map((el) => {
          return (
            <ProductsCard
              key={el._id}
              _id={el._id}
              name={el.name}
              image={el.image}
              price={el.price}
              description={el.description}
              
            />
          );
        })}
        </SimpleGrid>
        </Box>
     
    </Box>
  )
}

export default Products

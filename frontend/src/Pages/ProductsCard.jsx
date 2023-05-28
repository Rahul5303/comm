// import { Box, Image,Text } from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const ProductsCard = ({image,name,price,_id}) => {
//   return (
//     <Box boxShadow='lg' p='6' rounded='md' gap="20px" w="90%" m="auto" mt="50px">
    
//     <Link to={`/products/${_id}`}>

//     <Image src={image} alt="image" width="100%" objectFit="cover" />
//   <Text fontSize="2xl">
//     {name}
//   </Text>
  
//   <Text fontSize="2xl">
//     ₹{price}
//   </Text>
//   </Link>
  
// </Box>
//   )
// }

// export default ProductsCard

import { Box, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ image, name, price, _id }) => {
  return (
    <LinkBox
      boxShadow="lg"
      p="6"
      rounded="md"
      width="100%"
      maxW="300px"
      m="auto"
      mt="50px"
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <LinkOverlay as={Link} to={`/products/${_id}`}>
        <Image src={image} alt="image" width="100%"
          objectFit="cover"
          aspectRatio={2/ 3}  />
        <Text fontSize="2xl" fontWeight="bold" mt="2">
          {name}
        </Text>
        <Text fontSize="xl" color="gray.600">
          ₹{price}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export default ProductsCard;




import { Box, Button, Divider, Heading, Image, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Component/Navbar';
import { Decreament, Increament } from '../Redux/CartReducer/actionCreator';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((store) => store.CartReducer.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const toast = useToast();

  const navigate = useNavigate();

  const adIncrement = (productId) => {
    dispatch(Increament(productId));
  };

  
  
  
  const adDecrement = (productId) => {
    dispatch(Decreament(productId));
  };

  const handleIncrement = (productId) => {
    adIncrement(productId);
  };

  const handleDecrement = (productId) => {
    const product = cart.find((el) => el.id === productId);
    if (product.count === 1) {
      // Display an error message or handle the minimum count limit
      return;
    }
    adDecrement(productId);
  };

  let total = 0;
  cart.forEach((el) => {
    total = total + el.count * el.price;
  });

  //   order
  const Order = () => {
    toast({
      title: 'Checkout Page.',
      description: 'Fill in the details to proceed with the purchase',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/checkout');
  };

  return (
    <Box>
      <Navbar />
      <Heading fontFamily="Arial" marginTop="20px">Cart Page</Heading>
      <Divider size="sm" color="black"/>
      <Box p="6" rounded="md" w="90%" m="auto" mt="50px">
        {cart.map((el) => (
          <Box key={el._id} borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="lg" mb="4">
            <Image src={el.image} alt="image" width="300px" />
            <Box p="5">
              <Text fontSize="xl" fontWeight="bold">
                Name: {el.name}
              </Text>
              <Text fontSize="xl">
                Description: {el.description}
              </Text>
              <Text fontSize="xl">
                Price: ₹{el.price}
              </Text>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Button
                     disabled={el.count === 1}
                     onClick={() => handleDecrement(el.id)}
                     size="sm"
                     mr="2"
                  >
                    -
                  </Button>
                  <Text fontSize="xl">{el.count}</Text>
                  <Button onClick={() => handleIncrement(el.id)} size="md" ml="2">
                    +
                  </Button>
                </Box>
                <Button onClick={Order} colorScheme="blue" size="md">
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box p="6" rounded="md" w="88%" m="auto" mt="4" bg="gray.300" >
        <Text fontSize="2xl" fontWeight="bold" textAlign="right" color="black">
          Total: ₹{total}
        </Text>
      </Box>
    </Box>
  );
};

export default Cart;

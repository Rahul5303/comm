import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCheckout } from '../Redux/CheckoutReducer/actionCreator';
import { Box, Button, Divider, FormLabel, Heading, Input, Stack, Text, useToast } from '@chakra-ui/react';
import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const cart = useSelector((store) => store.CartReducer.cart);
  console.log(cart);

  let total = 0;
  cart.forEach((el) => {
    total = total + el.count * el.price;
  });


 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast=useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the checkout action with the form data
    dispatch(addCheckout({ name, email, password, address, phone }));

    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
    setAddress('');
    setPhone('');
  };

  const Order = () => {
    toast({
      title: 'Order Placed Successfully.',
      description: 'Order Confirmed',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
    navigate('/');
   
  };

  return (
    <Box>
      <Navbar />
      <Heading fontFamily="Arial" marginTop="20px">Checkout Page</Heading>
      <Divider size="sm" color="black"/>
      <Box p="4" rounded="md" w="88%" m="auto" mt="4" bg="gray.300" >
        <Text fontSize="2xl" fontWeight="bold" textAlign="right" color="black">
          Total Amount to Pay: ₹{total}
        </Text>
      </Box>
      <Box w="35%" m="auto" mt="30px">
       <form onSubmit={handleSubmit}>
       <Stack spacing='24px'>
      <FormLabel>
        Name:
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </FormLabel>
      <FormLabel>
        Email:
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </FormLabel>
      <FormLabel>
        Password:
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
      </FormLabel>
      <FormLabel>
        Address:
        <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)}  required/>
      </FormLabel>
      <FormLabel>
        Phone:
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
      </FormLabel>
      <Button onClick={Order} type="submit" colorScheme='blue'>Order</Button>
      </Stack>
    </form>
    </Box>
    </Box>
  )
}

export default Checkout

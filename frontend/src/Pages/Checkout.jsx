import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCheckout } from '../Redux/CheckoutReducer/actionCreator';
import { Box, Button, Divider, FormLabel, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

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
      <Box w="35%" m="auto">
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
      <Button onClick={Order} type="submit" colorScheme='blue'>Checkout</Button>
      </Stack>
    </form>
    </Box>
    </Box>
  )
}

export default Checkout

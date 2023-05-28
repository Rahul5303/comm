import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { addToCart, singleProducts } from "../Redux/AppReducer/actionCreator";
import { AddCart } from "../Redux/CartReducer/actionCreator";
// import { AddCart } from '../Redux/CartReducer/actionCreator';

const SingleProduct = () => {
  const toast = useToast();
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.AppReducer.product);
  console.log(product);
  const navigate = useNavigate();

  //   const [currentproducts, setCurrentProducts] = useState({});

  useEffect(() => {
    dispatch(singleProducts(id));
  }, []);

  // // add to cart

  const AddhandleCart = () => {
    dispatch(AddCart({ ...product, count: 1 }));
    toast({
      title: "Data Added To Cart.",
      description: "Successfully Added to Cart.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    navigate("/cart");
  };
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  // // qunatity decrese and increse value

  // const handleIncreaseQuantity = (product) => {
  //   const updatedProduct = { ...product, quantity: product.quantity + 1 };
  //   dispatch(addToCart(updatedProduct));
  // };

  // const handleDecreaseQuantity = (product) => {
  //   if (product.quantity > 1) {
  //     const updatedProduct = { ...product, quantity: product.quantity - 1 };
  //     dispatch(addToCart(updatedProduct));
  //   }
  // };

  //   useEffect(() => {
  //     if (id) {
  //       const currentproducts = products.find((shoe) => shoe.id === Number(id));
  //       currentproducts && setCurrentProducts(currentproducts);
  //     }
  //   }, [id]);

  // const AddhandleCart=()=>{
  //   dispatch(AddCart({...product,count:1}));
  //   toast({
  //       title: 'Data Added To Cart.',
  //       description: "Successfully Added to Cart.",
  //       status: 'success',
  //       duration: 2000,
  //       isClosable: true,
  //     })
  //     navigate("/cart");

  // }

  return (
    <Box>
      <Navbar />
      <Heading fontFamily="Arial" marginTop="20px">ProductDetails Page</Heading>
      <Divider size="sm" color="black"/>
      
      {/* <Box boxShadow='lg' p='20' m='auto' rounded='md' w="70%"> */}
      <Card direction={{ base: 'column', sm: 'row' }}
      marginTop="20px"
  overflow='hidden'
  variant='outline'>
        
          <Image
             maxW={{ base: '100%', sm: '200px' }}
            src={`${product.image}`}
            alt="image"
            objectFit="cover"
          />
          <Stack>
            {/* <Text fontSize="2xl"></Text> */}
            <CardBody>
            <Heading size="md">{product?.name}</Heading>
            <Text  py='2'>{product?.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              Price:₹{product?.price}
            </Text>
            </CardBody>
       
       

        {/* <Container>
      <Text fontSize="2xl">Description:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </Text>
      </Container> */}
        {/* <Button onClick={AddhandleCart} colorScheme="blue" style={{width:"20%",margin:"auto",marginTop:"20px"}}>Add to Cart</Button> */}
        {/* <Button onClick={() => handleIncreaseQuantity(product)}>+</Button>
          <Button onClick={() => handleDecreaseQuantity(product)}>-</Button> */}
 <CardFooter>
    
        <Button
          onClick={AddhandleCart}
          colorScheme="blue"
          ml="170px"
          mb="100px"
          
        >
          Add to Cart
        </Button>
      
        </CardFooter>
        {/* </Box> */}
        </Stack>
      </Card>
    </Box>
  );
};

export default SingleProduct;

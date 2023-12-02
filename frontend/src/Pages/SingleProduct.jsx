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

  return (
    <Box>
      <Navbar />
      <Heading fontFamily="Arial" marginTop="20px">ProductDetails Page</Heading>
      <Divider size="sm" color="black"/>
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

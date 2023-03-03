import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'

import { useState,useEffect } from 'react';

  function CardItemData(){
 
    let carddata = JSON.parse(localStorage.getItem("newcard_data"));
    if (carddata == null) {
        carddata = []
    }
    console.log(carddata)
   const[grandTotal,setGtrandTotal]=useState(1);
  //  const[grandTotal,setGtrandTotal]=useState(1);
   const[mainData,setMainData]=useState([]);
   const[value,setValue]=useState([])
   const[sum,setSum]=useState(0)
  
   

    useEffect(() => {

      setMainData(carddata)

      setValue(carddata)
      
    
   
    }, []);

    
  
    const onClickDelete=(id)=>{
      alert("This data will be Deleted From Your Card")
       let filte=mainData.filter((e)=>{
        return e.id!==id 
       })
      
       localStorage.setItem("newcard_data", JSON.stringify(filte));
       setMainData(filte)
    }

   
    
    let onChangeQuantity=(e,id)=>{
     
      console.log(e)
    const updatedData = mainData.map((item) =>
        item.id === id ? { ...item, quantity: e} : item
      );
      setMainData(updatedData);
    //  console.log(value)
      
    }
    useEffect(() => {

     
      let sumvalueabc=0
      
      
    for(let i=0;i<mainData.length;i++){
    sumvalueabc+=(+(mainData[i].quantity))*(+(mainData[i].price))
     }
     setSum(sumvalueabc)
   
    }, [mainData]);

    console.log(mainData)
     return(
     <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
           { `Shopping Cart (${mainData.length} items)`}
          </Heading>
  
          <Stack spacing="6">
            {mainData?.map((item) => (
              <CartItem key={item.id} {...item}  onClickDelete={onClickDelete}
              onChangeQuantity={onChangeQuantity} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary grandTotal={sum}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>)
  }

 export default CardItemData


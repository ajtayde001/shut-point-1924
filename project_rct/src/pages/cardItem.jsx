import {Link,Heading,ButtonGroup, Button,Divider,Text,Stack,Image,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function CardItem({data,cardData}){
    // console.log(data)
  
    return(
        // <Link href={`/products/${data.id}`}>
     
     <Card w="90%" >
        <CardBody>
        <Link href={`/products/${data.id}`}>
          <Image
            src={data.avatar}
            alt={data.name}
            borderRadius='lg'
            w="100%" h="320px"
           
          />
              </Link>
          <Stack mt='6' spacing='3'>
          <Link href={`/products/${data.id}`}> 
            <Heading size='md'>{data.name}</Heading>  </Link>
            {/* <Text>
            {data.discription}
            </Text> */}
            <Text color='blue.600' fontSize='2xl'>
            ₹-{data.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={()=>cardData(data.id)}>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
        // </Link>
        
    )
}

export default CardItem
import {Link,Heading,ButtonGroup, Button,Divider,Text,Stack,Image,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function CardItem({data}){
    // console.log(data)
  
    return(
        <Link href={`/products/${data.id}`}>
     
     <Card w="90%">
        <CardBody>
          <Image
            src={data.avatar}
            alt={data.name}
            borderRadius='lg'
            w="100%" h="320px"
           
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{data.name}</Heading>
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
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
        </Link>
        
    )
}

export default CardItem
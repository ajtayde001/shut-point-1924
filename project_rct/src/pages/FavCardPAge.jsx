import { Link, Heading, ButtonGroup, Button, Divider, Text, Stack, Image, Card, CardHeader, CardBody, CardFooter ,Center} from '@chakra-ui/react'

function CardFavItem({data,onClickDelete,cardData}) {
 console.log(data)

  return (
   

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
        <ButtonGroup spacing='20'>
       
          <Button variant='ghost' colorScheme='blue'
          
           onClick={() => cardData(data.id)}
           >
            Add to cart
          </Button>
          <Button variant='ghost' colorScheme='blue'
          
           onClick={() => onClickDelete(data.id)}
           >
           DELETE
          </Button>
          
          
        </ButtonGroup>
      </CardFooter>
    </Card>
    // </Link>

  )
}
export default CardFavItem
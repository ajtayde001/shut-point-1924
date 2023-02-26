import { Link, Heading, ButtonGroup, Button, Divider, Text, Stack, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FiGift ,FiHeart} from 'react-icons/fi'
import { FaHeart} from 'react-icons/fa'
import {useState,useEffect} from 'react'
function CardItem({ data, cardData ,FavData,hrtIcone}) {
  // console.log(data)
  const [fav, setFav] = useState(false);
  let isFav;
  // console.log(data)
  let favdata = JSON.parse(localStorage.getItem("newfav_data"));
    if (favdata == null) {
        favdata = []
    }
  isFav=  favdata.filter(item=>item.id==data.id);
  return (
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
        <ButtonGroup spacing='20'>
          <Button variant='ghost' colorScheme='blue' onClick={() => cardData(data.id)}>
            Add to cart
          </Button>
          <div role={'button'}
onClick={() =>{setFav(!fav); FavData(data.id,fav)}}
            style={{

              fontSize: "30px"
            }}>
              {
             isFav.length>0 ? <FaHeart color='red'/>:fav?  <FaHeart color='red'/> :<FiHeart color='red'/>
            
              }
              
           {/* {hrtIcone} */}
          </div>
        </ButtonGroup>
      </CardFooter>
    </Card>
    // </Link>

  )
}

export default CardItem
import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState,useEffect } from 'react'


export const CartItem = (props) => {
  const[qvalue,setqvalue]=useState(1)
  const {
    isGiftWrapping,
    name,
    id,
    discription,
    quantity,
    avatar,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
   
  } = props

  const QuantitySelect = (props) => {
    return (
      <Select
        maxW="64px"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
        {...props}
        onChange={(e) => {
          onChangeQuantity(e.target.value,id)
          setqvalue(e.target.value)
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    )
  }
  

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={discription}
        image={avatar}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          // onChange={(e) => {
          //   onChangeQuantity(e.target.value,id)
          // }}
        />
        <PriceTag price={price*qvalue} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={()=>onClickDelete(id)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline" onClick={()=>onClickDelete(id)}>
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          // onChange={(e) => {
          //   onChangeQuantity(e.target.value,id)
          // }}
        />
        <PriceTag price={price*qvalue} currency={currency} />
      </Flex>
    </Flex>
  )
}



import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Select } from '@chakra-ui/react'
import { color } from 'framer-motion';
const getData = (url) => {
  return fetch(url).then((res) => res.json())
}

export default function ProductPAge() {
  const val = useParams()

  console.log(val)
  const [products, setProducts] = useState({})

  const fetchApiData = async () => {
    try {
      const data = await getData(`https://63f70245833c7c9c607b12bc.mockapi.io/product_eagle/${val.user_id}`)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }


  }
  console.log(products)

  useEffect(() => {
    fetchApiData()

  }, []);


  return (
    <div>
      <h2>.</h2>
      <div className="products-wrapper" style={{

        alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        // height:"500px",
        margin: "auto",

      }}>


        <div style={{
          display: "flex",
          alignItems: "center",
          width: "90%",
          // height:"500px",
          margin: "auto",
          // border: "2px solid black",
          gap: "40px",
          marginTop: "50px"
        }}>
          <div >
            <img src={products?.avatar} alt={products?.name} style={{
              width: "500px",
              height: "600px",
            }} />
          </div>
          < div className="brand">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>{products?.name}
            </h1>

            <h4> ₹- {products?.price}</h4>
            {products?.discription}
            <p></p>
            <div style={{
              marginTop: "20px",
              width: "200px",
              height: "60px",
              border: "2px solid black",
              
            }} >
              <Select style={{ border:"none",
              MozUserFocus:"none"}} 
              placeholder='Size'>
                <option value='option1'>S</option>
                <option value='option2'>M</option>
                <option value='option3'>L</option>
                <option value='option3'>XL</option>
                <option value='option3'>XXL</option>
              </Select>
            </div>
            <div  style={{  display: "flex", gap: "30px"}}>
              <div>

                <button style={{
                  marginTop: "20px",
                  width: "200px",
                  height: "60px",
                  border: "2px solid black",
                  backgroundColor: "black",
                  color: "white"

                }}  > Add To Card</button>
              </div>
              <div>

                <button style={{
                  marginTop: "20px",
                  width: "80px",
                  height: "60px",
                  border: "2px solid black",
                  // backgroundColor: "black",
                  // color: "white"
                  fontSize: "30px"
                }}> ♡</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
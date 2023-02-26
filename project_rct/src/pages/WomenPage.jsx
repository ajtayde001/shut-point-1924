import { useState, useEffect ,useContext} from 'react'
import { Link, useSearchParams } from "react-router-dom";
import CardItem from './cardItem';
import Accodion from './Accodion';
import { AuthConetxt } from '../Context/AuthContextProvider';
import { CircularProgress, CircularProgressLabel ,Spinner} from '@chakra-ui/react'
const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

const getNumber = (page) => {
    let cPage = Number(page)
    return cPage
}


const filterArray=[{
    "type":"Category",
    "list": [
        "90s Boyfriend",
        "Artist Flare Jean",
        "Bags",
        "Belts",
        "Curvy Skinny",
        "Graphic Tees",
        "Hats",
        "High Waisted Jeggings",
        "Jackets",
        "Jeans",
        "Jegging",
        "Jewelry",
        "Joggers",
        "Jumpsuits",
        "Kickboot",
        "Mask",
        "Maxi Dresses",
        "Midi Dresses",
        "Mini Dresses",
        "Mom Jean",
        "Pants",
        "Rompers",
        "Shift Dresses",
        "Shirt Dresses",
        "Shirts",
        "Shoes",
        "Shorts",
        "Skinny Kick",
        "Skirts",
        "Slim Straight",
        "Socks",
        "Sunglasses",
        "Sweaters",
        "Sweatshirts",
        "T-Shirts",
        "Tom Girl",
  ]
  },
  {
    "type":"Product Type",
    "list": [
      
"2 Pack Socks",
"3 Pack Masks",
"3 Pack Socks",
"5 Pack Socks",
"90s Boyfriend",
"Artist Flare - Hi Rise",
"Artist Flare Jean",
"Baggy Joggers",
"Bags",
"Belts",
"Boyfriend Joggers",
"Button Down Shirts",
"Button Up Shirts",
"Cami & Crop Tops",
"Cami & Crop Tops",
"Cardigans",
"Corduroy Jackets",
"Crew Neck T-Shirts",
"Crop Tops",
"Culottes",
"Curvy Skinny",
"Denim Jackets",
"Denim Shorts",
"Denim Skirts",
"Earrings",
"Flannel Shirts",
"Graphic Tees",
"Hats",
"Henley T-Shirts",
"High Waisted Jeggings",
"High-Waisted Jeans",
"Hoodies",
"Jackets",
"Jegging",
"Jegging - Curvy Hi Rise",
"Jegging - Curvy Highest Rise",
"Jegging - Curvy Super Hi Rise",
"Jegging - Hi Rise",
"Jegging - Hi Rise Crop",
"Jegging - Super Hi Rise",
"Jegging - Super Hi Rise Crop",
"Jegging Crop",
"Jegging Joggers",
"Joggers",
"Jumpsuits",
"Kickboot",
"Long Sheeve Shirts",
"Long Sleeve Shirts",
"Long Sleeve T-Shirts",
"Maxi Dresses",
"Maxi skirts",
"Midi Dresses",
"Midi Shorts",
"Midi Skirts",
"Mini Dresses",
"Mini Skirts",
"Mock Neck T-Shirts",
"Mom Jean",
"Mom Shorts",
"Mules",
"Pants",
"Plaid Blazer",
"Plaid Shirts",
"Polo Shirts",
"Rompers",
"Sandals",
"Shift Dresses",
"Shirt Dresses",
"Shirts & Blouses",
"Shirts & Blouses",
"Short Sleeve Shirts",
"Short sleeve T-shirt",
"Shorts",
"Skinny",
"Skinny Kick",
"Slim Straight",
"Socks",
"Solid Shorts",
"Sunglasses",
"Sweaters",
"Sweatshirts",
"Tom Girl",
"Tunic",
"V-Neck T-Shirts", ]
  },
  {
    "type":"Fit",
    "list": [
        "Boyfriend fit",
        "Classic fit",
        "Cropped",
        "Fit & Flare silhouette",
        "Fit & Flare silhouette",
        "Fitted",
        "Flare",
        "Girlfriend Jeans",
        "High Waisted",
        "High Waisted Fit",
        "Jegging",
        "Jegging Crop",
        "Jeggings",
        "Jumpsuit fit",
        "Kick Bootcut",
        "Loose fit",
        "Maxi fit",
        "Mom Jeans",
        "Mom Shorts", ]
  },
  {
    "type":"Sizes",
    "list": [
      "l",
"xl"  ]
  },
  {
    "type":"Color",
    "list": [
      "black",
"blue" ,"red","green" ]
  },
  {
    "type":"Price",
    "list": [
        
        "588 AND ABOVE ",
        "1000 AND ABOVE",
       ]
  },
  {
    "type": "Sort",
    "list": [
        "price:lowest first",
        "price:hightest first", "Discount"]
}]
function WomenPage(){
    const {serach}= useContext(AuthConetxt);
    const [selectedFilter, setSelectedFilter] = useState('')

    let carddata = JSON.parse(localStorage.getItem("newcard_data"));
    if (carddata == null) {
        carddata = []
    }
    const [product, setProduct] = useState([])


    const [loading, setloading] = useState(false)
    let [serch, setSarch] = useSearchParams()
    const [page, setPAGE] = useState(getNumber(serch.get("page")) || 1)

    const fetchApiData = async () => {
        setloading(true)
        try {
            const data = await getData(`https://63f70245833c7c9c607b12bc.mockapi.io/product_eagle`)
         
            let filteredData;
   
 
    setProduct(data)
    let price;
 

    if(selectedFilter=='588 AND ABOVE' )
  {
      price=588;
  }
  else if(selectedFilter=='1000 AND ABOVE' )
  {
      price=1000;
  }
      if(selectedFilter)
      {
        if(selectedFilter=='price:lowest first')
        {
            console.log("here-->>",data)
            data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            console.log("after here-->>",data)
            setProduct(data)
            setloading(false)
            return;
        }
        if(selectedFilter=='price:hightest first')
        {
            console.log("here-->>",data)
            data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            console.log("after here-->>",data)
            setProduct(data)
            setloading(false)
            return;
        }
        if(selectedFilter=='Discount')
        {
            console.log("here-->>",data)
            data.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
            console.log("after here-->>",data)
            setProduct(data)
            setloading(false)
            return;
        }
   filteredData=data.filter(item=>item.subTypes===selectedFilter ||item.size===selectedFilter|| item.color===selectedFilter  || item.price> price )
   setProduct(filteredData)
         
      }
      if(serach)
    {
    
    const filteredData =  product.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(serach.toLowerCase())
    })
    console.log("___________",filteredData)
    setProduct(filteredData)
}
     setloading(false)
            
          } catch (error) {
              setloading(false)
              console.log(error)
          }


    }
 

    useEffect(() => {
        fetchApiData()

    }, [page,selectedFilter,serach]);


    useEffect(() => {
        setSarch({ page: page })
    }, [page]);

    const cardData=(id)=>{
   
    for (let i = 0; i < product.length; i++) {
        if(product[i].id==id){
            carddata.push({...product[i],quantity:1})
        }
    }
    localStorage.setItem("newcard_data", JSON.stringify(carddata));
    // console.log(menData)
    }

    return(
        <div>
             
             <div style={{
                 position: "fixed",
                 top: 0,
                 left: 0,
                
                 height:1000,
                width: "300px",
                margin: "auto",
                padding: "10px",
                marginTop: "100px"
            }}>
                <div >
                <b>Filter</b>
                <div style={{color:'gray'}}>{21}  items </div>
                </div>
                <Accodion list={filterArray} setSelectedFilter={setSelectedFilter}  />

            </div>
            <div>
           
           <div className="products-wrapper" style={{
               display: "grid",
               gridTemplateColumns: "repeat(3, 1fr)",
               alignItems: "center",
               justifyContent: "space-around",
               width: "80%",
               margin: "auto",
               gap: "10px",
            
               marginLeft:"250px"
           }}>



               {     loading ? <div style={{
               display: "flex",

               //  border:"2px solid black",
               justifyContent: "center",
              

           }}><Spinner /></div>:
           product.length>0 ?
           product?.map((e) => {
if(e.mainTypes==='women')
                   return (
                       <CardItem data={e} cardData={cardData}
                        />
                       
                   )


               }):<div style={ {display: "flex",justifyContent:'center'}}>
                   No Data</div>}
               

           </div>
           <br /><br />
           {/* <div style={{
               display: "flex",

               //  border:"2px solid black",
               alignItems: "center",
               width: "200px",
               margin: "auto",
               padding: "10px"

           }}>
               <button disabled={page === 1} onClick={() => setPAGE(page - 1)} style={{
                   border: "2px solid black",
                   alignItems: "center",

                   margin: "auto",
                   padding: "10px"

               }}> pre </button>

               <button disabled style={{
                   border: "2px solid black",
                   alignItems: "center",

                   margin: "auto",
                   padding: "10px"

               }}>{page}</button>
               <button onClick={() => setPAGE(page + 1)} style={{
                   border: "2px solid black",
                   alignItems: "center",

                   margin: "auto",
                   padding: "10px"

               }}>next</button>
           </div> */}

       </div>
        </div>
    )
}

export default WomenPage
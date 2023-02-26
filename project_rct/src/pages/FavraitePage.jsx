
// import CardItem from './cardItem';
// import Accodion from './Accodion';

import { SimpleGrid } from '@chakra-ui/react'
import { useEffect,useState } from 'react';
import CardFavItem from './FavCardPAge';

function FavData() {
    let favdata = JSON.parse(localStorage.getItem("newfav_data"));
    if (favdata == null) {
        favdata = []
    }
  
    let carddata = JSON.parse(localStorage.getItem("newcard_data"));
    if (carddata == null) {
        carddata = []
    }
const[mainData,setMainData]=useState([]);
console.log(favdata)
useEffect(() => {

    setMainData(favdata)

    
    
  
 
  }, []);
  const cardData = (id) => {

    for (let i = 0; i < mainData.length; i++) {
        if (mainData[i].id == id) {
            carddata.push({ ...mainData[i], quantity: 1 })
        }
    }
    localStorage.setItem("newcard_data", JSON.stringify(carddata));
    // console.log(menData)
}
  

  const onClickDelete=(id)=>{
    alert("This data will be Deleted From Your Card")
     let filte=mainData.filter((e)=>{
      return e.id!==id 
     })
    
     localStorage.setItem("newfav_data", JSON.stringify(filte));
     setMainData(filte)
  }

    return (<div>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing='40px' className="products-wrapper" style={{

            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
            margin: "auto",
            gap: "10px",


            marginLeft: "250px"
        }}> 
        {mainData?.map((e)=><CardFavItem data={e}
        onClickDelete={onClickDelete}
        cardData={cardData}/>)}
        </SimpleGrid>
    </div>)
}
export default FavData

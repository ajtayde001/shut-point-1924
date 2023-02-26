
import React from 'react'
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react'
import { AuthConetxt } from '../Context/AuthContextProvider';
import CardItem from './cardItem';
import Accodion from './Accodion';
import { SimpleGrid } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel, Spinner } from '@chakra-ui/react'
const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

const getNumber = (page) => {
    let cPage = Number(page)
    return cPage
}

const filterArray = [{
    "type": "Category",
    "list": [
        "shirt",
        "shorts",
        "belt",
        "Athletic Fit Jeans",
        "Baggy Jeans",
        "Bootcut Jeans",
        "Bottoms",
        "Chinos",
        "Denim Joggers",
        "Graphic Tees",
        "Hats",
        "Hoodies",
        "Jackets",
        "Joggers",
        "Loose Fit Jeans",

        "Skinny Jeans",
        "Slim Jeans",
        "Slim Straight Jeans",
        "Socks",
        "Straight Jeans",
        "Sweaters",
        "T-Shirts",
        "Tapered Jeans",
        "Underwear",
        "Wallets"
    ]
},
{
    "type": "Price",
    "list": [

        "588 AND ABOVE ",
        "1000 AND ABOVE",
    ]
},
{
    "type": "Product Type",
    "list": [
        "Bootcut Jeans",
        "Hats"]
},
{
    "type": "Fit",
    "list": [
        "Original Bootcut",
        "Hats"]
},
{
    "type": "Sizes",
    "list": [
        "l",
        "xl"]
},
{
    "type": "Color",
    "list": [
        "black",
        "blue", "red", "green"]
},{
    "type": "Sort",
    "list": [
        "price:lowest first",
        "price:hightest first", "Discount"]
}
]


function MenPage() {
    const { serach } = useContext(AuthConetxt);
    let carddata = JSON.parse(localStorage.getItem("newcard_data"));
    if (carddata == null) {
        carddata = []
    }
    let favdata = JSON.parse(localStorage.getItem("newfav_data"));
    if (favdata == null) {
        favdata = []
    }
    const [product, setProduct] = useState([])
    const [hrtIcone, sethrtIcone] = useState("♡")
    const [selectedFilter, setSelectedFilter] = useState('')

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


            if (selectedFilter == '588 AND ABOVE') {
                price = 588;
            }
            else if (selectedFilter == '1000 AND ABOVE') {
                price = 1000;
            }
            if (selectedFilter) {
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

                filteredData = data.filter(item => item.subTypes === selectedFilter || item.size === selectedFilter || item.color === selectedFilter || item.price > price)

                setProduct(filteredData)

            }
            if (serach) {

                const filteredData = product.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(serach.toLowerCase())
                })
                console.log("___________", filteredData)
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

    }, [page, selectedFilter, serach]);


    useEffect(() => {
        setSarch({ page: page })
    }, [page]);

    const cardData = (id) => {

        for (let i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                carddata.push({ ...product[i], quantity: 1 })
            }
        }
        localStorage.setItem("newcard_data", JSON.stringify(carddata));
        // console.log(menData)
    }
    const FavData = (id) => {
        let sstIcone;
        for (let i = 0; i < product.length; i++) {
            if (product[i].id == id) {
                favdata.push({ ...product[i], quantity: 1 })
            //    sstIcone="❤"
            }
        }
        localStorage.setItem("newfav_data", JSON.stringify(favdata));
        // console.log(menData)
        // sethrtIcone(sstIcone)
    }

    return (

        <div style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            padding: "10px",
            marginTop: "1px",
            gap: "50px",

        }}>

            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                  width: "300px",
                margin: "auto",
                padding: "10px",
                marginTop: "100px"
            }}>
                <div >
                    <b>Filter</b>
                    <div style={{ color: 'gray' }}>{product.length}  items </div>
                </div>
                <div style={{ height: 800, overflow: 'scroll' }}>
                    <Accodion list={filterArray} setSelectedFilter={setSelectedFilter} />
                </div>
            </div>

            <div>

            <SimpleGrid columns={[1,1, 2, 3]} spacing='40px' className="products-wrapper" style={{
                   
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "80%",
                    margin: "auto",
                    gap: "10px",


                    marginLeft: "250px"
                }}>



                    {loading ? <div style={{
                        display: "flex",


                        justifyContent: "center",


                    }}><Spinner /></div> :
                        product.length > 0 ?
                            product?.map((e) => {
                                if (e.mainTypes === 'men')
                                    return (
                                        <CardItem data={e} cardData={cardData}
                                        FavData={FavData}
                                        hrtIcone={hrtIcone}
                                        />

                                    )


                            }) : <div style={{ display: "flex", justifyContent: 'center' }}>
                                No Data</div>}


                </SimpleGrid>
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
        // <div style={{
        //     //  border:"2px solid black",
        //     alignItems: "center",
        //     width: "80%",
        //     margin: "auto",
        //     padding: "20px"

        // }} key={e.id}>
        //     <img src={e.avatar} alt={e.name} style={{ width: "100%", }} />
        //     <h3 className="name">{e.name}</h3>

        //     <div className="price">{e.price}</div>
        //     <Link to={`/products/${e.id}`} >Read more</Link>
        // </div>
    )
}

export default MenPage

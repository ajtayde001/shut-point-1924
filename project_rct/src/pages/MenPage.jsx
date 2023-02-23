import React from 'react'
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import CardItem from './cardItem';
import Accodion from './Accodion';
const getData = (url) => {
    return fetch(url).then((res) => res.json())
}

const getNumber = (page) => {
    let cPage = Number(page)
    return cPage
}




function MenPage() {
    const [product, setProduct] = useState([])
    let [serch, setSarch] = useSearchParams()
    const [page, setPAGE] = useState(getNumber(serch.get("page")) || 1)

    const fetchApiData = async () => {
        try {
            const data = await getData(`https://63f70245833c7c9c607b12bc.mockapi.io/product_eagle?mainTypes=women&page=${page}&limit=15`)
            console.log(data)
            setProduct(data)
        } catch (error) {
            console.log(error)
        }


    }
    console.log(product)

    useEffect(() => {
        fetchApiData()

    }, [page]);


    useEffect(() => {
        setSarch({ page: page })
    }, [page]);


let menData=product.filter((e)=>{
    return e.mainTypes=="men"
})
console.log(menData)

    return (
        <div style={{
            display: "flex",  
            width: "90%",
            margin: "auto",
            padding: "10px",
            marginTop: "1px"
        }}>
             <div style={{
           border:"2px solid black",
            width: "200px",
            margin: "auto",
            padding: "10px",
            marginTop: "1px"
        }}>
                <Accodion />
            </div>
            <div>
                
            <div className="products-wrapper" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                alignItems: "center",
                justifyContent: "space-around",
                width: "80%",
                margin: "auto",
                gap: "10px"
            }}>

                {product?.map((e) => {
                 
                        return (
                            <CardItem data={e} />
                        
                        )
                    

                })}

            </div>
            <br /><br />
            <div style={{
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
            </div>
           
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

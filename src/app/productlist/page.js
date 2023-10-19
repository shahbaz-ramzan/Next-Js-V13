
"use client"
import { useEffect, useState } from "react"
export default function ProductList() {

    const [product, setProduct] = useState([])
    const [styleState,setStyleState]=useState({backgroundColor:"green"})
    console.log("color",styleState)

    async function fetchProduct() {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProduct(data.products)

    }

    useEffect(() => {
        fetchProduct()
    }, [])

     function price(price){
        setStyleState({backgroundColor:"yellow"})
        alert(price)
    }

    function discount(discount){
        alert(discount)
    }

    function stock(stock){
        alert(stock)
    }


    return (
        <div>
            <h1>Product List Page</h1>
            {
                product.map((item) => (
                    <div key={item.id}>
                        <h3>Name:{item.title}</h3>
                        <button onClick={()=>price(item.price)} style={styleState}>Check Price </button>
                        <button onClick={()=>discount(item.discountPercentage)} style={{backgroundColor:"blue"}}>Check Discount Percentage</button>
                        <button onClick={()=>stock(item.stock)} style={{backgroundColor:"green"}}>Check Stock</button>
                    </div>


                ))
            }
        </div>
    )
}

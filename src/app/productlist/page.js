
"use client"
import { useEffect, useState } from "react"
export default function ProductList() {

    const [product, setProduct] = useState([])

    async function fetchProduct() {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProduct(data.products)

    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div>
            <h1>Product List Page</h1>
            {
                product.map((item) => (
                    <div key={item.id}>
                        <h3>Name:{item.title}</h3>
                        <button onClick={()=>alert(item.price)}>Check Price </button>
                        <button onClick={()=>alert(item.discountPercentage)}>Check Discount Percentage</button>
                        <button onClick={()=>alert(item.stock)}>Check Stock</button>
                    </div>


                ))
            }
        </div>
    )
}


"use client"
import { useEffect,useState } from "react"
export default function ProductList(){

    const [product,setProduct]=useState([])

    async function  fetchProduct (){
        const  res= await fetch("https://dummyjson.com/products")
        const data= await res.json()
        setProduct(data.products)
        
    }

    useEffect( ()=>{
     fetchProduct()
    },[])

  return (
    <main>
        <h1>Product List Page</h1>
        {
            product.map((item)=>(

                <h3 key={item.id}>Name:{item.title},Price:{item.price}</h3>

            ))
        }
    </main>
  )
}

import Product from "./product"

async function getProducts(){
  let data=await fetch("https://dummyjson.com/products")
  data= await data.json()
  return data.products
}

export default async function page() {
  let returnValue= await getProducts()
  console.log("returnValue",returnValue)
  return (
    <main>
      <h1>server side rendering</h1>
      
      {
          returnValue.map((item)=>(
            <div key={item.id}>
              <h3>Name:{item.title}</h3>
              <Product price={item.price} discount={item.discountPercentage} stock={item.stock}/>
            </div>
          ))
      }
    
      
    </main>
  )
}

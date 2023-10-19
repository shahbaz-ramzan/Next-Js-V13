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
      <ol>
      {
          returnValue.map((item)=>(
            <li key={item.id}>Name:{item.title}</li>
          ))
      }
      </ol>
      
    </main>
  )
}

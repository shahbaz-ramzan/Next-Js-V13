"use client"
export default function Product(props) {
  return (
    <div>
        <button onClick={()=>alert(props.price)}>Check Price</button>
        <button onClick={()=>alert(props.discount)}>Check Discount Percentage</button>
        <button onClick={()=>alert(props.stock)}>Check Stock</button>
    </div>
  )
}

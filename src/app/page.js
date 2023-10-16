"use client"
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [name,setName]=useState("Shahbaz")
  const foo=(item)=>{
    setName("Ramzan")
  }

  const InnerComponent=()=>{
    return(
      <div>
        <h1>Inner Component</h1>
      </div>
    )
  }
  return (
    <main className={styles.main}>
     <h1>Events,Function and State</h1>
     <h2>My name is {name}</h2>
     <InnerComponent />
     <button onClick={()=>foo()}>Click Me</button>
 

    </main>
  )
}


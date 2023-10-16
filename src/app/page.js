"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router=useRouter()

  const navigate=(name)=>{

    router.push(name)
    
  }

  return (
    <main >
     <h1>Basic Routing | Make New Page </h1>
     <br></br>
     <Link href="/login">Go to Login Page</Link>
     <br></br>
     <br></br>
     <Link href="/about">Go to About Page</Link>
     <br></br>
     <br></br>
     <button onClick={()=>navigate("/login")}>Go to Login Page</button>
     <br></br>
     <br></br>
     <button onClick={()=>navigate("/about")}>Go to About Page</button>
    </main>
  )
}


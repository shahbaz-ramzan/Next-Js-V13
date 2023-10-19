"use client"
import "./globals.css"
import other from "./other.module.css"
import custom from "@/style/custom.module.css"
import Link from 'next/link'


export default function Home() {

    return (
        <main >
            
            <h1 className={custom.main}>Fetch Data with API in Client Component</h1>
            <h2 className={other.main}>This heading is for other module to apply css</h2>
            <ul className="navbar">
                <li>
                   <Link href="/productlist">Go to Product List Page with client side render</Link>
                </li>
                <li>
                   <Link href="/product">Go to Product Lists Page with server render </Link>
                </li>
            </ul>

        </main>
    )
}


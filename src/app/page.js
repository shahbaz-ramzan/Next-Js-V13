"use client"
import "./globals.css"
import Link from 'next/link'


export default function Home() {

    return (
        <main >
            
            <h1>Fetch Data with API in Client Component</h1>
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


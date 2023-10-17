"use client"
import Link from "next/link"
export default function AboutCollege() {
  return (
    <main>
        <h1>About College</h1>
        <br></br>
        <Link href="/">Go to home Page</Link>
        <br></br>
        <br></br>
        <Link href="/about">Go to About Page</Link>
        <br></br>
        <br></br>
        <Link href="/about/aboutcollege/collegehistory">Go to the College History Page</Link>
    </main>
  )
}

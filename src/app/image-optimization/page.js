import React from 'react'
import SvgImage from "../../../public/vercel.svg"
import Image from 'next/image'

export default function ImageOptimization() {
    return (
        <div>
            <h1>Image Optimization</h1>
            <h2>Heading H2</h2>
            <h3>Heading H3</h3>
            {/* <Image
                src={SvgImage} alt='image'
            /> */}
            <Image 
            src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='image'
            width={500}
            height={500} />
        </div>
    )
}

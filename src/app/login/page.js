"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Login=()=>{

    const router=useRouter()
    return(
        <main>
            <h1>Login Page</h1>
            <Link href="/" >Go to Home Page</Link>
            <br></br>
            <br></br>
            <button onClick={()=>router.push("/login/teacherlogin")}>Go to Teacher Login page</button>
            <br></br>
            <br></br>
            <button onClick={()=>router.push("/login/studentlogin")}>Go to Student Login Page</button>

        </main>
    )
}

export default Login
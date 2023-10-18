"use client"
import { useRouter } from "next/navigation"
export default function TeacherLogin() {
  const router=useRouter()
  return (
    <main>
      <h1 className="heading">Teacher Login</h1>
      <br></br>
      <button onClick={()=>router.push("/login")}>Go to  Login Page</button>
      <br></br>
      <br></br>
      <button onClick={()=>router.push("/")}>Go to Home Page</button>
    </main>
  )
}

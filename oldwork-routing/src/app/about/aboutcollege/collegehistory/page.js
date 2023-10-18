"use client"
import { useRouter } from "next/navigation"
export default function CollegeHistory() {
    const router = useRouter()

    const navigate = (path) => {
        router.push(path)
    }
    return (
        <main>
            <h1 className="heading">College History Page</h1>
            <br></br>
            <button onClick={() => navigate("/")}>Go to Home Page</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/about")}>Go to About Page</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/about/aboutcollege")}>Go to About College Page</button>
        </main>
    )
}


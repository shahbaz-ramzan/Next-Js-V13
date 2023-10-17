import Link from 'next/link'
import "./about.css"
export default function Layout({ children }) {
    return (
        <div>
            <ul className='about-main'>
                <li>
                    <h4>About Navbar</h4>
                </li>
                <li>
                    <Link href="/about">About main</Link>
                </li>
                <li>
                    <Link href="/about/aboutcollege">About College</Link>
                </li>
                <li>
                    <Link href="/about/aboutstudent">About Student</Link>
                </li>
                <li>
                    <Link href="/about/aboutcollege/collegehistory">College History</Link>
                </li>
            </ul>

            {children}

        </div>
    )
}

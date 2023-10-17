import Link from 'next/link'

export default function StudentList() {
  return (
    <main>
        <h1>Student List </h1>
        <ul>
            <li>
                <Link href="/studentlist/a" >A</Link>
            </li>
            <li>
                <Link href="/studentlist/b" >B</Link>
            </li>
            <li>
                <Link href="/studentlist/c" >C</Link>
            </li>
            <li>
                <Link  href="/studentlist/d">D</Link>
            </li>
            <li>
                <Link href="/studentlist/e">E</Link>
            </li>
            <li>
                <Link href="/studentlist/6">F</Link>
            </li>
            <li>
                <Link href="/studentlist/7" >G</Link>
            </li>
            <li>
                <Link href="/studentlist/8">H</Link>
            </li>
            <li>
                <Link href="/studentlist/9">I</Link>
            </li>
            <li>
                <Link href="/studentlist/11">K</Link>
            </li>
        </ul>
    </main>
  )
}

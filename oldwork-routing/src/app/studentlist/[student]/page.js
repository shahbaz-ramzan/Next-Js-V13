
"use client"
export default function StudentDetails({params}) {

  return (
    <main>
        <h1>Student Details </h1>
        <h3>{params.student}</h3>
        
    </main>
  )
}


import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Home Page</h1>
     <User name="Muhammad" />
     <User name="Shahbaz" />
     <User name="Ramzan" />

    </main>
  )
}

const User=(props)=>{
  return (
    <div>
      <h1>My Name is {props.name}</h1>
    </div>
  )
}

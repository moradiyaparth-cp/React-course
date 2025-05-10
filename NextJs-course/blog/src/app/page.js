"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("Peter")
  const router = useRouter()
  const navigation = (name)=>{
    router.push(name)
  }

  const apple = () => {
    // alert("Mangoo")
    setName("Doe")
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Events, function and state {name} </h1>
        {/* <button onClick={() => alert("Hello")}>Click Me</button> */}
        <button onClick={apple}>Click Me</button>
        <Link href="/login">Login</Link>
        <Link href="/about">About</Link>
        <button onClick={() => navigation("/login")}>Go to Login page</button>
        <button onClick={() => router.push("/about")}>Go to About page</button>
      </main>
    </div>
  );
}

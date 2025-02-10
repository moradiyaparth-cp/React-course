"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

 const Login = () =>{
    const router = useRouter();
   
    const navigate = (page) =>{
        router.push("/login/" + page)
    }
    return(
        <>
        <h1 className="heading">Login page</h1>
        <br />
        <Link href="/">Home</Link>
        <br />
        <br />
        <button onClick={ () => navigate("loginstudent")}>Login Student</button>
        <br />
        <br />
        <button  onClick={ () =>navigate("loginteacher")}>Login Teacher</button>
        </>
    )
 }

 export default Login
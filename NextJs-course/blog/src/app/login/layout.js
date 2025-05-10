
import Link from 'next/link'
import React from 'react'
// import { usePathname } from "next/navigation"
import './login.css'

const Layout = ({children}) => {
    // const pathName = usePathname();
    // console.log(pathName)
  return (
    <div>
        <ul className='login-menu'>
            <li>
                <h3>Login Navbar</h3>
            </li>
            <li>
                <Link href="/login">Login Main</Link>
            </li>

            <li>
                <Link href="/login/loginstudent">Student Login</Link>
            </li>

            <li>
                <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default Layout
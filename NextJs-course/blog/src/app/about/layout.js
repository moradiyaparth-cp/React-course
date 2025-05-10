import Link from 'next/link'
import React from 'react'
import './about.css'
const Layout = ({children}) => {
  return (
    <div>
        <ul className='about-menu'>
            <li>
                <h3>About Navbar</h3>
            </li>
            <li>
                <Link href="/about">About Main</Link>
            </li>

            <li>
                <Link href="/about/aboutstudent">About Student</Link>
            </li>

            <li>
                <Link href="/about/aboutcollege">About College</Link>
            </li>
        </ul>
        {children}
    </div>
  )
}

export default Layout
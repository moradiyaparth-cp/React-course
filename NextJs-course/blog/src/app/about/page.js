import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <h1 className="heading">About page</h1>
    <br />
    <br />
    <Link href="/">Home</Link>
    <br />
    <Link href="/about/aboutstudent">About Student</Link>
    <br />
    <Link href="/about/aboutcollege">About College</Link>
    </>
  )
}

export default About
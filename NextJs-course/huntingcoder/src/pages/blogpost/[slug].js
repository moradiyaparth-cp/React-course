import React from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    console.log(router.query)
    const {slug} = router.query
  return (
    <div>
      <h1>Title of the page: {slug}</h1>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, a veritatis. Velit voluptatibus dolorem ipsam consequatur quo vel perspiciatis repudiandae mollitia veniam eius!
      </div>
    </div>
  )
}

export default slug
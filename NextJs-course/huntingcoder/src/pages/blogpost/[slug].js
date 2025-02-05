import React from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    console.log(router.query)
    const {slug} = router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page: {slug}</h1>
        <div>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, a veritatis. Velit voluptatibus dolorem ipsam consequatur quo vel perspiciatis repudiandae mollitia veniam eius! 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam nesciunt nostrum quam ratione, optio, id illum atque eaque dolorem cumque magni laboriosam cum quaerat adipisci, voluptatibus dolor voluptates soluta? Ea incidunt vel vero quae recusandae! Impedit doloremque voluptatem voluptatum ipsum delectus dolore mollitia distinctio.
          </p>
        </div>
      </main>
    </div>
  )
}

export default slug
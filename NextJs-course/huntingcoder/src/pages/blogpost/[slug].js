import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <div>
          <p>
          {blog && blog.content}
          </p>
        </div>
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  return{
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
    const {slug} = context.params
    
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return{
      props: { myBlog: JSON.parse(myBlog) }
  }
}
// server side rendering
// export async function getServerSideProps(context) {
//     const {slug} = context.query
    
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog = await data.json()
 
//   return{
//       props: {myBlog}
//   }
// }

export default Slug
import React, {useEffect, useState} from 'react'
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import * as fs from 'fs';

const Blog = (props) => {
    console.log(props)
    const [blogs, setBlogs] = useState(props.allBlogs)
    // useEffect(() => {
      
    //   }, [])
 
  return (
    <div className={styles.container}>
        <main className={styles.main}>

        {blogs.map((blogitem)=>{
            return <div className={styles.blogItem} key={blogitem.title}>
            <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3></Link>
                <p>{blogitem.content.substr(0, 140)}...</p>
            </div>
        })}

        </main>
  </div>
  )
}

// server side rendering
// export async function getServerSideProps(context) {
//     let data = await fetch("http://localhost:3000/api/blogs")
//     let allBlogs = await data.json()

//     return{
//         props: {allBlogs}
//     }
// }


export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata") // wait karo jya sudhi promise resolve no thay tya sudhi
      let myfile;
      let allBlogs = [];
      for (let index = 0; index < data.length; index++) {
            const item = data[index];
            console.log(item)
            myfile = await fs.promises.readFile(("blogdata/" + item), 'utf-8')
            console.log(myfile)
            allBlogs.push(JSON.parse(myfile)) // allBlogs ni undar element ne add kari dese, string ne parse kari ne object banavi dese
          }

    return{
        props: {allBlogs}
    }
}
export default Blog
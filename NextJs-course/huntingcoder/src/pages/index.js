import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
    <style jsx>
    {`
      h2{
        font-size: 38px;
        padding: 10px;
      }
      h3{
        font-size: 28px;
        padding: 10px;
      }
    `}
    </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
   
      
        <main className={styles.main}>
         
          <h1>Hunting Coder</h1>
          <div className={styles.imagewrap}>

          <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158} alt="image not load"/>

          </div>
        <div className={styles.blogs}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2025?</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2025?</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2025?</h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </div>
        </div>
        </main>
     
    </>
  );
}

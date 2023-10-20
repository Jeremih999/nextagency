import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData() {
  
  const res = await fetch("http://localhost:3000/api/posts", {
    cache : "no-store"
  })

  if(!res.ok){
    throw new Error("failed to fetch data")
  }

  return res.json()

}

export const metadata = {
  title: 'Agency Blog ',
  description: 'This is the blog page for the agency',
}

 const blog = async ()=>{

  const data = await getData();

  // console.log(data)
    return <div className={styles.container}>
      
      {data.map((item)=>(
        <Link href={`/blog/${item._id}`} className={styles.post} key={item._id}>
        <div className={styles.imgContainer}>
            <Image src={item.image} alt="image" fill={true} className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1>{item.title}</h1>
            <p> {item.desc}
             </p>
        </div>
      </Link>
      ))}
    </div>
}

export default blog
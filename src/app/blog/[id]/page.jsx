import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";


async function getData(id) {
  
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache : "no-store"
    })
  
    if(!res.ok){
      return notFound()
    }
  
    return res.json()
  
  }

  export async function generateMetadata({ params }) {

    const post = getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}


async function BlogPost({params}) {

    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h1>{data.title}:
                    </h1>
                    <p>{data.desc}</p>
                    <div className={styles.imageContainer}>
                        <Image src="/avatar3.jpg" alt="image" fill={true} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={data.image} alt="image" fill={true} className={styles.image} />
                </div>
            </div>
            <div className={styles.body}>
                <p>
                {data.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost
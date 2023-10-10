import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";

const blog = ()=>{
    return <div className={styles.container}>
      <Link href={"/blog/1"} className={styles.post}>
        <div className={styles.imgContainer}>
            <Image src="/blog55.jpg" alt="image" fill={true} className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1>This is the heading for the post</h1>
            <p>lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
             </p>
        </div>
      </Link>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
            <Image src="/blog51.jpg" alt="image" fill={true} className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1>This is the heading for the post</h1>
            <p>lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
             </p>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
            <Image src="/blog52.jpg" alt="image" fill={true} className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1>This is the heading for the post</h1>
            <p>lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
             </p>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
            <Image src="/blog58.jpg" alt="image" fill={true} className={styles.image} />
        </div>
        <div className={styles.content}>
            <h1>This is the heading for the post</h1>
            <p>lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
             </p>
        </div>
      </div>
    </div>
}

export default blog
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = ()=>{
    return (
      <div className={styles.container}>
      <h1>Choose a Gallery</h1>
      <div className={styles.gallery}>

      <Link href={"/portfolio/category"} className={styles.imageContainer}>
          <h2>Illustrations</h2>
       </Link>
       
       <Link href={"/portfolio/category"} className={styles.imageContainer}>
          <h2>Websites</h2>
       </Link>
       <Link href={"/portfolio/category"} className={styles.imageContainer}>
          <h2>Applications</h2>
       </Link>
      </div>
      </div>
    )
}

export default Portfolio
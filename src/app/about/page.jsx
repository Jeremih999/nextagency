import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const about = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/aboutus.jpg' alt="Our team photo" />
        </div>
        </div>
    )

}

export default about
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const about = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/aboutagency.jpg' alt="Our team photo" fill={true}  />
        </div>
        <div className={styles.textContainer}>
           <div>

           </div>
           <div>
            
           </div>
        </div>
        </div>
    )

}

export default about
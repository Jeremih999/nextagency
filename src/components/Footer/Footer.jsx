import React from "react";
import styles from "./page.module.css"
import Image from "next/image";

const Footer = ()=>{
    return (
        <div className={styles.container}>
        <p>@2023, By jeremih Brown Ltds</p>
        <div>
          <Image src="/1.png" width={15} height={15} alt="Jeremih Facebook" />
          <Image src="/2.png" width={15} height={15} alt="Jeremih Instagram" />
          <Image src="/3.png" width={15} height={15} alt="Jeremih Twitter" />
          <Image src="/4.png" width={15} height={15} alt="Jeremih Youtube" />
        </div>
        </div>
    )
}

export default Footer
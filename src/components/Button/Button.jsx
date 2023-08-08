import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Button = ({Url, text})=>{
    return (
       <Link href={Url}><button className={styles.button}>{text}</button></Link>
    )
}

export default Button
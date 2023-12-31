import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'Agency Contact',
    description: 'contact the agency by filling the form',
  }

const contact = ()=>{
    return (
        <div className={styles.container}>
               <h1>Get In Touch</h1>
            <div className={styles.contactContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/contact.png" className={styles.image} fill={true} alt="An illustration" />
                </div>
                <div className={styles.contactForm}>
                    <input type="text" placeholder="Name"  required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea cols="30" rows="20" placeholder="Message"></textarea>
                    <Button Url={"#"} text={"Send"} />
                </div>
            </div>
        </div>
    )
}

export default contact
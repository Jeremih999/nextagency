import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
    title: 'About Agency',
    description: 'Get to know us better',
  }

const about = ()=>{
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
        <div className={styles.imageContainer}>
            <Image src='/aboutagency.jpg' alt="Our team photo" fill={true}  />
        </div>
        <div className={styles.imgText}> 
            <h1>DIGITAL STORYTELLERS</h1>
            <p>Handcrafting award winning digital experencies</p>
            </div>
        </div>
        
        <div className={styles.textContainer}>
           <div>
             <h1>Who Are We</h1>
             <p>
             Turning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industry. <br /> <br />
             Turning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industry<br /> <br />
             Turning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industry
             </p>
           </div>
           <div>
            <h1>What Do We Do</h1>
            <p>
            Turning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team from the global tech industryTurning your ideas into Reality. We bring together the team. <br /> 
            <br />
            -Creative illustrations <br /><br />
            -Dynamic Websites <br /> <br />
            -Fast and Handy Websites<br /> <br />
             
             <Button Url={"/contact"} text={"Contact"} />
            </p>
           </div> 
        </div>
        </div>
    )

}

export default about
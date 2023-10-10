import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";


function Category({ params }) {

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
               <div className={styles.categories}>
               <div className={styles.catContainer}>
                <div className={styles.contents}>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.desc}>
                        lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
                        dummy text use by developers to fill in text areas to visualize how it going to look 
                    </p>
                    <Button text={"see more"} Url={"#"} />
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.imageContainer}>
                        <Image src="/blog52.jpg" alt="Image" fill={true}  className={styles.image} />
                    </div>
                </div>

            </div>
            <div className={styles.catContainer}>
                <div className={styles.contents}>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.desc}>
                        lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
                        dummy text use by developers to fill in text areas to visualize how it going to look 
                    </p>
                    <Button text={"see more"} Url={"#"} />
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.imageContainer}>
                        <Image src="/hero.png" alt="Image" fill={true}  className={styles.image} />
                    </div>
                </div>

            </div>
            <div className={styles.catContainer}>
                <div className={styles.contents}>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.desc}>
                        lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
                        dummy text use by developers to fill in text areas to visualize how it going to look 
                    </p>
                    <Button text={"see more"} Url={"#"} />
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.imageContainer}>
                        <Image src="/blog55.jpg" alt="Image" fill={true}  className={styles.image} />
                    </div>
                </div>

            </div>

            <div className={styles.catContainer}>
                <div className={styles.contents}>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.desc}>
                        lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a 
                        dummy text use by developers to fill in text areas to visualize how it going to look 
                    </p>
                    <Button text={"see more"} Url={"#"} />
                </div>
                <div className={styles.imgCont}>
                    <div className={styles.imageContainer}>
                        <Image src="/blog58.jpg" alt="Image" fill={true}  className={styles.image} />
                    </div>
                </div>

            </div>

               </div>
               

        </div>
    )
}

export default Category


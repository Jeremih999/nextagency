import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { notFound } from "next/navigation"
import { items } from "./data";

function getData(cat) {
    const data = items[cat]

    if (data) {
        return data
    } else {
        return notFound()
    }


}


function Category({ params }) {

    const item = getData(params.category)

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.categories}>

                {item.map((item) => (
                    <div className={styles.catContainer} key={item.id}>
                        <div className={styles.contents}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>
                               {item.desc}
                            </p>
                            <Button text={"see more"} Url={"#"} />
                        </div>
                        <div className={styles.imgCont}>
                            <div className={styles.imageContainer}>
                                <Image src={item.image} alt="Image" fill={true} className={styles.image} />
                            </div>
                        </div>

                    </div>
                ))}



            </div>


        </div>
    )
}

export default Category


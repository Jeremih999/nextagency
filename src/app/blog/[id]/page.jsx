import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function BlogPost() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h1>This is a title: <br />
                        This is the second
                    </h1>
                    <p>lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                        lorem, lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how
                        it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                        lorem</p>
                    <div className={styles.imageContainer}>
                        <Image src="/avatar3.jpg" alt="image" fill={true} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/blog55.jpg" alt="image" fill={true} className={styles.image} />
                </div>
            </div>
            <div className={styles.body}>
                <p>
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                <br />
                <br />
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                <br />
                <br />
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is alorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                lorem ipsum dolet! ipsum is a dummy text use by developers to fill in text areas to visualize how 
                it going to look like in the main websites when it is fully done.lorem ipsum dolet! ipsum is a
                </p>
            </div>
        </div>
    )
}

export default BlogPost
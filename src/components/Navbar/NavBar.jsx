import Link from "next/link";
import React from "react";
import styles from "./page.module.css"

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  

const NavBar = ()=>{
    return (
        <div className={styles.container}>
           <Link href="/">Jeremih Agency</Link>
           <div className={styles.links}>
            {links.map(({id, title, url})=>(
                <Link href={url} key={id}>{title}</Link>
            ))}
           </div>
        </div>
        
    )
}

export default NavBar
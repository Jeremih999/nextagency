"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function register() {
    const [err, setErr] = useState(false)
    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault()

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            res.status = 201 && router.push("/dashboard/login?account successfully created")

        } catch (error) {
            setErr(true)
        }
    }
    return (
        <div className={styles.container}>
            <h1>Register Now</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" className={styles.input} required />
                <input type="email" placeholder="Enter Email" className={styles.input} required />
                <input type="password" placeholder="Enter password" className={styles.input} required />
                <button className={styles.button}>Submit</button>
            </form>
            <p>Already have an account? <Link href={"/dashboard/login"}>Login</Link></p>
        </div>
    )
}

export default register
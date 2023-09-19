import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Better Designs for your Digital Products.</h1>
            <p>Turning your ideas into Reality. We bring together the team from the global tech industry</p>
            <Button Url={'/portfolio'} text={"see our works"} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/hero.png" className={styles.image} fill={true} alt='Home illustration' />
          </div>
       </div>
    </main>
  )
  
}


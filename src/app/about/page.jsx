import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src='/about.jpg' width={500} height={300} className= {styles.image}/>
      </div>
      <div className= {styles.text}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>Hello there! 👋 I'm Mohamed Hussein, a recent graduate from Flatiron School with a solid foundation in full-stack web development. I thrive on turning innovative ideas into robust, user-friendly applications.</p>
      </div>

    </div>
  )
}

export default page
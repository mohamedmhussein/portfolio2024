import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src='/about.jpg' width={500} height={300}/>
      </div>
      <div>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi vel nulla praesentium nemo! In dolores, facere, officiis repudiandae voluptatum earum sunt nisi nobis, harum laboriosam recusandae iure omnis temporibus.</p>
      </div>

    </div>
  )
}

export default page
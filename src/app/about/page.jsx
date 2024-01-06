import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src='/about.jpg' width={600} height={400} className= {styles.image}/>
      </div>
      <div className= {styles.text}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>Hello there! 👋 I'm Mohammad El Prince, a recent graduate from Flatiron School with a solid foundation in full-stack web development.  As a lifelong learner, I continuously work on growing my technical knowledge. I enjoy tackling challenges head-on and crafting creative solutions to real-world problems. My belief in the power of teamwork guides me in achieving exceptional results. </p>
        <div className= {styles.buttons}>
          <a href='/portfolio'>My Work</a>
          <a href='/contact'>Contact Me</a>
        </div>
      </div>

    </div>
  )
}

export default page
import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className= {styles.container}>
        <h1><span>Mohammad</span> El Prince</h1>
        <p>This is my official portfolio website to showcase my web development activities</p>
        <a href="" className={styles.download}>Download Resume</a>
        <div className={styles.image_container}>
            <img src='/pattern.png' className={styles.background_pattern}/>
            <img src='/myimage.png' className={styles.my_image}/>
        </div>
        <div className={styles.social_links}>
          <a href=""></a>
          <a href=""></a>
        </div>
        
    </div>
  )
}

export default Home

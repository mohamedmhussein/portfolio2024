import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className= {styles.container}>
        <h1><span>Mohammad</span> El Prince</h1>
        <p>This is my official portfolio website to showcase my web development activities</p>
        <a href="">Download Resume</a>
        <div className={styles.image_container}>
            
        </div>
        
    </div>
  )
}

export default Home

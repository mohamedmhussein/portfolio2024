import React from 'react'
import styles from './Home.module.css'
import { FaLinkedin, FaSquareGithub  } from "react-icons/fa6";



const Home = () => {
  const social = {
    linkedin: "https://www.linkedin.com/in/mohamedhusseinofficial/",
    github: 'https://github.com/mohamedmhussein',
  }
  return (
    <div className= {styles.container}>
        <h1>I am <span>Mohammad</span></h1>
        <p> I am a <span>Software Developer</span> who is based in London, Ontario and this is my official portfolio website to showcase my web development activities</p>
        <a href="" className={styles.download}>Download Resume</a>
        <div className={styles.image_container}>
          <img src='/pattern.png' className={styles.background_pattern}/>
          <img src='/myimage.png' className={styles.my_image}/>
            

        </div>
        <div className={styles.social_links}>
          <a href={social.linkedin}><FaLinkedin className={styles.linkedin} /></a>
          <a href={social.github}><FaSquareGithub  className={styles.github}/></a>  
        </div>
        <div className={styles.skills}>
          <h3>Tech Stack</h3>
          <div className={styles.skill_icons}>
            <img src='/js.gif' alt='' />
            <img src='/python.gif' alt='' />
            <img src='/html.png' alt='' />
            <img src='/css.png' alt='' />
            <img src='/react.png' alt='' />
            <img src='/flask.png' alt='' />
            <img src='/nextjs.png' alt='' />
          </div>
        </div>
        
    </div>
  )
}

export default Home

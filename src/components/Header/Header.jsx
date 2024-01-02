import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src= '/logo.png'
          className={styles.logo}
          width={50}
          height={50}
        />
        <h1>El Prince</h1>
      </div>


      <ul className={styles.icons}>
        <li><a href=''>HOME</a></li>
        <li><a href=''>ABOUT</a></li>
        <li><a href=''>PORTFOLIO</a></li>
        <li><a href=''>SERVICES</a></li>
        <li><a href=''>HIRE ME</a></li>
      </ul>
      
    </div>
  )
}

export default Header
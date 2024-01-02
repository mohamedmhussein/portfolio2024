import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.container}>
      <Image 
        src= '/elprince.png'
        className={styles.logo}
        width={150}
        height={150}
      />

      <ul>
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
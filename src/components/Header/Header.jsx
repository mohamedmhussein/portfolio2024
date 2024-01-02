import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.container}>
      <Image 
        src= '/elprince.png'
        className={styles.logo}
      />

      <ul>
        <li><a href=''></a></li>
        <li><a href=''></a></li>
        <li><a href=''></a></li>
        <li><a href=''></a></li>
      </ul>
      
    </div>
  )
}

export default Header
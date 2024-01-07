'use client'
import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {

  const links = [
    {href:'/', label:'HOME'},
    {href:'/about', label:'ABOUT'},
    {href:'/portfolio', label:'PORTFOLIO'},
    {href:'/services', label:'SERVICES'},
    {href:'/contact', label:'CONTACT'}
  ]

  const path = usePathname()
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
        {
          links.map(link => (
            
              <li key = {link.href}><Link href={link.href} className={styles.link}>
                { link.href === path && (<motion.span layoutId = "underline" className= {styles.line}/>)}
                {link.label}</Link></li>
            
          ))
        }
      </ul>
      
    </div>
  )
}

export default Header

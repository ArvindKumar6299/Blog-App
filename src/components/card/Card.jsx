import Image from 'next/image'
import styles from './card.module.css'
import React from 'react'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/culture.avif" alt="culture" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href='/'>
            <h1>We are to preserve culture so create it</h1>
            </Link>
            <p className={styles.desc}>Democratic societies are often characterized by extensive pluralism of religions, cultures and ethnicities on the basis of which citizens make claims against their state....</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card
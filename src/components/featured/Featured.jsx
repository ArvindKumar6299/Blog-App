import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b >Hey, Arvind Here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Nature serves us in many ways; do we serve our nature anyway?</h1>
          <p className={styles.postDesc}>
          Whatever we see around us, right from the moment we step out of our house is part of nature. The trees, flowers, landscapes, insects, sunlight, breeze, everything that makes our environment so beautiful and mesmerizing are part of Nature.
          </p>
          <button className={styles.button}>Read More!</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
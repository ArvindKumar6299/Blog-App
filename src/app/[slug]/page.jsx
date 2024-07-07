import React from 'react'
import styles from "./singlePage.module.css"
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>I welcome you all to my latest Blog Page</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.avatar}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Arvind Kumar</span>
              <span className={styles.date}>01.04.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/coding.png" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
            <p>
              Laudantium necessitatibus consequatur dolorum magnam iure hic aliquam, eveniet est, dignissimos, labore illum nam! Quo numquam amet dolore iusto laudantium. Autem numquam impedit dicta praesentium provident corporis magnam? Labore nesciunt fuga nobis natus eligendi, dolores omnis corrupti perferendis, repellendus porro dolorem magni?
            </p>
            <h5>Very Suspecious Cotent is Here</h5>
            <p>
               iure hic aliquam, eveniet est, dignissimos, labore illum nam! Quo numquam amet dolore iusto laudantium. Autem numquam impedit dicta praesentium provident corporis magnam? Labore nesciunt fuga nobis natus eligendi, dolores omnis corrupti perferendis, repellendus porro dolorem magni?
            </p>
            </div>
            <div className={styles.comment}>
              <Comments/>
            </div>
          </div>
          <Menu/>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
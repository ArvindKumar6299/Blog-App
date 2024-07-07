import React from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    
    <div className={styles.items}>
    <Link href="/" className={styles.item}>

      {withImage && (
       <div className={styles.imageContainer}>
        <Image src="/travel.png" alt="" fill className={styles.image}/>
       </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Arvind Yadav</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
    {withImage && (
       <div className={styles.imageContainer}>
        <Image src="/culture.png" alt="" fill className={styles.image}/>
       </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
        <h3 className={styles.postTitle}>Cultue fills enjoyness and happiness is our daily life.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Arvind Yadav</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
    {withImage && (
       <div className={styles.imageContainer}>
        <Image src="/food.png" alt="" fill className={styles.image}/>
       </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>Food</span>
        <h3 className={styles.postTitle}>To live and enjoy daily life food is important.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Arvind Yadav</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href="/" className={styles.item}>
    {withImage && (
       <div className={styles.imageContainer}>
        <Image src="/fashion.png" alt="" fill className={styles.image}/>
       </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
        <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Arvind Yadav</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
  </div>
   )


  {/* <div className={styles.items}>
    <Link href="/" className={styles.item}>
    <div className={styles.imageContainer}>
    <Image src="/style.png" alt="" fill className={styles.image}/>
    </div>
   <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
    <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
    <div className={styles.detail}>
      <span className={styles.username}>Arvind Yadav</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>
<Link href="/" className={styles.item}>
  <div className={styles.imageContainer}>
    <Image src="/culture.png" alt="" fill className={styles.image}/>
  </div>
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
    <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
    <div className={styles.detail}>
      <span className={styles.username}>Arvind Yadav</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>
<Link href="/" className={styles.item}>
  <div className={styles.imageContainer}>
    <Image src="/food.png" alt="" fill className={styles.image}/>
  </div>
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.food}`}>Food</span>
    <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
    <div className={styles.detail}>
      <span className={styles.username}>Arvind Yadav</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link>
<Link href="/" className={styles.item}>
  <div className={styles.imageContainer}>
    <Image src="/fashion.png" alt="" fill className={styles.image}/>
  </div>
  <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
    <h3 className={styles.postTitle}>Happiness is a way of travel.</h3>
    <div className={styles.detail}>
      <span className={styles.username}>Arvind Yadav</span>
      <span className={styles.date}> - 10.03.2023</span>
    </div>
  </div>
</Link> */}
{/* </div> */}


}

export default MenuPosts
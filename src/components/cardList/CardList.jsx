import React from 'react'
import styles from './cardList.module.css'
import Paginationtion from '../pagination/pagination'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Paginationtion/>
    </div>
  )
}

export default CardList
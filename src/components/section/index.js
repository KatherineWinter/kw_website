import React from 'react';
import styles from './style.module.css'

export default function Section (props) {
  const { boxart, name, theme } = props
  const cssTheme = theme === 'darkTheme' ? styles.darkTheme : styles.lightTheme 
  return (
    <div className={`${styles.section} ${cssTheme}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
      </header>
      <div className={styles.contentWrapper}>
        {boxart}
      </div>
    </div>
  )
}

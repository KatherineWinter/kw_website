import React from 'react'
import styles from './style.module.css'

export default function Header(props) {
  const { title, name, desc, img, links } = props.content

  const linksContent = links.map(link =>
    <img
      className={styles.link}
      key={`link_${link.id}`}
      src={link.img}
      alt={link.name}
      onClick={() => window.open(link.url)}/>
  )

  return (
    <div className={styles.profile}>
      <img className={styles.headerImg} alt={name} src={img} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h6 className={styles.title}>{title}</h6>
          <h4 className={styles.name}>{name}</h4>
          <div className={styles.desc}>{desc}</div>
          <ul className={styles.links}>
            {linksContent}
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import styles from './style.module.css'

export default function Header(props) {
  const { title, name, desc, img, links } = props.content

  const linksContent = links.map(link =>
    <a
      href={link.url}
      className={`icon ${link.class}`}
      key={`link_${link.id}`}>
        <span className="label">{link.name}</span>
    </a>
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

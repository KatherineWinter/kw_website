import React from 'react';
import styles from './style.module.css'
import Boxart from '../boxart';

export default function InformationPane(props) {
  const { selectedBox } = props
  if (!selectedBox) return null
  const desc2 = !selectedBox.desc2 ? null : selectedBox.desc2.map((e, index) => (
    <li
      className={styles.descItem}
      key={selectedBox.id + index}>
      {e}
    </li>
  ))

  const projects = !selectedBox.projects ? null : selectedBox.projects.map((e, index) => {
    return (
      <Boxart key={`${selectedBox.id}_boxart_${index}`}
        info={props.boxes.find(box => box.id === e)}
        handleChangeSelectedBoxId={props.handleChangeSelectedBoxId}
      />
    )
  })

  return (
    <div className={styles.informationPane}>
      <img className={styles.headerImg} alt={selectedBox.name} src={selectedBox.img} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1>{selectedBox.name}</h1>
          <h2>{selectedBox.title}</h2>
          <div>{selectedBox.desc}</div>
          <ul>{desc2}</ul>
          {projects}
        </div>
      </div>
      <button
        className={styles.closeButton}
        onClick={() => props.handleChangeSelectedBoxId(null)}>
        X
      </button>
    </div>
  );
}

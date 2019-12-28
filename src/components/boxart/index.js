import React from 'react';
import styles from './style.module.css'

function Boxart(props) {
  const { img, name, id, } = props.info
  return (
    <div
      className={styles.boxart}
      onClick={() => props.handleChangeSelectedBoxId(id)}
    >
      <img src={img} alt={name} />
      <div className={styles.info}>{name}</div>
    </div>
  );
}

export default Boxart

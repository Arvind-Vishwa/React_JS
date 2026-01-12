import React from 'react'
import styles from '../header/Header.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Arvind</h2>
      <div className='styles.btn'>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Header

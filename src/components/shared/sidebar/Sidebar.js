import React from 'react'
import styles from './sidebar.module.css'
const Sidebar = () => {
  return (
    <>
        
            <div className={`${styles.sidebar}`}>
              <a className="navbar-brand mt-2" href="/"><img src={'images/logo.png'} alt="" height='68px' width='197px' className='flex-shrink-0' /></a>
              <div className={`${styles.content} d-flex align-items-center gap-1`}>
              <div className={styles.line}></div><p className={styles.para}> WELCOME TO MANAGEMENT TIME CO.</p>
              </div>
              <h3 className={styles.heading}>Your Trusted<br/>
                Security Partner</h3>
              <button className={styles.btn}>CONTACT US</button>
            </div>
    </>
  )
}

export default Sidebar
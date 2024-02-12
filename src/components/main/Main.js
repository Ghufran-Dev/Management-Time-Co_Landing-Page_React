import React from 'react'
import styles from './main.module.css'
import Navbar from '../shared/header/Navbar'
import Sidebar from '../shared/sidebar/Sidebar'
const Main = () => {
  return (
    <>
      <div className={styles.myContainer}>
        <div className="row g-0">
          <div className="col-md-3 p-0">
            <Sidebar />
          </div>
          <div className="col-md-9 p-0">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
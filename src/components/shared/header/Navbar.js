import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
              <div className="container-fluid p-0 d-flex justify-content-end pe-5">
                <button className="navbar-toggler text-bg-light  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                  <ul className={`${styles.nav} navbar-nav`}>
                    <li className="nav-item">
                      <a className={`${styles.link} nav-link ${styles.home}`} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.link} nav-link`} href="/">about us</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.link} nav-link`} href="/">services</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.link} nav-link`} href="/">our team</a>
                    </li>
                    <li className="nav-item">
                      <a className={`${styles.link} nav-link`} href="/">clients</a>
                    </li>
                    <li className='nav-item'>
                      <button className={styles.btn}>contact us</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </>
  )
}

export default Navbar
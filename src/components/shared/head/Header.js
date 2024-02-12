import React from 'react'
import styles from './header.module.css'
import Navbar from '../header/Navbar'
const Header = () => {
    return (
        <>
            <div className={`${styles.myContainer}`}>
                {/* <div className={styles.content}>
                    <h3 className={styles.heading}>Our Vision</h3>
                    <p className={styles.para}>Time Management Co. is an example of credibility, honesty, and sincerity in work and professionalism, and to be one of the most important security and protection companies in the Arab world. We aim to meet the security and operational needs of public and private sectors in the Kingdom to keep abreast of Growth and excellence in provided services to customers, and to continuously develop security services, and care for its human cadres.</p>
                </div> */}
                <div className={styles.grid}>
                    <div className={`${styles.sidebar}`}>
                        <a className="navbar-brand mt-2" href="/"><img src={'images/logo.png'} alt="" width='70%' className='flex-shrink-0' /></a>
                        <div className={`${styles.content} d-flex align-items-center gap-1`}>
                            <div className={styles.line}></div><p className={styles.para}> WELCOME TO MANAGEMENT TIME CO.</p>
                        </div>
                        <h3 className={styles.heading}>Your Trusted<br />
                            Security Partner</h3>
                        <button className={styles.btn}>CONTACT US</button>
                    </div>
                        <Navbar/>
                    
                </div>
            </div>
        </>
    )
}

export default Header
import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
            <div className={styles.inner_footer}>
                <p className={styles.p}>COPYRIGHT © <span className={styles.inner_span}>MANAGEMENT TIME CO. 2023</span> - ALL RIGHTS RESERVED.</p>
                <div className={styles.inner_content}>
                    <p className={styles.p}>TERMS OF SERVICE</p>
                    <p className={styles.p}>PRIVACY POLICY</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import styles from './vision.module.css'
const Vision = () => {
    return (
        <>
            <div className={`${styles.myContainer}`}>
            {/* <span className={styles.bb}></span> */}
                <div className={styles.content}>
                    <h3 className={styles.heading}>Our Vision</h3>
                    <p className={styles.para}>Time Management Co. is an example of credibility, honesty, and sincerity in work and professionalism, and to be one of the most important security and protection companies in the Arab world. We aim to meet the security and operational needs of public and private sectors in the Kingdom to keep abreast of Growth and excellence in provided services to customers, and to continuously develop security services, and care for its human cadres.</p>
                </div>
            </div>
        </>
    )
}

export default Vision
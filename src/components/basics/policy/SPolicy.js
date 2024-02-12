import React from 'react'
import styles from './sPolicy.module.css'
const SPolicy = () => {
    return (
        <>
            <div className={`${styles.myContainer}`}>
            <div className={styles.content}>
                <h3 className={styles.heading}>Services Policy</h3>
                <p className={styles.para}>Our clients are mostly divided into governmental and non-governmental organizations. Time Organizing Company Ltd., with its several departments, provides a service of integrated services to the commercial, industrial, and governmental sectors, and as a client we have you will be within good security coverage. The company’s services policy is based on meeting the security and safety requirements of the customers, and the efficiency that suits all the company’s clients, through the company’s keenness on the latest</p>
                <button className={`${styles.button} btn btn-outline-light text-white`}>READ MORE</button>
                </div>
            </div>
        </>
    )
}

export default SPolicy
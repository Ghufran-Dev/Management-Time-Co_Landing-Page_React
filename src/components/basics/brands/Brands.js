import React from 'react'
import styles from './brands.module.css'

const Brands = () => {
    return (
        <>
            <div className={`d-flex gap-2 mt-5 justify-content-center align-items-center `}>
                <hr className={styles.divider}/><div className={styles.title}>OUR CLIENTS</div>
                <hr className={styles.divider}/>
            </div>
            <h2 className={styles.heading}>Trusted by Renowned Organizations</h2>
            <div className={styles.grid}>
                <div className={styles.myCard}>
                    <img src={'brands/1.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/2.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/3.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/4.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/5.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/6.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/6.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/8.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/9.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/10.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/11.png'} alt="" />
                </div>
                <div className={styles.myCard}>
                    <img src={'brands/12.png'} alt="" />
                </div>
            </div>
        </>
    )
}

export default Brands
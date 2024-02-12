import React from 'react'
import styles from './about.module.css'
const About = () => {
    return (
        <>
            <div className={styles.myContainer}>
                <div className={`${styles.content}`}>
                    <div className={styles.top}>
                        <span className={styles.divider}></span><p className={styles.para}>INTRODUCTION</p>
                    </div>
                    <h3 className={`${styles.heading}`}>About us</h3>
                    <p className={styles.para2}>A leader in security services in Saudi Arabia, Time Management Co. is the provider of choice for major companies from all sectors including oil and gas, petrochemicals, education, and major construction. Whether we’re monitoring and controlling access to your corporate headquarters and branches or offering you a completely customized 360-degree security solution to protect your crucial sites or projects, we have the experience, tools, technology, and trained professionals to guarantee you can fulfill your daily activities in a safe and secure environment.</p>
                    <button className={styles.btn}>LEARN MORE</button>
                </div>
                <div className={styles.img}>
                    <img src={'images/tabel.png'} alt="" />
                </div>
            </div>
        </>
    )
}
export default About
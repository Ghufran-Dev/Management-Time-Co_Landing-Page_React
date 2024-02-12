import React from 'react'
import styles from './topFooter.module.css'
const TopFooter = () => {
    return (
        <>
            <div className={styles.myContainer}>
                <div className={styles.outer_content}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={'./images/logo1.png'} alt="" width={'100%'} />
                    </div>
                    <ul className={styles.ul}>
                        <h3 className={styles.heading}>The Company</h3>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>About Us</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Our Team</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Mission</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Partners</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Contact Us</li>
                        </div>
                    </ul>
                    <ul className={styles.ul}>
                        <h3 className={styles.heading}>Our Services</h3>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Surveillance Cameras</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Facility Security</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Safety Devices</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Security & Guarding</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Personal Guarding</li>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                            <div className={styles.divider} /><li className={styles.li}>Banking Sector Insurance</li>
                        </div>

                    </ul>
                    <ul className={styles.ul}>
                        <h3 className={styles.heading}>Contact Us</h3>
                        <li className={styles.li}><i class={`${styles.enevelop} fa-solid fa-envelope`}></i> hr.manager@management-time.sa</li>
                        <li className={styles.li}><i class={`${styles.phone} fa-solid fa-phone-volume`}></i> +966 13 887 7775</li>
                        <li className={styles.li}>+966 17 529 0570</li>
                        <li className={styles.li}>+966 11 477 7011</li>
                        <div className={styles.icons}>
                            <i class={`${styles.facebook} fa-brands fa-facebook`}></i>
                            <i class={`${styles.insta} fa-brands fa-square-instagram`}></i>
                            <i class={`${styles.twitter} fa-brands fa-twitter`}></i>
                        </div>
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}

export default TopFooter
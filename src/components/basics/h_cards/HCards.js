import React from 'react'
import styles from './hCards.module.css'
const HCards = () => {
    return (
        <>
            <div className={styles.myContainer}>
                <hr className={styles.line} />
                <div className={`${styles.h_card} row mb-0`}>
                    <div className="col-md-6 p-0 d-flex align-items-md-center ">
                        <div className={`${styles.h_content} d-flex flex-column gap-3 `}>
                            <h3 className={styles.heading}>
                                Our Security Team
                            </h3>
                            <p className={styles.para}>Our security team undergoes continuous training to raise the level of their ability of facing the challenges that may encounter our clients at any time and place. Therefore, we always maintain the level of services provided to you.</p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className='d-flex justify-content-end'>
                            <img src={"images/h1.png"} alt="hello" width={'100%'}/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.h_card} row mb-0 flex-row-reverse `}>
                    <div className="col-md-6 p-0 d-flex align-items-md-center justify-content-end ">
                        <div className={`${styles.h_content} text-white d-flex flex-column gap-3 text-md-end`}>
                            <h3 className={styles.heading}>
                                Emergency Services
                            </h3>
                            <p className={styles.para}>The emergency services is one of the primary tasks of the establishment team, so we are ready to receive your requests and complaints 24/7.  We have the best trained security personnel to respond to any emergency immediately.</p>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className='d-flex justify-content-start'>
                            <img src={"images/h2.png"} alt="hello" width={'100%'}/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.h_card} row mb-5 pb-5`}>
                    <div className="col-md-6 p-0 d-flex align-items-md-center ">
                        <div className={`${styles.h_content} text-white d-flex flex-column gap-3 pe-3`}>
                            <h3 className={styles.heading}>
                                Security & Surveillance
                                Technology
                            </h3>
                            <p className={styles.para}>Out technical team installs the most efficient, high quality, and the latest surveillance systems in the global markets, as they import the latest available systems with a guarantee on these devices. Additionally we give our employees full training on operating the systems.</p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className='d-flex justify-content-end'>
                            <img src={"images/h3.png"} alt="hello" width={'100%'}/>
                        </div>
                    </div>
                </div>
                <hr className={`${styles.line} p-5` } />
            </div>
        </>
    )
}

export default HCards
import React from 'react'
import styles from './form.module.css'
const Form = () => {
    return (
        <>
            <div className={styles.myContainer}>
                <div className={styles.form_content}>
                    <form action="">
                        <h1 className={styles.heading}>Contact Us</h1>
                        <p className={styles.para}>Send us your query or ask about any services, and our team will get back to your shortly.</p>                    
                         <div className={styles.inp}>
                            <input className={styles.input} type="text" placeholder='Your Name' />
                            <input className={styles.input} type="text" placeholder="Company" />
                            <input className={styles.input} type="text" placeholder="Phone no." />
                            <input className={styles.input} type="text" placeholder="Email address" />
                        </div>
                            <textarea className={styles.textarea} cols="30" rows="10">Write a message...</textarea>
                    <button className={styles.button} type="submit">SUBMIT</button>
                    </form>
                    <div className={styles.img}>
                        <img src={'./images/formImg.png'} width={'100%'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
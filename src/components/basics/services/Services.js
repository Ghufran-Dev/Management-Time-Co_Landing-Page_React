import React from 'react'
import styles from './services.module.css'



const Services = ({ serviceData }) => {

  return (
    <>
      <div className={styles.myContainer}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {
            serviceData.map((curr, i) => {
              return (
                <>
                  <div className={styles.card}>
                    <img src={curr.image} alt=""  width={'550px'}/>
                    <p className={i === 1? styles.specialTitle : styles.para}>{curr.title}</p>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>

    </>
  )
}

export default Services
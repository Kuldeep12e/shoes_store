import React from 'react'
import styles from './Hero.module.css'; 

export const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
        <h1 className={styles.h1}>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND <br/> WE ARE HERE TO HELP YOU WITH <br/> THE BEST SHOES</p>
        <div>
            <button>SHOP NOW</button>
            <button>CATEGORY</button>
        </div>

        <div>
            <p>Also available on :</p>
            <div className={styles.image}>
                <img src='flipkart.png' ></img>
                <img  src='amazon.png'></img>
            </div>
        </div>

        </div>
    </>
  )
}

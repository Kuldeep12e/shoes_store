import React from 'react'
import styles from './Navbar.module.css'; 

export const Navbar = () => {

  return (
    <>
     <div className={styles.nav}>
     <div className={styles.logoimg}>
         <img src='brand_logo.png'></img>

        </div>

            <ul className={styles.navlist}>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

       <button>Login</button>

     </div>
    </>
  )
}

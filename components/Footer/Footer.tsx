import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div>
                    <p>
                        C 2023 Michael Siddiqi | All Rights Reserved | Contact |
                        Privacy Policy
                    </p>

                    <a href="#">Website created by MichaelSiddiqi.com</a>
                </div>
            </div>
            <div className={styles.footerSocials}>
                <div className={styles.socialTags}>
                    <a href="#">IN</a>
                    <a href="#">FB</a>
                    <a href="#">P</a>
                </div>
            </div>
        </div>
    )
}

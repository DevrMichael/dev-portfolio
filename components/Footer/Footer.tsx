import React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

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
                    <a href="#">
                        {' '}
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#">
                        {' '}
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#">
                        {' '}
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </div>
    )
}

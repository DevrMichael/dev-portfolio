import React from 'react'
import styles from './WebsitePackageDetails.module.scss'
import { Button } from 'react-bootstrap'

export default function WebsitePackageDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <h4>lets uplevel your website...</h4>
                    <h3>
                        What it means for you to have a strategically designed
                        website
                    </h3>
                    <p>
                        Can you imagine how it would feel to have a website that
                        truly captures the attention of your dream clients? A
                        strategically designed website does exactly this, while
                        making sure that your potential clients know exactly
                        what next steps to take to work with you, or how to
                        opt-in to your marketing systems.
                    </p>
                    <Button>Website Package Details</Button>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './QuoteBanner.module.scss'

export default function QuoteBanner() {
    return (
        <div className={styles.container}>
            <p>
                When a potential client asks, "where can I learn more about your
                work ?"
            </p>
            <h3>
                You want your website to beautifully showcase exactly what you
                have to offer them
            </h3>
        </div>
    )
}

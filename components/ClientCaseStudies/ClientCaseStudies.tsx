import React from 'react'
import styles from './ClientCaseStudies.module.scss'
import { Button } from 'react-bootstrap'

export default function ClientCaseStudies() {
    return (
        <div className={styles.container}>
            <div className={styles.contentHeader}>
                <h3>client case studies</h3>
                <p>explore recent brand and website projects</p>
            </div>
            <div className={styles.caseStudies}>
                <a href="#">
                    <img
                        src="https://unsplash.it/350/400"
                        alt="horse running"
                    />
                </a>
                <a href="#">
                    <img
                        src="https://unsplash.it/350/400"
                        alt="horse running"
                    />
                </a>
                <a href="#">
                    <img
                        src="https://unsplash.it/350/400"
                        alt="horse running"
                    />
                </a>
            </div>
            <div className={styles.projectsBtn}>
                <Button>Recent Projects</Button>
            </div>
        </div>
    )
}

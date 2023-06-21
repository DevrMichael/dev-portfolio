import React, { SyntheticEvent } from 'react'
import styles from './GuideDownload.module.scss'
import { Button } from 'react-bootstrap'

export default function GuideDownload() {
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        alert('Button was clicked!')
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <p>The four cornerstone strategies to</p>
                    <h3>
                        create connection <span>(and gain new clients)</span>
                        <br /> on your website
                    </h3>
                    <p>
                        These client connection points are designed into every
                        website I create for my clients, but it’s just too good
                        not to share. I’m sharing the four cornerstone pieces of
                        your website that will help create connection with your
                        ideal clients.
                    </p>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="First Name" />
                        <input type="email" placeholder="Email Address" />
                        <Button type="submit">Download the Guide</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

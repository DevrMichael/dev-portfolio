import React from 'react'
import styles from './HeroContent.module.scss'
import { Button } from 'react-bootstrap'

export default function HeroContent() {
    return (
        <div className={styles.container}>
            <p>When we work together...</p>
            <h2>You'll love sending people to your website.</h2>

            <p>A strategically designed website...</p>
            <ul>
                <li>Creates true connection with your ideal clients</li>
                <li>Reflects and showcases the high quality work you do</li>
                <li>Aplifies your unique brand and message</li>
                <li>Leverages all your marketing efforts</li>
                <li>Makes it easy for people to say yes to working with you</li>
            </ul>
            <Button>See all the details</Button>
        </div>
    )
}

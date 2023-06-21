import React from 'react'
import styles from './AboutMeSection.module.scss'
import { Button } from 'react-bootstrap'

export default function AboutMeSection() {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.image}>
                    <img src="https://unsplash.it/450/550" />
                </div>
                <div className={styles.textContent}>
                    <h2>I'm glad you're here, I'm Michael</h2>
                    <p className={styles.intro}>
                        I make transformational coaches & entrepreneurs
                        irresistible to their dream clients through my
                        multi-step, sales psychology based branding and website
                        creation process.
                    </p>
                    <p>
                        My number one goal is to create your business a brand
                        and website that allows you to show up and do what you
                        do best – change the lives of your clients.
                        <br />
                        <br />
                        As a graphic designer, branding expert, website
                        developer, and overall creative, I’m passionate about
                        creating designs that speak to your clients while being
                        highly strategic at the same time. After spending the
                        past six years in marketing agencies and freelancing, I
                        have seen exactly what works (and what doesn’t) for
                        creating websites that attract the right clients and
                        bring in leads, so that you are consistently able to
                        work with your dream clients in your business.
                        <br />
                        <br />
                        Outside of work, you can find me trail running or
                        triathlon training, reading, and spending time with my
                        husband and two huskies.
                    </p>
                    <Button>Let's Get To Know Each Other</Button>
                </div>
            </div>
        </div>
    )
}

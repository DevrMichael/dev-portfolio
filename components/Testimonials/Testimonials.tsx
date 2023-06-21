import React from 'react'
import styles from './Testimonials.module.scss'
import { Button } from 'react-bootstrap'

export default function Testimonials() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.header}>Testimonials</p>
                <h2>
                    “I feel that the new site is an authentic representation of
                    my current work.”
                </h2>
                <p>
                    “I feel that Carly is gifted in taking the essence of who
                    you are and putting that into a website that adequately
                    reflects you. Even though I was not entirely clear about my
                    vision, her gentle nudge and guidance allowed me to dive
                    deep into my own process and then allow her to work her
                    magic to bring that process to life. I appreciate how Carly
                    kept things organized and on track throughout the process.
                    There were many factors moving around at the same time and
                    she kept everything accurate, up to date, and well
                    organized. <br /> <br />I have had nothing but excitement
                    and appreciation from others who have reviewed my new site
                    as they note that it really reflects who I am and what I am
                    doing in the world. I feel that the new site is an authentic
                    representation of my current work and I appreciate Carly’s
                    creative support in brining my work to life on the web.”
                </p>
                <h2>Paula</h2>
                <Button>View More Testimonials</Button>
            </div>
        </div>
    )
}

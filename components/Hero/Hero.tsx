/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Hey, I'm Michael Siddiqi</h1>
                <h5>
                    I'm a front-end developer who builds electrifying websites
                    and web apps!
                </h5>
            </div>
            <div className={styles.buttons}>
                <div>
                    <Button variant="primary"> See my projects</Button>
                </div>
                <div>
                    <Button variant="secondary">More about me</Button>
                </div>
            </div>
        </div>
    )
}

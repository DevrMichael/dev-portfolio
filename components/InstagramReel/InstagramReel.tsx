import React from 'react'
import styles from './InstagramReel.module.scss'

export default function InstagramReel() {
    return (
        <div className={styles.container}>
            <div className={styles.instaContent}>
                <h3>follow along on Instagram</h3>
                <p>
                    <a href="#">@CODINGROOKIE</a>
                </p>
            </div>
            <div className={styles.instaImages}>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
                <a href="#">
                    <img src="https://unsplash.it/180/180" alt="" />
                </a>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './NavBar.module.scss'
import { Button } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <nav>
                <a href="#">About</a>
                <a href="#">Resources</a>
                <a href="#">Blog</a>
            </nav>
            <div className={styles.logoContainer}>
                <h1>MICHAEL SIDDIQI</h1>
                <p>Website Designer & Brand Strategist</p>
            </div>
            <nav>
                <a href="#">Websites</a>
                <a href="#">Projects</a>
                <Button>Get Started</Button>
            </nav>
        </div>
    )
}

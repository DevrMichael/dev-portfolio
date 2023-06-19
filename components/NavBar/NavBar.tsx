import React from 'react'
import styles from './NavBar.module.scss'
import { Button } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div className={styles.container}>
            <nav>
                <a>About</a>
                <a>Resources</a>
                <a>Blog</a>
            </nav>
            <div className={styles.logoContainer}>
                <h1>MICHAEL SIDDIQI</h1>
                <p>Website Designer & Brand Strategist</p>
            </div>
            <nav>
                <a>Websites</a>
                <a>Projects</a>
                <Button>Get Started</Button>
            </nav>
        </div>
    )
}

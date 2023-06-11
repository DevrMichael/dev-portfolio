import React from 'react'
import styles from './PortfolioSection.module.scss'
import { Button } from 'react-bootstrap'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import horse from '../../public/assets/horse.jpeg'

export default function PortfolioSection() {
    return (
        <div className={styles.container}>
            <div className={styles.portfolioIntro}>
                <h1>Portfolio</h1>
                <p>
                    Here are some case studies including the design process
                    behind them.
                </p>
                <p>
                    Or you can explore a more visual gallery with a variety of
                    different projects on the link below.
                </p>
                <Button variant="link">Visual Gallery</Button>
            </div>
            <div className={styles.portfolioItems}>
                <PortfolioItem
                    img={horse}
                    alt="horse"
                    title="Planloader"
                    description="Project management tool for construction industry"
                />
                <PortfolioItem
                    img={horse}
                    alt="horse"
                    title="Planloader"
                    description="Project management tool for construction industry"
                />
                <PortfolioItem
                    img={horse}
                    alt="horse"
                    title="Planloader"
                    description="Project management tool for construction industry"
                />
            </div>
        </div>
    )
}

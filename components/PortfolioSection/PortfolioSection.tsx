import React from 'react'
import styles from './PortfolioSection.module.scss'
import { Button } from 'react-bootstrap'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import horse from '../../public/assets/horse.jpeg'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const portfolioItems = [
    {
        id: 1,
        img: horse,
        alt: 'horse',
        title: 'Planloader',
        description: 'Project management tool for construction industry',
    },
    {
        id: 1,
        img: horse,
        alt: 'horse',
        title: 'Planloader',
        description: 'Project management tool for construction industry',
    },
    {
        id: 1,
        img: horse,
        alt: 'horse',
        title: 'Planloader',
        description: 'Project management tool for construction industry',
    },
]

export default function PortfolioSection() {
    return (
        <div className={styles.container}>
            <div className={styles.portfolioIntro}>
                <h3>Portfolio</h3>
                <p>
                    Here are some case studies including the design process
                    behind them.
                </p>
                <p>
                    Or you can explore a more visual gallery with a variety of
                    different projects on the link below.
                </p>
                <Button variant="link">Visual Gallery</Button>
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className={styles.icon}
                />
            </div>
            <div className={styles.portfolioItems}>
                {portfolioItems.map((item) => (
                    <PortfolioItem
                        img={item.img}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

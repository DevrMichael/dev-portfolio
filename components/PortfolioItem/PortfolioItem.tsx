import Image from 'next/image'
import React from 'react'
import styles from './PortfolioItem.module.scss'
import { Button } from 'react-bootstrap'

interface PortfolioItemProps {
    img: any
    alt: string
    title: string
    description: string
}

export default function PortfolioItem({
    img,
    alt,
    title,
    description,
}: PortfolioItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.itemImage}>
                <Image
                    src={img}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className={styles.itemDescription}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button variant="outline-primary">See Full Project</Button>
            </div>
        </div>
    )
}

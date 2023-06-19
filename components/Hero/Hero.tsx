import React from 'react'
import styles from './Hero.module.scss'
import HeroProfileImage from './HeroProfileImage/HeroProfileImage'
import HeroContent from './HeroContent/HeroContent'

export default function Hero() {
    return (
        <div className={styles.container}>
            <HeroProfileImage />
            <HeroContent />
        </div>
    )
}

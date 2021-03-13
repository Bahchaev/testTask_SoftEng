import React from 'react';
import styles from './styles.module.css'
import headerText from './headerText.png'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <div className={styles.logo}/>
                    <img src={headerText} alt="headerText" className={styles.headerText}/>
                </div>
                <div className={styles.text}>
                    Комплекс из камеры и мобильного приложения,
                    который помогает в любой момент убедиться,
                    что с близкими и домом всё в порядке.
                </div>
            </div>
        </div>
    )
}
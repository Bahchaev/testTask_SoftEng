import React from 'react';
import styles from './styles.module.css'

export default function PopupCard({image, text}) {
    return (
        <div className={styles.container}>
            <div className={styles.popupCardImg}><img src={image} alt="popupCardImg"/></div>
            <div className={styles.popupCardText}>{text}</div>
        </div>
    )
}
import React from 'react';
import styles from "./styles.module.css";

export default function BuyCard({text, header, images}) {
    return (
        <div className={styles.buyCard}>
            <div className={styles.images}>
                {images}
            </div>
            <div className={styles.textField}>
                <div className={styles.header}>{header}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    )
}
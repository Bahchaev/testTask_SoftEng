import React from 'react';
import styles from './styles.module.css'

export default function ReviewCard({avatar, author, text, isActive}) {

    const style = {
        zIndex: isActive ? 1 : 0,
        transform: isActive ? "translateY(0) scale(1)" : "translateY(-30px) scale(0.832)",
        transformOrigin: 'center top',
        opacity: isActive ? 1 : 0.3
    };

    return (

        <div className={styles.container} style={style}>
            <div className={styles.image}>
                <div className={styles.ellipse1}>
                    <div className={styles.ellipse2}>
                        <div className={styles.ellipse3}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.textContent}>
                <div className={styles.author}>{author}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>

    )
}
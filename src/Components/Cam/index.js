import React from 'react';
import styles from './styles.module.css'
import camImg from './cam.png'

export default function Cam({onClick}) {
    return (
        <div className={styles.rectangle}>
            <div className={styles.bg}>
                <img src={camImg} alt="camImg"/>
            </div>
            <div className={styles.underText} onClick={onClick}>ПОДРОБНЕЕ</div>
        </div>
    )
}
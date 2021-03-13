import React from 'react';
import styles from './styles.module.css'
import cam from '../images/cam.svg'
import cal from '../images/cal.svg'

export default function BuyCardImages2() {
    return (
            <div className={styles.images}>
                <img src={cal} alt="cal" className={styles.calImg}/>
                <img src={cam} alt="cam" className={styles.camImg}/>
            </div>
    )
}
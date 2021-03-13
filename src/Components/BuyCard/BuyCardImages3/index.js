import React from 'react';
import styles from './styles.module.css'
import cam from '../images/cam.svg'
import speed from '../images/100.svg'
import wifi from '../images/wifi.svg'

export default function BuyCardImages3() {
    return (
            <div className={styles.images}>
                <img src={speed} alt="speed" className={styles.speedImg}/>
                <img src={cam} alt="cam" className={styles.camImg}/>
                <img src={wifi} alt="wifi" className={styles.wifiImg}/>
            </div>
    )
}
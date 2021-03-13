import React from 'react';
import styles from './styles.module.css'
import cam from '../images/cam.svg'

export default function BuyCardImages1() {
    return (
        <div className={styles.images}>
            <img src={cam} alt="cam" className={styles.camImg}/>
        </div>

    )

}
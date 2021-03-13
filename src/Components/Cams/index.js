import React from 'react';
import styles from './styles.module.css'
import Cam from "../Cam";

export default function Cams() {

    const onClickLeft = () => {
        console.log('clicked left')
    };

    const onClickRight = () => {
        console.log('clicked right')
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <Cam onClick={onClickLeft}/>
                <Cam onClick={onClickRight}/>
            </div>
        </div>
    )
}
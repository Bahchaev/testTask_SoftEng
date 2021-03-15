import React from 'react';
import styles from './styles.module.css'
import Cam from "../Cam";
import {popupCards1} from "./popupCards-1"
import {popupCards2} from "./popupCards-2"

export default function Cams() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <Cam
                    popupCards={popupCards1}
                    popupCloseBtnLeft
                />
                <Cam
                    popupCards={popupCards2}
                    popupCloseBtnRight
                />
            </div>
        </div>
    )
}
import React from 'react';
import styles from './styles.module.css'
import sendBtnImg from './but-send.svg'
import PhoneInput from "../PhoneInput";

export default function PhoneForm() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    Оставьте заявку, и мы позвоним вам в ближайшее время
                </div>
                <div className={styles.phoneInput}><PhoneInput/></div>
                <div className={styles.sendBtn}>
                    <img src={sendBtnImg} alt="sendBtn"/>
                </div>
            </div>
        </div>
    )
}
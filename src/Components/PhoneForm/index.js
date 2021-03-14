import React, {useState} from 'react';
import styles from './styles.module.css'
import sendBtnImg from './but-send.svg'
import PhoneInput from "../PhoneInput";
import {postRequest} from "../../serverRequest";

export default function PhoneForm() {

    const [data, setData] = useState(undefined);
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const handleClick = () => {
        if (data) {
            setShowErrorMsg(false);
            const sendData = {
                phone: data
            };
            postRequest("http://myjson.com", sendData)
                .then(() => {
                    console.log(`Данные отправлены: ${sendData}`)
                })
        } else setShowErrorMsg(true)
    };

    return (
        <form className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.text}>
                    Оставьте заявку, и мы позвоним вам в ближайшее время
                </div>
                <PhoneInput setData={setData}/>
                <div
                    className={styles.sendBtn}
                    onClick={handleClick}
                >
                    <img src={sendBtnImg} alt="sendBtn"/>
                    {showErrorMsg ? <div>Неправильный ввод номера</div> : <div></div>}
                </div>
            </div>
        </form>
    )
}
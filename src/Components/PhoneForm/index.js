import React, {useState} from 'react';
import styles from './styles.module.css'
import sendBtnImg from './but-send.svg'
import sendBtnImgDisabled from './but-send-disabled.png'
import PhoneInput from "../PhoneInput";
import {postRequest} from "../../serverRequest";

export default function PhoneForm() {

    const [isValid, setIsValid] = useState(undefined);
    const [value, setValue] = useState('');
    const [phoneIsSant, setPhoneIsSant] = useState(false);

    const handleSendBtnClick = () => {
        if (isValid) {
            setPhoneIsSant(true);
            const sendData = {
                phone: value
            };
            postRequest("http://myjson.com", sendData)
                .then(() => {
                    console.log(`Данные отправлены: ${sendData}`)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    };

    const handleOkBtnClick = () => {
        setPhoneIsSant(false);
        setValue("")
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.wrap}
                style={{display: phoneIsSant ? 'none' : 'flex'}}
            >
                <div className={styles.text}>
                    Оставьте заявку, и мы позвоним вам в ближайшее время
                </div>
                <PhoneInput
                    setIsValid={setIsValid}
                    value={value}
                    setValue={setValue}
                />
                <button
                    className={styles.sendBtn}
                    onClick={handleSendBtnClick}
                    disabled={!isValid}
                >
                    {
                        isValid ?
                            <img src={sendBtnImg} alt="sendBtn"/> :
                            <img src={sendBtnImgDisabled} alt="sendBtnImgDisabled"/>
                    }
                </button>
            </div>

            <div
                className={styles.wrap}
                style={{display: phoneIsSant ? 'flex' : 'none'}}
            >
                <div className={styles.successText}>
                    Спасибо, что оставили заявку.<br/>
                    Мы скоро вам перезвоним.
                </div>
                <div
                    className={styles.sendBtnDisabled}
                    onClick={handleOkBtnClick}
                >
                    ОК
                </div>
            </div>
        </div>
    )
}
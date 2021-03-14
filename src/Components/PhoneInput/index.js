import React, {useState} from 'react';
import styles from './styles.module.css'
import InputMask from "react-input-mask";

export default function PhoneInput({setData}) {

    const [value, setValue] = useState('');
    const [isFull, setIsFull] = useState(false);
    const [isCorrect, setIsCorrect] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const onChange = (event) => {
        setValue(event.target.value);
        if (event.target.value[3] === "9" || event.target.value[3] === "_") {
            setIsCorrect(true);
            setData(event.target.value)
        } else {
            setIsCorrect(false);
            setData(undefined)
        }

        if (!event.target.value.includes("_")) {
            setIsFull(true);
            setData(event.target.value)
        } else {
            setIsFull(false);
            setData(undefined)
        }
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
            <InputMask
                mask="+7 999 999 9999"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                alwaysShowMask
                className={styles.input}
                style={{
                    border: (!isCorrect) ?
                        '3px solid #BF4444' :
                        ((isFocused || isFull) ? "3px solid #47B247" : "3px solid #DAE0E5"),
                    boxShadow: (isFull || !isCorrect || !isFocused) ?
                        'none' : '0 0 24px rgba(0, 152, 16, 0.25), 0 24px 24px rgba(0, 152, 16, 0.25)',
                    color: (isCorrect) ? '#313334' : '#BF4444'
                }}
            />
            <div className={styles.inputUnderText}>
                {isCorrect ?
                    <div className={styles.msg}>Контактный телефон</div> :
                    <div className={styles.errorMsg}>
                        <div className={styles.ellipse}>!</div>
                        Проверьте набранный номер
                    </div>
                }
            </div>
        </div>
    )
}
import React from 'react';
import styles from './styles.module.css'
import PopupCard from "../PopupCard";
import closeBtnImg from './closeBtn.svg'

export default function Popup({popupCards, left, right, isShown, setIsShown}) {

    const handleBtnClick = () => {
        setIsShown(false)
    };

    return (
        <div className={styles.container} style={{display: isShown? "block" : "none"}}>
            <div className={styles.wrap}>
                <button
                    className={styles.closeBtn}
                    style={{display: left? 'flex' : 'none'}}
                    onClick={handleBtnClick}

                >
                    <img src={closeBtnImg} alt=""/>
                </button>
                <div className={styles.popupCards}>
                    {popupCards.map((card, index) => {
                        return(
                            <PopupCard
                                image={card.image}
                                text={card.text}
                                key={`popupCard-${index}`}
                            />
                        )
                    })}
                </div>
                <button
                    className={styles.closeBtn}
                    style={{display: right? 'flex' : 'none'}}
                    onClick={handleBtnClick}
                >
                    <img src={closeBtnImg} alt=""/>
                </button>
            </div>
        </div>
    )
}
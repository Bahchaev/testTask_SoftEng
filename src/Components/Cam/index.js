import React, {useState} from 'react';
import styles from './styles.module.css'
import camImg from './cam.png'
import Popup from "../Popup"

export default function Cam({popupCards, popupCloseBtnLeft, popupCloseBtnRight}) {

    const [popupIsShown, setPopupIsShown] = useState(false)

    const onClick = () => {
        setPopupIsShown(true)
    };

    return (
        <div className={styles.rectangle}>
            <div className={styles.bg}>
                <img src={camImg} alt="camImg" className={styles.image}/>
            </div>
            <div className={styles.underText} onClick={onClick}>ПОДРОБНЕЕ</div>
            <Popup
                popupCards={popupCards}
                left={popupCloseBtnLeft}
                right={popupCloseBtnRight}
                isShown={popupIsShown}
                setIsShown={setPopupIsShown}
            />
        </div>
    )
}
import React, {useState} from 'react';
import styles from './styles.module.css'
import ReviewCard from "../ReviewCard";
import image from './avatar.svg'
import icDown from './ic-down.svg'

const reviewCards = [
    {
        avatar: image,
        author: "Алексей Гоно",
        text: "Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.",
        id: "1"
    },
    {
        avatar: image,
        author: "Некий Автор",
        text: "Некий отзыв тут просто вместо заглушки",
        id: "2"
    },
    {
        avatar: image,
        author: "Ещёодин Автор",
        text: "Ещё один отхыв от неизвестного автора",
        id: "3"
    },
];

export default function Reviews() {

    const [activeIndex, setActiveIndex] = useState(0);
    const btnHandleClick = () => {
        if (activeIndex < Object.keys(reviewCards).length-1) {
            setActiveIndex(activeIndex + 1)
        } else {
            setActiveIndex(0)
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.header}>Отзывы</div>
                <div className={styles.reviewCards}>
                    {reviewCards.map((card, index) => {
                        return (
                            <ReviewCard
                                avatar={card.avatar}
                                author={card.author}
                                text={card.text}
                                key={`review-card-${card.id}`}
                                isActive={index === activeIndex}
                            />
                        )
                    })}
                    <button onClick={btnHandleClick} className={styles.downBtn}>
                        <img src={icDown} alt="icDown"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import styles from './styles.module.css'
import BuyCardImages1 from "../BuyCard/BuyCardImages1";
import BuyCardImages2 from "../BuyCard/BuyCardImages2";
import BuyCardImages3 from "../BuyCard/BuyCardImages3";
import BuyCardImages4 from "../BuyCard/BuyCardImages4";
import BuyCard from "../BuyCard";

const buyCards = [
    {
        header: undefined,
        text: `Покупка`,
        images: BuyCardImages1(),
    },
    {
        header: undefined,
        text: `Рассрочка`,
        images: BuyCardImages2(),
    },
    {
        header: `Пакет`,
        text: `"Всё под клнтролем"`,
        images: BuyCardImages3(),
    },
    {
        header: `Пакет`,
        text: `"Тысяча пятьсот"`,
        images: BuyCardImages4(),
    },
];

export default function Buy() {
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.header}>Приобрести</div>
            </div>
            <div className={styles.buyCards}>
                {buyCards.map((card, index) => {
                    return (
                        <BuyCard
                            header={card.header}
                            text={card.text}
                            images={card.images}
                            key={`buy-card-${index}`}
                        />
                    )
                })}
            </div>
        </div>
    );
}
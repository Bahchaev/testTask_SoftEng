import React, {useState} from 'react';
import styles from './styles.module.css'
import Task1 from "../Task1";
import Task2 from "../Task2";

export default function App() {

    const [isShown, setIsShown] = useState(false)

    return (
        <div>
            <div className={styles.taskRadio}>
                <input
                    type={'radio'}
                    name={'task'}
                    id="task1-input"
                    onChange={() => setIsShown(true)}
                />
                <label htmlFor={"task1-input"}>task1</label>

                <input
                    type={'radio'}
                    name={'task'}
                    id="task2-input"
                    defaultChecked
                    onChange={() => setIsShown(false)}
                />
                <label htmlFor={"task2-input"}>task2</label>
            </div>

            <div style={{display: isShown ? 'block' : 'none'}}><Task1/></div>
            <div style={{display: !isShown ? 'block' : 'none'}}><Task2/></div>
        </div>
    );
};

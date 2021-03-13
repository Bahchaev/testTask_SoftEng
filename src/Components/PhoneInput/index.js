import React, {useState} from 'react';
import styles from './styles.module.css'

export default function PhoneInput() {

    const [value, setValue] = useState("___ ___ ____")

    return (
        <div>
            +7 <input type="phone"
                      value={value}
                      onChange={setValue}
        />
        </div>
    )
}
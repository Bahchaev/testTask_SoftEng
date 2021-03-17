import React from 'react';
import styles from './styles.module.css'
import * as json from '../../data.json'

const data = json.default;

export default function Task1() {
    return (
        <div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th >Name</th>
                    <th >Phone</th>
                    <th >Age</th>
                </tr>
                </thead>
                <tbody>
                {data.map(obj => {
                    return (
                        <tr key={obj.id}>
                            <td>{obj.name}</td>
                            <td style={{textAlign: "center"}}>{obj.phone}</td>
                            <td style={{textAlign: "center"}}>{obj.age}</td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    );
}

import React from 'react';
import * as json from '../../data.json'

const data = json.default;

export default function Task1() {
    console.log(data);
    return (
        <div className="App">
            <table>
                <thead>
                <tr>
                    <th style={{width: "33%"}}>Name</th>
                    <th style={{width: "33%"}}>Phone</th>
                    <th style={{width: "33%"}}>Age</th>
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

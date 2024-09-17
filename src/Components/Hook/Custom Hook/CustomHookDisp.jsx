import React from 'react'
import { useFetch } from './useFetch'

export default function CustomHookDisp() {
    const [fetch] = useFetch("https://66a89d9ae40d3aa6ff58ae79.mockapi.io/idmtechpark");
    return (
        <div>
            <h1>Custom Hook</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetch.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.SetName}</td>
                                    <td>{item.SetPhone}</td>
                                    <td>{item.SAge}</td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

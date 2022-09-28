import React from 'react'

interface prop {
    name: string,
    email: string,
    age: number,
    isMarried: boolean,
    friends: string[]
}

function Persont(prop: prop) {
    return (
        <div>
            <h1>{prop.name}</h1>
            <h1>{prop.email}</h1>
            <h1>{prop.age}</h1>
            <h1>This Person {prop.isMarried ? 'Is' : 'Not'} Married</h1>
            {
                prop.friends.map((names, index) => {
                    return <h1 key={index} >{names}</h1>
                })
            }
        </div>
    )
}

export default Persont


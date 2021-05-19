import React from 'react'

export default function Friend({ friend }) {
    return (
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}
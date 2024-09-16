import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import NewFriend from './NewFriend';

export default function FriendsList() {
    const [friends, setFriends] = useState([]) 

    useEffect(() => {
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <NewFriend />
            <h1>FRIENDS</h1>
            {friends.map(friend => {
                return(
                    <Friend friend={friend} key={friend.id}/>
                )
            })}
        </div>
    )
}

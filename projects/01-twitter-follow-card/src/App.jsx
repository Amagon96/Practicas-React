import { useState } from 'react'
import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        name: 'Miguel Angel Duran',
        userName: 'midudev',
        following: true
    },
    {
        name: 'Andree Amaro Gonzalez',
        userName: 'github/Amagon96',
        following: true
    },
    {
        name: 'Miguelon Moscas',
        userName: 'elonmusk'
    }
]

export const App = () => {

    return (
        <section className='App'>
            {users.map((user => {
                return(
                    <TwitterFollowCard
                        key={user.userName}
                        userName={user.userName}
                        initialIsFollowing={user.following}
                    >
                        {user.name}
                    </TwitterFollowCard>
                )
            }))}
        </section>
    )
}
import { appName } from '@/data/constData'
import React from 'react'

export default function SignUpTitle() {
    return (
        <>
            <h1 className='text-4xl font-black'>Sign Up</h1>
            <span className='text-3xl font-light'>Welcome 👋</span>
            <span className='text-muted-foreground'>Sign up to Get started with {appName.join('')}</span>
        </>
    )
}
"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import LoginTitle from './LoginTitle';
import SignUpTitle from './SignUpTitle';
import ForgotPasswordTitle from './ForgotPasswordTitle';
import ResetPasswordTitle from './ResetPasswordTitle';
import { logo_dark, logo_light } from '@/data/constData';

export default function AuthStyle({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname()
    const headerTitle = () => {
        switch (pathName) {
            case "/register":
                return <SignUpTitle />
            case "/forgot-password":
                return <ForgotPasswordTitle />
            case "/reset-password":
                return <ResetPasswordTitle />
            default:
                return <LoginTitle />
        }
    }
    return (
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">

                <div className="text-left">
                    <Image height={500} width={500} className="w-auto h-10 sm:h-14 block dark:hidden" src={logo_light} alt="" />
                    <Image height={500} width={500} className="w-auto h-10 sm:h-14 hidden dark:block" src={logo_dark} alt="" />
                    <div className='flex flex-col space-y-1'>
                        {headerTitle()}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import Link from 'next/link';
import { registerLink } from '@/data/constData';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleReset = (e: any) => {
        e.preventDefault();
        // Handle registration logic here
    };
    return (
        <div className="mt-8">
            <form onSubmit={handleReset}>
                <div className="mt-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">New Password</label>
                    <Input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className="focus-visible:ring-0" />
                </div>
                <div className="mt-6">
                    <label htmlFor="confirm-password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">New Password</label>
                    <Input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="focus-visible:ring-0" />
                </div>
                <div className="mt-6">
                    <Button variant={"default"} type="submit" className="w-full bg-primary hover:bg-primary/80">
                        Reset Password
                    </Button>
                </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                <Button variant={"link"} className="p-0">
                    <Link href={registerLink}>Sign-Up
                    </Link>
                </Button>.</p>
        </div>
    )
}

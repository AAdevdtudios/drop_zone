"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import Link from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    email: z.string().email({
        message: "Email is badly formatted"
    }),
})
type FormInputFields = z.infer<typeof schema>

export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputFields>({
        resolver: zodResolver(schema)
    })
    const handleReset: SubmitHandler<FormInputFields> = (e: any) => {
        console.log(e);
    };
    return (
        <div className="mt-8">
            <form onSubmit={handleSubmit(handleReset)}>
                <div className="mt-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                    <Input {...register("email")} type="email" id="email" name="email" placeholder="example@example.com" className="focus-visible:ring-0" />
                    {errors.email && (<span className="text-red-700">{errors.email.message}</span>)}
                </div>
                <div className="mt-6">
                    <Button variant={"default"} type="submit" className="w-full bg-primary hover:bg-primary/80">
                        Send Reset token
                    </Button>
                </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Button variant={"link"} className="p-0"><Link href={"/register"}>Sign-Up</Link></Button>.</p>

        </div>
    )
}

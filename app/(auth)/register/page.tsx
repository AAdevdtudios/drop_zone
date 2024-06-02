// pages/register.js
"use client";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/themeToggle';
import Link from 'next/link';
import { loginLink } from '@/data/constData';
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email({
        message: "Email is badly formatted"
    }),
    password: z.string().min(6)
})
type FormInputFields = z.infer<typeof schema>

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputFields>({
        resolver: zodResolver(schema)
    })

    const handleRegister: SubmitHandler<FormInputFields> = (e) => {
    };

    return (
        <>
            <div className="mt-8">
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</Label>
                            <Input {...register("firstName")} type="text" id="firstName" name="firstName" placeholder="First Name" className="focus-visible:ring-0" />
                            {errors.firstName && (<span className="text-red-700 text-sm">{errors.firstName.message}</span>)}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <Input {...register("lastName")} type="text" id="lastName" name="lastName" placeholder="Last Name" className="focus-visible:ring-0" />
                            {errors.lastName && (<span className="text-red-700 text-sm">{errors.lastName.message}</span>)}
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                        <Input {...register("email")} type="email" id="email" name="email" placeholder="example@example.com" className="focus-visible:ring-0" />
                        {errors.email && (<span className="text-red-700">{errors.email.message}</span>)}
                    </div>
                    <div className="mt-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <Input {...register("password")} type="password" id="password" name="password" placeholder="Your Password" className="focus-visible:ring-0" />
                        {errors.password && (<span className="text-red-700">{errors.password.message}</span>)}
                    </div>
                    <div className="mt-6">
                        <Button variant={"default"} type="submit" className="w-full bg-primary hover:bg-primary/80">
                            Sign up
                        </Button>
                    </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Already have an account?
                    <Button variant={"link"} className="p-0">
                        <Link href={loginLink}>
                            Login
                        </Link>
                    </Button>.</p>

            </div>
            <div className="w-full flex items-center justify-center">
                <ModeToggle />
            </div>
        </>
    );
}

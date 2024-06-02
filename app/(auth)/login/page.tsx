"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/ui/themeToggle"
import { forgotPasswordLink, registerLink } from "@/data/constData"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const schema = z.object({
    email: z.string().email({
        message: "Email is badly formatted"
    }),
    password: z.string().min(6)
})
type FormInputFields = z.infer<typeof schema>

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputFields>({
        resolver: zodResolver(schema)
    })
    const handleLogin: SubmitHandler<FormInputFields> = (e) => {
        toast.loading("Dealing with your shit")
        toast.dismiss()
    };
    return (
        <>
            <div className="mt-8">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mt-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                        <Input {...register("email")} type="email" id="email" name="email" placeholder="example@example.com" className="focus-visible:ring-0" />
                        {errors.email && (<span className="text-red-700">{errors.email.message}</span>)}
                        {/* <Input {...register("email")} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@example.com" className="focus-visible:ring-0" /> */}
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between items-baseline mb-2">
                            <Label htmlFor="password">Password</Label>
                            <Button variant={"link"} className="p-0"><Link href={forgotPasswordLink}>Forgot password?</Link></Button>
                        </div>
                        <Input {...register("password")} type="password" id="password" name="password" placeholder="Your Password" className="focus-visible:ring-0" />
                        {errors.password && (<div className="text-red-700">{errors.password.message}</div>)}
                        {/* <Input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" className="focus-visible:ring-0" /> */}
                    </div>

                    <div className="mt-6">
                        <Button variant={"default"} type="submit" className="w-full bg-primary hover:bg-primary/80">
                            Login
                        </Button>
                    </div>

                </form>

                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet?
                    <Button variant={"link"} className="p-0">
                        <Link href={registerLink}>Sign-Up
                        </Link>
                    </Button>.</p>

            </div>
            <div className="w-full flex items-center justify-center">
                <ModeToggle />
            </div>
        </>
    )
}

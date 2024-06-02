import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { logo_dark, logo_light } from "@/data/constData"

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center px-4 py-5 text-gray-800 dark:text-white">
            <div className="container px-6 py-6">
                <h1 className="text-lg font-bold text-center lg:text-2xl">
                    Join 31,000+ other and never miss <br /> out on new tips, tutorials, and more.
                </h1>

                <div className="flex flex-col justify-center mx-auto mt-6 gap-x-3 space-y-3 md:space-y-0 md:flex-row">
                    <Input className="px-4 w-full md:w-1/4 py-2 " />
                    <Button className="bg-primary" variant={"default"}>Submit</Button>
                </div>
                <Separator className="my-10" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <Link href="/">
                        <Image className="w-auto h-20 block dark:hidden" width={300} height={300} src={logo_light} alt="" />
                        <Image className="w-auto h-20 hidden dark:block" width={300} height={300} src={logo_dark} alt="" />
                    </Link>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <Link href="/about" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">About</Link>
                            <Link href="/blog" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">Blog</Link>
                            <Link href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">News</Link>
                            <Link href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center lg:justify-end">
                <Link href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">Be a driver</Link>
                <Link href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary hover:underline">Become a partner</Link>
            </div>

        </footer>
    )
}

import { ICMaterialSymbolsPinDropRounded } from "@/components/IconSVGs";
import Link from 'next/link'
import Image from "next/image"
import { logo_dark, logo_light, navLinksData, shopNavLinks } from '@/data/constData'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Heart, Menu, MenuIcon, Search, ShoppingCart, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLinks from "./NavLinks";
import { Separator } from "./ui/separator";

export default function StoreNavBar() {
    return (
        <div className="container flex items-center space-x-2 py-2">
            <Link href="/">
                <Image className="w-auto h-10 md:h-20 block dark:hidden" width={300} height={300} src={logo_light} alt="" />
                <Image className="w-auto h-10 md:h-20 hidden dark:block" width={300} height={300} src={logo_dark} alt="" />
            </Link>
            <div className="hidden xl:flex">
                <div className="rounded-sm flex items-center py-2 space-x-3">
                    <div className="p-2 bg-primary/20 rounded-md">
                        <ICMaterialSymbolsPinDropRounded />
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="leading-3 font-bold text-sm md:text-lg">Location</p>
                        <span className="text-nowrap max-w-20 overflow-hidden text-ellipsis text-sm text-right">Lorem ipsum dolor sit amet consectetur, </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-primary/5 flex rounded-md">
                <Input className="w-full border-0 bg-transparent ring-0 focus-visible:ring-0" placeholder="Search Products" />
                <Button variant={"ghost"} className="bg-transparent">
                    <Search />
                </Button>
            </div>
            <div className='flex space-x-2 xl:hidden'>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="border-primary">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'left'} className='w-[60%] h-full p-5 flex flex-col justify-between'>

                        <div className='flex flex-col gap-y-4 py-10'>
                            {shopNavLinks.map((c, i) => (
                                <Button variant="link" key={i}>
                                    <Link href={c.url} className="w-full flex justify-start space-x-2 items-center">
                                        {c.icon}<p className="text-sm font-normal">{c.title}</p>
                                    </Link>
                                </Button>
                            ))}
                            <Separator />
                            <div className='flex justify-between gap-x-1'>
                                <Button className='flex-1 bg-primary hover:bg-primary/80'>Sign Up</Button>
                                <Button className='flex-1' variant={'outline'}>Sign In</Button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <ICMaterialSymbolsPinDropRounded className="w-14 h-14 text-primary" />
                            <span className="text-nowrap max-w-full overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fuga? </span>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden xl:flex items-center space-x-2 px-3">
                <div className="flex justify-center space-x-2">
                    <User />
                    <p className="text-sm font-normal">Account</p>
                </div>
                <div className="flex justify-center space-x-2">
                    <Heart />
                    <p className="text-sm font-normal">Favorite</p>
                </div>
                <div className="flex justify-center space-x-2">
                    <ShoppingCart />
                    <p className="text-sm font-normal">Cart</p>
                </div>
            </div>
        </div>
    )
}

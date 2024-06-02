import { Button } from '@/components/ui/button'
import React from 'react'
import NavLinks from './NavLinks'
import { loginLink, logo_dark, logo_light, navLinksData, registerLink } from '@/data/constData'
import { ModeToggle } from '@/components/ui/themeToggle'
import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import Link from 'next/link'
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between mx-2 lg:mx-32 z-50 py-3">
      <Link href="/">
        <Image className="w-auto h-20 block dark:hidden" width={300} height={300} src={logo_light} alt="" />
        <Image className="w-auto h-20 hidden dark:block" width={300} height={300} src={logo_dark} alt="" />
      </Link>
      <div className='hidden lg:block'>
        <ul className="flex gap-4 items-center">
          {navLinksData.map((c, i) => { return <li key={i}><NavLinks name={c.name} url={c.url} /></li> })}
          <div className="mx-5" />
          <Button variant={"default"}>
            <Link href={registerLink}>Sign Up</Link>
          </Button>
          <Button variant={'outline'}><Link href={loginLink}>Sign In</Link></Button>
          <ModeToggle />
        </ul>
      </div>
      <div className='flex space-x-2 lg:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={'right'} className='w-[60%] p-5'>

            <div className='flex flex-col gap-y-4 py-10'>
              {navLinksData.map((c, i) => {
                return <NavLinks name={c.name} url={c.url} key={i} />
              })}
              <Separator />
              <div className='flex justify-between gap-x-1'>
                <Button className='flex-1'>Sign Up</Button>
                <Button className='flex-1' variant={'outline'}>Sign In</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet><ModeToggle />
      </div>
    </nav>
  )
}

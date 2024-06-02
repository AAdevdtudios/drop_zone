"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"


interface Props {
    name: string,
    url: string
}

export default function NavLinks({ name, url }: Props) {
    const pathName = usePathname()
    const isActive = pathName.endsWith(url)

    return (
        <Link href={url} className={isActive ? 'border-b-2 border-primary' : ''}>
            {name}
        </Link>
    )
}

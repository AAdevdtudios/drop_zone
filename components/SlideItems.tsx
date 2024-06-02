import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"
import { SlideItemType } from '@/data/constData'
import Link from "next/link"
export default function SlideItems({ description, image, title, btnText, infoText, smallText, url }: SlideItemType) {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 align-middle'>
            <div className='py-3 xl:py-0 mx-auto flex flex-col space-y-2 justify-center w-full'>
                {smallText && <span className='text-sm font-semibold bg-primary/30 py-1 px-3 rounded-md w-fit'>{smallText}</span>}
                <h2 className='text-3xl xl:text-6xl font-bold'>{title}</h2>
                <p className='text-sm font- text-slate-400'>{description}</p>
                <div>
                    {url && <Button className='bg-primary hover:bg-primary/80'>
                        <Link href={url}>{btnText}</Link>
                    </Button>}
                </div>
            </div>
            <Image src={image} className='w-full h-[300px] xl:h-[500px] rounded-md' height={500} width={500} alt='Something' />
        </div>
    )
}

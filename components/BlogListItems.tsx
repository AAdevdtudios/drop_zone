import React from 'react'
import Image from 'next/image'

interface Props {
    title: string,
    url: string,
    description: string,
    image: string,
    categories: string[]
}

export default function BlogListItems({ categories, title, url, image, description }: Props) {
    return (
        <a className="group block" href="#">
            <div className="overflow-hidden w-fit bg-gray-100 rounded-2xl dark:bg-neutral-800">
                <Image height={300} width={400} src={image} className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" alt="Image Description" />
            </div>

            <div className="pt-4">
                <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary/40 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                    {title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    {description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {categories.map((c, i) => <span key={i} className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        {c}
                    </span>)}
                </div>
            </div>
        </a>
    )
}

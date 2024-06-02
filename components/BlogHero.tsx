import React from 'react'
import Image from 'next/image'

export default function BlogHero() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                <div className="sm:order-2">
                    <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                        <Image height={500} width={500} className="size-full absolute top-0 start-0 object-cover rounded-lg" src="/pexels-kampus.jpg" alt="Image Description" />
                    </div>
                </div>

                <div className="sm:order-1">
                    <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-primary text-neutral-100">
                        Business insight
                    </p>

                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-neutral-200">
                        <a className="hover:text-primary dark:text-neutral-300 dark:hover:text-white" href="#">
                            How to get buy-in and budget for direct hiring
                        </a>
                    </h2>

                    <div className="mt-6 sm:mt-10 flex items-center">
                        <div className="flex-shrink-0">
                            <Image height={100} width={100} className="size-10 sm:h-14 sm:w-14 rounded-full" src="/pexels-kampus.jpg" alt="Image Description" />
                        </div>

                        <div className="ms-3 sm:ms-4">
                            <p className="sm:mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                                Louise Donadieu
                            </p>
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                                Strategic Marketing Consultant
                            </p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <a className="inline-flex items-center gap-x-1.5 text-primary decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                            Read more
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

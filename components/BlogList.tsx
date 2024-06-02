import React from 'react'
import Image from 'next/image'
import { blogList } from '@/data/constData'
import BlogListItems from './BlogListItems'

export default function BlogList() {
    return (
        <>
            <div className="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">Blog Posts</h2>
                <p className="mt-4 md:text-lg text-gray-600 dark:text-neutral-400">Get up to date with our post</p>
            </div>
            <div className="py-12 px-4 md:px-5 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                {blogList.map((c, i) => <BlogListItems key={i} title={c.title} url={c.url} description={c.description} image={c.image} categories={c.categories} />)}
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from industry experts.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a className="group" href="#">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image height={500} width={500} className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/austin.jpg" alt="Image Description" />
                            <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                                Sponsored
                            </span>
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                Studio by Preline
                            </h3>
                            <p className="mt-3 text-gray-800 dark:text-neutral-200">
                                Produce professional, reliable streams easily leveraging Preline innovative broadcast studio
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    <a className="group" href="#">
                        <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                            <Image height={500} width={500} className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/austin.jpg" alt="Image Description" />
                        </div>

                        <div className="mt-7">
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                                Onsite
                            </h3>
                            <p className="mt-3 text-gray-800 dark:text-neutral-200">
                                Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
                            </p>
                            <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                                Read more
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </p>
                        </div>
                    </a>
                    <a className="group relative flex flex-col w-full min-h-60 bg-[url('/ruslan-bardash.jpg')] bg-center bg-cover rounded-xl hover:shadow-lg transition" href="#">
                        <div className="flex-auto p-4 md:p-6">
                            <h3 className="text-xl text-white/90 group-hover:text-white"><span className="font-bold">Preline</span> Press publishes books about economic and technological advancement.</h3>
                        </div>
                        <div className="pt-0 p-4 md:p-6">
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
                                Visit the site
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

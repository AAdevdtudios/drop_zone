import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AboutTeam from '@/components/AboutTeam'
export default function About() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                                    Revolutionizing the Way You Work
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Discover how our innovative solutions can transform your business and unlock new levels of
                                    productivity and success.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <Image
                            alt="Hero"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                            height="550"
                            src="/pexels-kampus.jpg"
                            width="550"
                        />
                    </div>
                </div>
            </section>
            <section className="lg:px-10 py-10 mx-auto">
                <div className="container">
                    <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Mission</div>
                            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Empowering Businesses to Thrive
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our mission is to provide innovative solutions that help businesses of all sizes streamline their
                                operations, boost productivity, and achieve their goals. We&apos;re dedicated to empowering our clients with
                                the tools and resources they need to succeed in today&apos;s fast-paced, ever-changing business landscape.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Team</div>
                            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Driven by Passion and Expertise
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our team is comprised of industry-leading experts, innovators, and problem-solvers who are dedicated to
                                helping our clients achieve their goals. With a diverse range of backgrounds and skill sets, we work
                                collaboratively to deliver tailored solutions that drive measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-10 py-12 md:py-24 lg:py-32">
                <div className="container">
                    <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our History</div>
                            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                A Legacy of Innovation
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Our company was founded with a vision to revolutionize the way businesses operate. Over the years, we&apos;ve
                                continuously pushed the boundaries of what&apos;s possible, developing cutting-edge solutions that have
                                helped our clients achieve unprecedented levels of success.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">Our Values</div>
                            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Guiding Principles for Success
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                At the heart of our company are a set of core values that drive everything we do. These principles,
                                which include a commitment to innovation, a focus on customer success, and a dedication to ethical
                                business practices, are the foundation upon which we&apos;ve built our reputation as a trusted partner for
                                businesses of all sizes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <AboutTeam />
        </>
    )
}
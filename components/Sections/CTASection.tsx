import React from 'react'
import Image from 'next/image'
import { IcIonLogoAppleAppstore, IcMagePlaystore } from "@/components/IconSVGs";
import { appName } from '@/data/constData';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function CTASection() {
    return (
        <section>
            <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                <div className="flex justify-center xl:w-1/2">
                    <Image height={100} width={100} className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] object-cover rounded-full" src="/austin-distel.jpg" alt="Mobile App" />
                </div>

                <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                        Download our free mobile app
                    </h2>

                    <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">{appName.join()} Is available on playstore and appstore. You can order for items and also book for a deliver at ease with custom page for vendors who would like to sell on the platform. Easy fleet management and delivery system. <span className='text-primary/80'>Terms and Conditions</span> applied</p>


                    <div className="mt-6 sm:-mx-2 space-y-3 md:space-y-0 md:space-x-4 justify-center flex w-full flex-col md:flex-row px-3">
                        <Button asChild variant={"outline"} className="w-full">
                            <Link href="#">

                                <IcIonLogoAppleAppstore className="w-5 h-5 mx-2 fill-current" />
                                <span className="mx-2">
                                    Get it on AppStore
                                </span>
                            </Link>
                        </Button>

                        <Button asChild variant={"default"} className="w-full m-0 bg-primary hover:bg-primary/90">
                            <Link href="#">

                                <IcMagePlaystore className="w-5 h-5 mx-2 fill-current" />
                                <span className="mx-2">
                                    Get it on Google Play
                                </span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

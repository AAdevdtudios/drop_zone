import { appName, workOperation } from "@/data/constData"
import { PhoneCallIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import OperationSteps from "../OperationSteps"

export default function DashboardFeatures() {
  return (
    <section className="pt-10">
      <div className="bg-transparent">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="dark:text-white font-semibold text-2xl md:text-4xl md:leading-tight">How we Operate</h2>
            <p className="mt-1 text-neutral-400">
              {appName.join("")} simplifies the process of booking delivery services and optimizing shipping operations for business of all sizes. Heres a step-by-step guide on how our platform can help you streamline your deliveries
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <Image width={480} height={600} className="w-full object-cover rounded-xl" src="/austin.jpg" alt="Image Description" />
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-primary text-xs font-medium uppercase">
                  Steps
                </h3>
              </div>
              {workOperation.map((c, i) => {
                return <OperationSteps key={i} name={c.title} description={c.info} num={i + 1} />
              })}

              <Link href="/sign-up" className="group inline-flex items-center gap-x-2 py-2 px-3 bg-primary text-white dark:bg-primary-foreground font-medium text-sm dark:text-neutral-800 rounded-full focus:outline-none">
                <PhoneCallIcon className="flex-shrink-0 size-4" />
                {/* <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path><path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path></svg> */}
                Get Started today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

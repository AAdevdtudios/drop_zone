import { appName, integrationsItem } from '@/data/constData'
import { Code, Workflow, SandwichIcon, Book, BookOpen } from 'lucide-react'
import React from 'react'
import IntegrationItems from '../IntegrationItems'

export default function Integration() {
    return (
        <div className="max-w-5xl px-4 lg:px-0 py-10 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
                <h2 className="dark:text-white font-semibold text-2xl md:text-4xl md:leading-tight">Available Integrations</h2>
                <p className="mt-1 text-neutral-400">
                    {appName.join("")} simplifies the process of booking delivery services and optimizing shipping operations for business of all sizes. Heres a step-by-step guide on how our platform can help you streamline your deliveries
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                {integrationsItem.map((c, i) => <IntegrationItems key={i} name={c.title} description={c.description} icon={c.icon} />)}
            </div>
        </div>
    )
}

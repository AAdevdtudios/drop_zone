import { featuresList } from "@/data/constData";
import FeaturesItems from "../FeaturesItems";


export default function Features() {
    return (
        <section className="decoration-background" id="features">
            <div className="max-w-5xl px-4 lg:px-0 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span className="underline decoration-primary">Components</span></h1>

                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Leveraging our cutting-edge platform ensures that your packages not only reach their destination faster but also cost less.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    {featuresList.map((c, i) => {
                        return <FeaturesItems key={i} name={c.title} icon={c.icon} description={c.description} />
                    })}
                </div>
            </div>
        </section>
    )
}

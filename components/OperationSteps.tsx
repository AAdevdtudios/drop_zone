interface Props {
    name: string,
    description: string,
    num: number
}

export default function OperationSteps({ name, description, num }: Props) {
    return (
        <div className="flex gap-x-5 ms-1">
            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-primary font-semibold text-xs uppercase rounded-full">
                        {num}
                    </span>
                </div>
            </div>
            <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base dark:text-neutral-400">
                    <span className="dark:text-white text-primary font-bold">{name}: </span>
                    {description}
                </p>
            </div>
        </div>
    )
}

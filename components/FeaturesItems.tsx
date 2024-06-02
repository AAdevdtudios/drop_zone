interface Props {
  name: string,
  description: string,
  icon: React.ReactElement
}

export default function FeaturesItems({ name, description, icon }: Props) {
  return (
    <div className="space-y-3">
      <span className="inline-block p-3 text-primary-foreground bg-blue-100 rounded-full dark:text-white bg-primary ">
        {icon}
      </span>

      <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>

      <p className="text-gray-500 dark:text-gray-300">
        {description}
      </p>
    </div>
  )
}

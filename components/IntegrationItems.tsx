import { Button } from "./ui/button"

interface Props {
  name: string,
  description: string,
  icon: React.ReactElement
}
export default function IntegrationItems({ name, description, icon }: Props) {
  return (
    <div>
      <div className="text-primary dark:text-primary-foreground">
        {icon}
      </div>
      <div className="bg-gradient-to-r from-primary/20 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
        <div className="bg-primary w-9 h-0.5 "></div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  )
}

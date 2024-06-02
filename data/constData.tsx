import { BarChart2, Tag, BookOpen, Clock, Code, Compass, DollarSign, Heart, MessagesSquare, Shield, ShoppingBasket, Smartphone, User, Workflow } from "lucide-react"

// My URL Links
export const registerLink = "/register"
export const loginLink = "/login"
export const resetPasswordLink = "/reset-password"
export const forgotPasswordLink = "/forgot-password"
export const logo_light = "/drop-light.png"
export const logo_dark = "/drop.png"
export const logo = "/dropzone-icon.svg"

export const navLinksData = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Partners",
        url: "/partners"
    },
    {
        name: "Store",
        url: "/store"
    },
    {
        name: "Features",
        url: "/#features"
    },
    // {
    //     name: "Pricing",
    //     url: "/pricing"
    // },
    {
        name: "About",
        url: "/about"
    },
]

export const appName = ["Drop", "Zone"]

export const workOperation = [
    {
        title: "Choose Your Services",
        info: "Select from the range of delivery companies that are integrated with our services"
    },
    {
        title: "Book Your Slot",
        info: "Choose your preferred date time of operations on how often you get orders"
    },
    {
        title: "Integrate Seamlessly",
        info: `Connect ${appName[0]}${appName[1]} with your site to automate the process`
    },
    {
        title: "Delivery & Feedback",
        info: "Track the delivery and provide/receive feedback on the services"
    },
]
export const integrationsItem = [
    {
        title: "Widget",
        description: "Available to integrate with widget on your website",
        icon: <Workflow />
    },
    {
        title: "Api and SDK",
        description: "Available to integrate with Api and SDk",
        icon: <Code />
    },
    {
        title: "Documentation",
        description: "Documentation are available for reference",
        icon: <BookOpen />
    },
    {
        title: "Support 24/7",
        description: "Contact us 24 hours a day, 7 days a week",
        icon: <MessagesSquare />
    },
]
export const shopNavLinks = [
    {
        title: "Account",
        url: "/account",
        icon: <User />
    },
    {
        title: "Favorite",
        url: "/favorite",
        icon: <Heart />
    },
    {
        title: "Cart",
        url: "/cart",
        icon: <ShoppingBasket />
    },
    {
        title: "Sell",
        url: "/dashboard/sell",
        icon: <Tag />
    },
]

export const featuresList = [
    {
        title: "Increased Efficiency",
        description: "Users can automate booking and scheduling deliveries, saving time and reducing the manual effort required in managing logistics",
        icon: <Clock />
    },
    {
        title: "Cost Reduction",
        description: "Access to a network of multiple delivery services allows users to compare rates and choose the most cost-effective option",
        icon: <DollarSign />
    },
    {
        title: "Scalability",
        description: "Suitable for businesses of all sizes, from small startups to large enterprises, thanks to its scalable infrastructure",
        icon: <Compass />
    },
    {
        title: "Reliability",
        description: "Only partners with verified and reliable delivery services to ensure consistent and dependable delivery performance",
        icon: <Shield />
    },
    {
        title: "Enhanced Accessibility",
        description: "Accessible via mobile devices, allowing users to manage deliveries on the go",
        icon: <Smartphone />
    },
    {
        title: "Data Insights",
        description: "Provides a comprehensive dashboard with analytics and insights, helping businesses track performance and make data-driven decisions",
        icon: <BarChart2 />
    },
]

export const blogList = [
    {
        title: "New Update",
        url: "/new-update",
        description: "We are launching very soon be prepared",
        image: "/pexels-kampus.jpg",
        categories: ["Sparers", "Updates", "Top news"]
    },
    {
        title: "CEO Celebration",
        url: "/ceo-celebration",
        description: "We are Celebrating the big arrival of a new products",
        image: "/austin.jpg",
        categories: ["Sparers", "Updates", "Top news"]
    },
    {
        title: "New Update",
        url: "/new-update",
        description: "We are launching very soon be prepared",
        image: "/pexels-kampus.jpg",
        categories: ["Sparers", "Updates", "Top news"]
    },
    {
        title: "CEO Celebration",
        url: "/ceo-celebration",
        description: "We are Celebrating the big arrival of a new products",
        image: "/austin.jpg",
        categories: ["Sparers", "Updates", "Top news"]
    },
    {
        title: "New Update",
        url: "/new-update",
        description: "We are launching very soon be prepared",
        image: "/pexels-kampus.jpg",
        categories: ["Sparers", "Updates", "Top news"]
    },
]

export type SlideItemType = {
    title: string,
    smallText?: string,
    description: string,
    image: string,
    btnText?: string,
    infoText?: string
    url?: string
}

export const slide_items: SlideItemType[] = [
    {
        title: "Get your perfect outfit with our collection",
        smallText: "50% Off outfit",
        description: "We offer the best outfit from tailors and vendors inspected and reviewed before being published",
        image: "/cloth.png",
        btnText: "Start shopping",
        url: "/store/outfit"
    },
    {
        title: "Special 30% off weekend deals for new Users",
        smallText: "30% Off outfit",
        description: "Get 30% off for all new customer's with a dropzone free tee-shirt as gift to our new customer's",
        image: "/off-sale.png",
        btnText: "Sign-up",
        url: "/register"
    },
    {
        title: "Monthly Product hunts coming soon",
        description: "Prepare to get items at the cheapest prices with dropzone. For the first week of the months search for the available items at its cheapest value",
        image: "/sales-hunt.png",
        btnText: "Start Hunt",
        url: "/products"
    },
]
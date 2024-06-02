import StoreNavBar from "@/components/StoreNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <StoreNavBar />
            {children}
        </>
    );
}

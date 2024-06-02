import AuthStyle from "@/components/AuthStyle";
import { appName } from "@/data/constData";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication",
    description: `Login to get started with ${appName.join("")}`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(/ruslan-bardash.jpg)" }}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                    molestiae
                                </p>
                            </div>
                        </div>
                    </div>
                    <AuthStyle>
                        {children}
                    </AuthStyle>
                </div>
            </div>
        </>
    );
}

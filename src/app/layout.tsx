import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Navbar from "@/components/navbar"

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Portfolio website of Aranchi Moonkum",
    description: "Built with Next.js, TypeScript, and Tailwind CSS",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${jetBrainsMono.className} antialiased`}
            >
                <div className="min-h-screen bg-neutral-900 w-full relative"
                    style={{
                        backgroundImage: `
                 linear-gradient(to right, #262626 1px, transparent 1px),
                 linear-gradient(to bottom, #262626 1px, transparent 1px)
               `,
                        backgroundSize: "50px 50px"
                    }}>
                    <div className="md:flex md:flex-row md:justify-center">
                        <div className="md:min-w-[512px] md:w-full md:max-w-2xl">
                            <div className="flex flex-col justify-start max-w-2xl px-8 py-24">
                                <div className="flex flex-col gap-12 origin-left">
                                    <Header />
                                    <Navbar />
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

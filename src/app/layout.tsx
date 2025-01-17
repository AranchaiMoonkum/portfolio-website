import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
                <div className="min-h-screen w-full bg-[#151515] flex justify-center"
                    style={{
                        backgroundImage: `
                 linear-gradient(to right, #202020 1px, transparent 1px),
                 linear-gradient(to bottom, #202020 1px, transparent 1px)
               `,
                        backgroundSize: "50px 50px"
                    }}>
                    {children}
                </div>
            </body>
        </html>
    )
}

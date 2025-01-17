import Link from "next/link"

export default function Home() {
    return (
        <article className="flex flex-col gap-12">
            <span>
                <Link href="/works/pos-system" className="relative inline-flex flex-col gap-1 no-underline">
                    <h1>POS system <span className="text-red-500">[Work in process]</span></h1>
                    <span className="text-neutral-500">Jan 2025 - Current</span>
                </Link>
            </span>
            <span>
                <Link href="/works/spark-up" className="relative inline-flex flex-col gap-1 no-underline">
                    <h1>Spark UP</h1>
                    <span className="text-neutral-500">July 2024 - Oct 2024</span>
                </Link>
            </span>
            <span>
                <Link href="/works/stage" className="relative inline-flex flex-col gap-1 no-underline">
                    <h1>Stage</h1>
                    <span className="text-neutral-500">Nov 2023 - Mar 2024</span>
                </Link>
            </span>
        </article>
    )
}

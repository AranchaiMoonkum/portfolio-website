import Link from "next/link"

export default function Pos() {
    return (
        <article className="flex flex-col gap-12">
            <span className="flex flex-col gap-1">
                <h1>POS system <span className="text-red-500">[Work in process]</span></h1>
                <span className="text-neutral-500">Jan 2025 - Current</span>
            </span>
            <span>
                A POS system that is designed to be used in a restaurant and it is beginner-friendly for users who are not familiar with technology. The system is designed to be used on a tablet and it is built with Next.js, Tailwind CSS, and Supabase with Prisma.
            </span>
            <span>
                <Link href="https://github.com/AranchaiMoonkum/pos-system-website" className="text-neutral-500">Repository</Link>
            </span>
        </article>
    )
}

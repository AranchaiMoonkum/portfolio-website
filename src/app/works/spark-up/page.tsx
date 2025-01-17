import Link from "next/link"
export default function SparkUP() {
    return (
        <article className="flex flex-col gap-12">
            <span>
                <h1>Spark UP</h1>
                <span className="text-neutral-500">July 2024 - Oct 2024</span>
            </span>
            <span>
                Spark UP is a e-commerce website platform for pre-owned computer hardware. The platform is built with Next.js, Tailwind CSS with Shadcn/ui, and Supabase with Prisma.
            </span>
            <span>
                <Link href="https://github.com/AranchaiMoonkum/spark-up" className="text-neutral-500">Repository</Link>
            </span>
        </article>
    )
}

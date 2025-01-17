import Link from "next/link"

export default function Stage() {
    return (
        <article className="flex flex-col gap-12">
            <span>
                <h1>Spark UP</h1>
                <span className="text-neutral-500">July 2024 - Oct 2024</span>
            </span>
            <span>
                A platform that makes for students and staff to be able to chat, post and comment on the platform. The platform is built with Nuxt.js, and Tailwind CSS.
            </span>
            <span>
                <Link href="https://github.com/AranchaiMoonkum/stage-website" className="text-neutral-500">Repository</Link>
            </span>
        </article>
    )
}

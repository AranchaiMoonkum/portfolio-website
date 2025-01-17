import Link from "next/link"

export default function Connect() {
    return (
        <article className="flex flex-col gap-12">
            <h1 className="font-bold">Connect</h1>
            <ul className="flex flex-col gap-4">
                <li>
                    <Link href="https://www.facebook.com/aranchai.moonkum.2024/">Facebook</Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/arnxhi/">Instagram</Link>
                </li>
                <li>
                    <Link href="https://github.com/AranchaiMoonkum/">GitHub</Link>
                </li>
            </ul>
        </article>
    )
}

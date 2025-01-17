import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row gap-4">
                <li>
                    <Link href="/" className="text-neutral-500">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-neutral-500">About</Link>
                </li>
                <li>
                    <Link href="/connect" className="text-neutral-500">Connect</Link>
                </li>
            </ul>
        </nav>
    )
}

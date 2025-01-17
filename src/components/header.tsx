import Link from "next/link"

export default function Header() {
    return (
        <header className="flex flex-col gap-1">
            <h1 className="inline font-bold">Aranchai Moonkum</h1>
            <h2>
                A Software Engineering Student at <Link href="https://www.up.ac.th/">University of Phayao</Link>
            </h2>
        </header>
    )
}

import Link from "next/link"
import Image from "next/image"

export default function Pos() {
    return (
        <article className="flex flex-col gap-12">
            <span className="flex flex-col gap-1">
                <h1>POS system</h1>
                <span className="text-neutral-500">Jan 2025 - Mar 2025</span>
            </span>
            <section className="flex flex-col gap-4">
                <span>
                    A POS system that is designed to be used in a restaurant and it is beginner-friendly for users who are not familiar with technology. The system is designed to be used on a tablet and it is built with Next.js, Tailwind CSS, and Neon with Prisma.
                </span>
                <span className="flex flex-col justify-center items-center gap-2">
                    <Image src="/pos-system/screenshot-3.png" alt="POS system" width={1920} height={1080} />
                    <p className="text-neutral-500 text-sm">Overview page</p>
                </span>
                <span>
                    A overview page that shows the net sales, net expenses, gross profit and total orders. Also, calculate the profit margin and show as a graph.
                </span>
                <span className="flex flex-col justify-center items-center gap-2">
                    <Image src="/pos-system/screenshot-2.png" alt="POS system" width={1920} height={1080} />
                    <p className="text-neutral-500 text-sm">Menu page</p>
                </span>
                <span>
                    A menu page that shows the list of items that can be ordered. The user can add the menu to show in the new order page. The user can also add a new menu to the system and edit the existing menu.
                </span>
                <span className="flex flex-col justify-center items-center gap-2">
                    <Image src="/pos-system/screenshot-1.png" alt="POS system" width={1920} height={1080} />
                    <p className="text-neutral-500 text-sm">New order page</p>
                </span>
                <span>
                    A new order page that shows the list of items that the user has added from the menu page. The user can add the quantity of the item and the note for the kitchen. The user can also remove the item from the order.
                </span>
            </section>
            <span>
                <Link href="https://github.com/AranchaiMoonkum/pos-system-website" className="text-neutral-500">Repository</Link>
            </span>
        </article>
    )
}

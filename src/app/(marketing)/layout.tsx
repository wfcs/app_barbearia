import Link from "next/link"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="inline-block font-bold">BarberApp</span>
                        </Link>
                    </div>
                    <nav>
                        <Link
                            href="/login"
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium transition-colors hover:bg-primary/90"
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by BarberApp Team.
                    </p>
                </div>
            </footer>
        </div>
    )
}

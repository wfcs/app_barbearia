import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-sidebar border-r border-sidebar-border hidden md:block">
                <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
                    <span className="font-bold text-lg">BarberApp</span>
                </div>
                <nav className="p-4 space-y-2">
                    <Link href="/dashboard" className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        Overview
                    </Link>
                    <Link href="/dashboard/schedule" className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        Schedule
                    </Link>
                    <Link href="/dashboard/appointments" className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        Appointments
                    </Link>
                    <Link href="/dashboard/services" className="block px-4 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                        Services
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b px-6 flex items-center justify-between bg-background">
                    <div className="font-medium">Dashboard</div>
                    <div className="flex items-center gap-4">
                        {/* User Menu Placeholder */}
                        <div className="h-8 w-8 rounded-full bg-muted"></div>
                    </div>
                </header>
                <main className="flex-1 p-6 bg-muted/10">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border text-card-foreground">
                    {children}
                </div>
            </div>
        </div>
    )
}

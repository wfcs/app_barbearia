import Link from "next/link"

export default function ShopsPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans text-foreground bg-secondary/30">
            <header className="bg-primary text-primary-foreground py-6 shadow-md">
                <div className="container flex items-center justify-between">
                    <Link href="/" className="font-serif text-2xl font-bold tracking-tight">Barbearia Vintage</Link>
                    <nav>
                        <Link href="/login" className="text-sm font-medium hover:text-accent uppercase tracking-wide">Login</Link>
                    </nav>
                </div>
            </header>

            <main className="container py-12">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl font-bold text-primary mb-4">Nossas Unidades</h1>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Shop Card 1 */}
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
                            <span className="font-serif italic text-2xl">Unidade Centro</span>
                        </div>
                        <div className="p-6">
                            <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Barbearia Central</h3>
                            <p className="text-muted-foreground text-sm mb-4">Rua da Glória, 120 - Centro</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30 px-2 py-1 rounded-sm">Aberta</span>
                                <button className="text-primary hover:underline font-medium text-sm">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>
                    {/* Shop Card 2 */}
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                        <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
                            <span className="font-serif italic text-2xl">Unidade Vila</span>
                        </div>
                        <div className="p-6">
                            <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Barbearia da Vila</h3>
                            <p className="text-muted-foreground text-sm mb-4">Av. das Artes, 45 - Vila Madalena</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1 rounded-sm">Fechada</span>
                                <button className="text-primary hover:underline font-medium text-sm">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

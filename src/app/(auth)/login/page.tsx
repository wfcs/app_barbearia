import Link from "next/link"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground font-sans relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            <div className="w-full max-w-md space-y-8 px-4 py-8 sm:px-6 lg:px-8 border border-border bg-card rounded-lg shadow-xl relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                <div className="text-center">
                    <Link href="/" className="inline-block mb-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-serif font-bold text-xl border-2 border-accent">
                            B
                        </div>
                    </Link>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary font-serif">
                        Bem-vindo de volta
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Acesse sua conta para agendar seu corte.
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-sm border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 uppercase tracking-wide transition-colors shadow-md"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <Link href="/" className="text-sm text-accent hover:text-accent-foreground underline decoration-dotted">
                        Voltar para a barbearia
                    </Link>
                </div>
            </div>
        </div>
    )
}

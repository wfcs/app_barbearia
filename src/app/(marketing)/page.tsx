import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Scissors, MapPin, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 lg:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" /> {/* Texture overlay */}
        <div className="container relative z-10 flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-sm font-medium text-accent uppercase tracking-widest backdrop-blur-sm">
            Est. 2024
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-primary">
            Barbearia <span className="text-foreground">Vintage</span>
          </h1>
          <p className="max-w-[42rem] font-light text-lg sm:text-xl text-muted-foreground italic">
            "Cortando cabelos e fazendo amigos. A tradição do verdadeiro cavalheiro."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/login"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 uppercase tracking-wide border-2 border-primary hover:bg-primary/90"
            >
              Agendar Horário
            </Link>
            <Link
              href="/shops"
              className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-accent bg-transparent px-8 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground uppercase tracking-wide"
            >
              Nossas Unidades
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="features" className="container space-y-12 py-16 md:py-24">
        <div className="mx-auto flex flex-col items-center space-y-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-accent rounded-full" />
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Experiência completa de barbearia com toalha quente e navalha.
          </p>
        </div>
        <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Scissors className="h-8 w-8" />}
            title="Corte Clássico"
            description="Tesoura e máquina, acabamento impecável."
          />
          <FeatureCard
            icon={<Calendar className="h-8 w-8" />}
            title="Agendamento"
            description="Reserve seu horário online, sem filas."
          />
          <FeatureCard
            icon={<Star className="h-8 w-8" />}
            title="Barba Terapia"
            description="Hidratação, toalha quente e massagem."
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8" />}
            title="Clube de Assinatura"
            description="Torne-se membro e economize todo mês."
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container flex flex-col items-center text-center space-y-6">
          <div className="text-6xl text-accent font-serif opacity-50">"</div>
          <blockquote className="font-serif text-2xl md:text-4xl italic max-w-4xl">
            Não é apenas um corte de cabelo, é um ritual. Onde o passado encontra o presente.
          </blockquote>
          <cite className="font-sans font-bold tracking-widest uppercase not-italic text-sm text-accent">
            - Mestre Barbeiro
          </cite>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="rounded-full bg-secondary p-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

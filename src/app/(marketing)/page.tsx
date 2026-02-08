import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Scissors, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="/login"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted/80"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            The modern standard for{" "}
            <span className="text-primary">Barber Shops</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Manage your schedule, handle payments, and grow your business with our all-in-one platform.
            Robust, fast, and designed for professionals.
          </p>
          <div className="space-x-4">
            <Link
              href="/login"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/shops"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Find a Barber
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 rounded-3xl my-8">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to run your barber shop efficiently.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <FeatureCard
            icon={<Calendar className="h-10 w-10" />}
            title="Smart Scheduling"
            description="Manage appointments with ease. Block times, set recurring slots, and avoid double bookings."
          />
          <FeatureCard
            icon={<CreditCard className="h-10 w-10" />}
            title="Secure Payments"
            description="Accept payments online or in-person. Integrated with Stripe/Asaas for seamless transactions."
          />
          <FeatureCard
            icon={<Scissors className="h-10 w-10" />}
            title="Barber Tools"
            description="Track your earnings, manage your queue, and build your client portfolio."
          />
          <FeatureCard
            icon={<MapPin className="h-10 w-10" />}
            title="Shop Locator"
            description="Clients can easily find your shop based on location and services offered."
          />
        </div>
      </section>

    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          <div className="text-primary">{icon}</div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

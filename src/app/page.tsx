import Link from "next/link";

const dashboards = [
  {
    name: "Sales Floor",
    description: "RingCentral calls, agent performance and daily goals.",
    icon: "📞",
    href: "/dashboard/sales",
  },
  {
    name: "Loan Processing",
    description: "ARIVE pipeline, underwriting and funded loans.",
    icon: "🏠",
    href: "/dashboard/loans",
  },
  {
    name: "Operations Control",
    description: "Support tickets, priorities and resolution times.",
    icon: "📋",
    href: "/dashboard/operations",
  },
  {
    name: "Recruiting",
    description: "Zoho Bigin leads, appointments and conversions.",
    icon: "👥",
    href: "/dashboard/recruiting",
  },
  {
    name: "Goal Tracker",
    description: "Company targets and performance tracking.",
    icon: "🎯",
    href: "/dashboard/goals",
  },
  {
    name: "Executive Overview",
    description: "Company-wide KPIs and management reporting.",
    icon: "📊",
    href: "/dashboard/executive",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-widest text-sky-400">
            UNITED MORTGAGE
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            Dashboard Portal
          </h1>
          <p className="mt-3 text-slate-400">
            Internal analytics and operations management
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-7 text-xl font-semibold">
          Available Dashboards
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dashboards.map((dashboard) => (
            <Link
              key={dashboard.href}
              href={dashboard.href}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-sky-400 hover:bg-slate-800"
            >
              <div className="mb-5 text-4xl">
                {dashboard.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {dashboard.name}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {dashboard.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-sky-400">
                Open Dashboard →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

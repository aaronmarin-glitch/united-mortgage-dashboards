import Link from "next/link";
import { notFound } from "next/navigation";

const dashboards = {
  sales: "Sales Floor",
  loans: "Loan Processing",
  operations: "Operations Control",
  recruiting: "Recruiting",
  goals: "Goal Tracker",
  executive: "Executive Overview",
} as const;

type DashboardSection = keyof typeof dashboards;


export function generateStaticParams() {
  return Object.keys(dashboards).map((section) => ({
    section,
  }));
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;

  if (!(section in dashboards)) {
    notFound();
  }

  const title = dashboards[section as DashboardSection];

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-sky-400">
          Back to Dashboard Portal
        </Link>

        <p className="mt-12 text-sm font-bold tracking-widest text-sky-400">
          UNITED MORTGAGE
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          {title}
        </h1>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900 p-8">
          <h2 className="text-xl font-semibold">
            Dashboard Workspace
          </h2>

          <p className="mt-3 text-slate-400">
            This dashboard is ready for development.
            Data integrations and analytics will be added here.
          </p>
        </div>
      </div>
    </main>
  );
}

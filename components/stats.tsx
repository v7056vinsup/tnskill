const stats = [
  {
    value: "50+",
    label: "Courses Offered",
    description: "Across IT and Non-IT domains",
  },
  {
    value: "10,000+",
    label: "Students Guided",
    description: "And counting every day",
  },
  {
    value: "95%",
    label: "Success Rate",
    description: "Students placed in careers",
  },
  {
    value: "200+",
    label: "Industry Partners",
    description: "For placements & internships",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-border bg-surface/50 p-10 backdrop-blur-sm">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="gradient-text text-4xl font-extrabold sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-base font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

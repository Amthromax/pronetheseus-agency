const METRICS_LIST = [
  {
    value: "300%",
    label: "Client Capacity Boost",
    desc: "Scale active client retainers from 15 to 45 with zero extra operations hires."
  },
  {
    value: "90%",
    label: "Faster Client Onboarding",
    desc: "Client onboarding setup time cut from 14 days down to 15 minutes automatically."
  },
  {
    value: "120+ Hrs",
    label: "Monthly Hours Reclaimed",
    desc: "Reclaim account director & founder hours previously lost to manual reporting."
  },
  {
    value: "40%+",
    label: "Net Margin Expansion",
    desc: "Drastically increase profit margins by eliminating operational labor redundancy."
  }
];

export function ExpectedOutcomes() {
  return (
    <section id="expected-outcomes" className="relative bg-white py-16 text-neutral-900 md:py-24">
      <div className="container-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            What outcome can your agency expect?
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Hard, measurable operational benchmarks delivered directly to your P&L within 30 days of deployment.
          </p>
        </div>

        {/* 4 Hard Metrics Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS_LIST.map((m, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-neutral-200/80 bg-neutral-50/80 p-6 md:p-8 transition-all duration-300 hover:border-brand/50 hover:bg-white hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.8)] backdrop-blur-md"
            >
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient-brand tabular-nums">
                {m.value}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-neutral-900">{m.label}</h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

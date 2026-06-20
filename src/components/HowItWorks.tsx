const STEPS = [
  {
    step: "Step 01",
    title: "Connect your systems",
    body: "Plug Dayos into your existing stack — CRM, ERP, email, file storage — through pre-built connectors or our open API. No rip-and-replace.",
  },
  {
    step: "Step 02",
    title: "Define your workflows",
    body: "Use our visual builder to map business processes. AI agents handle the complexity; you set the rules, thresholds, and approval gates.",
  },
  {
    step: "Step 03",
    title: "Deploy and measure",
    body: "Go live in days, not quarters. Monitor throughput, accuracy, and time saved in real time. Dayos learns and improves with every cycle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-gap" id="solutions">
      <div className="page-container">
        {/* Section opener */}
        <div style={{ marginBottom: "var(--spacing-64)" }}>
          <p className="mono-tag" style={{ marginBottom: "var(--spacing-16)" }}>
            How it works
          </p>
          <h2
            className="text-display"
            style={{ color: "var(--color-ink-black)", maxWidth: 700 }}
          >
            From setup to{" "}
            <span className="yellow-word">scale</span>
            <br />
            in three moves
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-24)",
          }}
        >
          {STEPS.map((s, i) => (
            <div
              key={s.step}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-24)",
                minHeight: 280,
              }}
            >
              {/* Step number chip */}
              <span
                className="mono-tag"
                style={{
                  display: "inline-block",
                  background: i === 1 ? "var(--color-mint-pulse)" : "var(--color-surface-mist)",
                  borderRadius: "var(--radius-tag)",
                  padding: "4px 12px",
                  alignSelf: "flex-start",
                  color: "var(--color-ink-black)",
                }}
              >
                {s.step}
              </span>

              <h3
                className="text-heading-sm"
                style={{ color: "var(--color-ink-black)" }}
              >
                {s.title}
              </h3>

              <p className="text-body" style={{ color: "var(--color-graphite)", marginTop: "auto" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CAPABILITIES = [
  {
    tag: "01",
    title: "Document Intelligence",
    body: "Extract, classify, and validate documents at scale. Invoices, contracts, and compliance paperwork processed in seconds — not hours.",
  },
  {
    tag: "02",
    title: "Workflow Automation",
    body: "Connect your existing tools and let AI agents orchestrate multi-step processes across teams, with human-in-the-loop controls where it matters.",
  },
  {
    tag: "03",
    title: "Decision Analytics",
    body: "Surface the signals buried in your operational data. Real-time dashboards and predictive models that turn hindsight into foresight.",
  },
];

export default function Features() {
  return (
    <section className="section-gap" id="platform">
      {/* Section opener — white card */}
      <div className="page-container">
        <div
          className="card card-large"
          style={{ marginBottom: "var(--spacing-40)" }}
        >
          <p className="mono-tag" style={{ marginBottom: "var(--spacing-16)" }}>
            Platform
          </p>
          <h2 className="text-display" style={{ color: "var(--color-ink-black)", maxWidth: 900 }}>
            One platform.{" "}
            <span className="yellow-word">Every</span> workflow.
          </h2>
          <p
            className="text-subheading"
            style={{
              marginTop: "var(--spacing-24)",
              maxWidth: 560,
              color: "var(--color-ink-black)",
            }}
          >
            Dayos unifies document AI, workflow orchestration, and analytics
            into a single operating layer for your business.
          </p>
        </div>

        {/* Capability cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-24)",
          }}
        >
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.tag}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 320,
              }}
            >
              <div>
                <span
                  className="mono-tag"
                  style={{
                    display: "inline-block",
                    background: "var(--color-surface-mist)",
                    borderRadius: "var(--radius-tag)",
                    padding: "4px 12px",
                    marginBottom: "var(--spacing-24)",
                  }}
                >
                  {cap.tag}
                </span>
                <h3
                  className="text-heading-sm"
                  style={{
                    color: "var(--color-ink-black)",
                    marginBottom: "var(--spacing-16)",
                  }}
                >
                  {cap.title}
                </h3>
              </div>
              <p className="text-body" style={{ color: "var(--color-graphite)" }}>
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

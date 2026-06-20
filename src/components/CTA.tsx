export default function CTA() {
  return (
    <section className="section-gap" id="demo">
      <div className="page-container">
        <div
          className="card card-large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--spacing-40)",
          }}
        >
          {/* Headline */}
          <div style={{ maxWidth: 640 }}>
            <p className="mono-tag" style={{ marginBottom: "var(--spacing-16)" }}>
              Get started
            </p>
            <h2
              className="text-display"
              style={{ color: "var(--color-ink-black)" }}
            >
              Ready to{" "}
              <span className="yellow-word">move</span>
              <br />
              faster?
            </h2>
            <p
              className="text-subheading"
              style={{
                marginTop: "var(--spacing-24)",
                maxWidth: 480,
                color: "var(--color-ink-black)",
              }}
            >
              Book a 20-minute demo. We&rsquo;ll map your highest-impact
              workflow and show you exactly where Dayos saves time and money.
            </p>
          </div>

          {/* CTA button cluster */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-16)",
              alignItems: "flex-start",
              flexShrink: 0,
            }}
          >
            <a
              href="#"
              className="btn-dark btn-pill"
              style={{
                textDecoration: "none",
                fontSize: 16,
                padding: "14px 32px",
              }}
            >
              Schedule a Demo
            </a>
            <span className="text-caption" style={{ color: "var(--color-steel-gray)" }}>
              No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

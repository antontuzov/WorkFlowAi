export default function Hero() {
  return (
    <section
      className="page-container"
      style={{
        paddingTop: "var(--spacing-64)",
        paddingBottom: "var(--spacing-80)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--spacing-40)",
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <div style={{ maxWidth: 560 }}>
          {/* Mono tag */}
          <p className="mono-tag" style={{ marginBottom: "var(--spacing-16)" }}>
            AI for Business
          </p>

          {/* Display headline */}
          <h1 className="text-display-xl" style={{ color: "var(--color-ink-black)" }}>
            Automate
            <br />
            <span className="yellow-word">everything</span>
            <br />
            that slows
            <br />
            you down
          </h1>

          {/* Subheadline */}
          <p
            className="text-subheading"
            style={{
              marginTop: "var(--spacing-24)",
              maxWidth: 460,
              color: "var(--color-ink-black)",
            }}
          >
            Dayos deploys intelligent agents that handle the repetitive work
            your team shouldn&rsquo;t have to do — so you can focus on what
            actually moves the business forward.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-16)",
              marginTop: "var(--spacing-40)",
            }}
          >
            <a href="#demo" className="btn-dark btn-pill" style={{ textDecoration: "none" }}>
              Schedule a Demo
            </a>
            <a href="#platform" className="highlighted-link">
              See the platform &rarr;
            </a>
          </div>
        </div>

        {/* 3D Hero Object placeholder */}
        <div
          style={{
            aspectRatio: "1 / 1",
            background: "var(--color-surface-mist)",
            borderRadius: "var(--radius-card-large)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
          aria-label="3D hero illustration"
        >
          {/* Abstract 3D placeholder — cubes + hexagonal column */}
          <div style={{ position: "relative", width: "70%", height: "70%" }}>
            {/* Hexagonal column base */}
            <div
              className="hex-column"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                width: "40%",
                height: "60%",
                background:
                  "linear-gradient(145deg, #b8a99a 0%, #8c7e6f 50%, #6b5e50 100%)",
                borderRadius: "8px 8px 4px 4px",
                clipPath:
                  "polygon(50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%, 0% 10%)",
              }}
            />
            {/* Yellow cube */}
            <div
              className="cube-yellow"
              style={{
                position: "absolute",
                top: "5%",
                left: "28%",
                width: "28%",
                aspectRatio: "1",
                background: "var(--color-electric-yellow)",
                borderRadius: 8,
              }}
            />
            {/* Mint cube */}
            <div
              className="cube-mint"
              style={{
                position: "absolute",
                top: "18%",
                right: "18%",
                width: "22%",
                aspectRatio: "1",
                background: "var(--color-mint-pulse)",
                borderRadius: 8,
              }}
            />
            {/* Magenta cube */}
            <div
              className="cube-magenta"
              style={{
                position: "absolute",
                top: "2%",
                right: "28%",
                width: "18%",
                aspectRatio: "1",
                background: "#ff6fb5",
                borderRadius: 6,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

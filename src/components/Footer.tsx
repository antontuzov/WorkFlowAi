"use client";

const FOOTER_LINKS = {
  Product: ["Platform", "Integrations", "Pricing", "Changelog"],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "Blog", "Case Studies", "API Reference"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: "var(--spacing-80)",
        paddingBottom: "var(--spacing-40)",
      }}
    >
      <div className="page-container">
        {/* Top row — brand + link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4, 1fr)",
            gap: "var(--spacing-40)",
            marginBottom: "var(--spacing-80)",
          }}
        >
          {/* Brand block */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
                color: "var(--color-ink-black)",
                marginBottom: "var(--spacing-16)",
              }}
            >
              Dayos
            </p>
            <p
              className="text-body-sm"
              style={{ color: "var(--color-steel-gray)", maxWidth: 220 }}
            >
              AI-powered automation for the enterprise that refuses to slow down.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p
                className="mono-tag"
                style={{
                  marginBottom: "var(--spacing-16)",
                  color: "var(--color-graphite)",
                }}
              >
                {category}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--spacing-8)" }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-body-sm"
                      style={{
                        color: "var(--color-graphite)",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-ink-black)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-graphite)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--color-canvas-mist)",
            marginBottom: "var(--spacing-24)",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="text-caption" style={{ color: "var(--color-steel-gray)" }}>
            &copy; {new Date().getFullYear()} Dayos AI, Inc. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "var(--spacing-24)" }}>
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-caption"
                style={{
                  color: "var(--color-steel-gray)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-ink-black)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-steel-gray)")
                }
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

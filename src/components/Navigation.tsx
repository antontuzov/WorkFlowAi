"use client";

const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

export default function Navigation() {
  return (
    <header
      className="page-container"
      style={{ paddingTop: "var(--spacing-24)", paddingBottom: "var(--spacing-24)" }}
    >
      <nav className="nav-pill" style={{ justifyContent: "space-between" }}>
        {/* Brand */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-barlow)",
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: "-0.03em",
            color: "var(--color-ink-black)",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          Dayos
        </a>

        {/* Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-24)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a className="ghost-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#demo" className="btn-dark btn-pill" style={{ textDecoration: "none" }}>
          Schedule a Demo
        </a>
      </nav>
    </header>
  );
}

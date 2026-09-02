import type { ReactNode } from 'react';

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  updated?: string;
  active?: 'privacy' | 'terms' | 'support';
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  active,
  children,
}: LegalPageProps) {
  return (
    <div className="legal-shell">
      <div className="legal-mesh" aria-hidden="true" />
      <header className="legal-header">
        <nav className="legal-nav" aria-label="Main navigation">
          <a className="legal-brand" href="/" aria-label="Ninety home">
            <img src="/assets/ninety-icon.png" alt="" />
            <span>Ninety</span>
          </a>
          <div className="legal-nav-links">
            <a href="/privacy" aria-current={active === 'privacy' ? 'page' : undefined}>Privacy</a>
            <a href="/terms" aria-current={active === 'terms' ? 'page' : undefined}>Terms</a>
            <a href="/support" aria-current={active === 'support' ? 'page' : undefined}>Support</a>
          </div>
        </nav>
      </header>

      <main className="legal-main">
        <section className="legal-hero">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-description">{description}</p>
          {updated ? <p className="legal-updated">{updated}</p> : null}
        </section>
        {children}
      </main>

      <footer className="legal-footer">
        <a className="legal-brand" href="/">
          <img src="/assets/ninety-icon.png" alt="" />
          <span>Ninety</span>
        </a>
        <nav aria-label="Legal links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
        </nav>
        <p>© 2026 Ninety. Made for matchday.</p>
      </footer>
    </div>
  );
}

export function LegalSection({ children }: { children: ReactNode }) {
  return <section className="legal-section">{children}</section>;
}

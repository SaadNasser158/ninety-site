import TourRail from './TourRail';

function StoreBadge() {
  return (
    <div className="store-badge" aria-label="Coming soon on the App Store">
      <span className="apple-mark" aria-hidden="true"></span>
      <span>
        <small>Coming soon on the</small>
        <strong>App Store</strong>
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="top-mesh" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-pill" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Ninety home">
            <img src="/assets/ninety-icon.png" alt="" />
            <span>Ninety</span>
          </a>
          <div className="nav-links" aria-label="Page sections">
            <a href="#features">Features</a>
            <a href="#tour">Tour</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href="#download">
            Coming soon
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <img
            className="app-icon rise"
            src="/assets/ninety-icon.png"
            alt="Ninety app icon"
          />
          <p className="eyebrow rise delay-1">FOOTBALL, FOCUSED</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-word delay-1">Live.</span>{" "}
            <span className="hero-word delay-2">Follow.</span>{" "}
            <span className="hero-word delay-3">Feel.</span>
            <span className="sr-only">
              {" "}Ninety is the live football app for iPhone.
            </span>
          </h1>
          <p className="hero-subtitle rise delay-3">
            Every score, lineup and moment that matters — in one calm,
            beautifully fast football app.
          </p>
          <div className="store-wrap rise delay-4">
            <StoreBadge />
            <span className="store-note">Arabic &amp; English · No account required</span>
          </div>
        </div>

        <div className="hero-visual rise delay-4">
          <img
            src="/assets/ninety-two-hands-home-v2.png"
            alt="Two hands holding an iPhone with Ninety's real matchday screen open"
          />
        </div>
      </section>

      <section className="overview reveal" id="features" aria-labelledby="overview-title">
        <div className="overview-inner">
          <h2 id="overview-title">
            <span>Built around the match.</span> From kickoff to full time,
            Ninety keeps the essential story in view.
          </h2>
          <div className="capability-row" aria-label="Ninety highlights">
            <span>Live scores</span>
            <span>Lineups</span>
            <span>Match alerts</span>
            <span>Tables</span>
            <span>Player journeys</span>
          </div>
        </div>
      </section>

      <section className="track-section" id="follow" aria-labelledby="track-title">
        <div className="track-grid">
          <div className="track-copy reveal">
            <p className="section-label">FOLLOW</p>
            <h2 id="track-title">Your football. Right where you left it.</h2>
            <p className="section-lede">
              Follow a club, a competition or one match. Ninety brings the right
              fixtures forward without turning matchday into a crowded feed.
            </p>
            <ul className="feature-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Follow what matters</strong>
                  <p>Keep favourite clubs, competitions and individual fixtures together.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Know when it changes</strong>
                  <p>Goals, kickoff, half-time, VAR and full-time alerts arrive with context.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Return to the moment</strong>
                  <p>Every update opens directly into the correct match.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="track-visual reveal">
            <img
              className="track-hand"
              src="/assets/ninety-home-hands.png"
              alt="Two hands holding an iPhone with Ninety's real match feed open"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="tour-section" id="tour" aria-labelledby="tour-title">
        <div className="tour-heading reveal">
          <p className="section-label section-label-light">A CLOSER LOOK</p>
          <h2 id="tour-title">Every part of matchday.</h2>
          <p>
            Your feed, the formation, every event and the table — designed as
            one uninterrupted football journey.
          </p>
        </div>
        <TourRail />
      </section>

      <section className="language-section" id="language" aria-labelledby="language-title">
        <div className="language-grid">
          <div className="language-copy reveal">
            <p className="section-label section-label-lime">ARABIC &amp; ENGLISH</p>
            <h2 id="language-title">Football in your language.</h2>
            <p>
              Ninety is thoughtfully built for both directions — native
              right-to-left layouts, localized match states and football terms
              that feel at home in Arabic or English.
            </p>
            <p className="arabic-line" lang="ar" dir="rtl">
              كرة القدم بلغتك، من البداية حتى صافرة النهاية.
            </p>
          </div>
          <div className="language-visual reveal">
            <div className="phone-frame language-phone language-phone-back">
              <img src="/assets/match-story-en.png" alt="Ninety match detail in English" loading="lazy" />
            </div>
            <div className="phone-frame language-phone language-phone-front">
              <img src="/assets/home-ar.png" alt="واجهة تسعين الرئيسية باللغة العربية" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section" id="privacy" aria-labelledby="privacy-title">
        <div className="privacy-grid">
          <div className="privacy-copy reveal">
            <p className="section-label">PRIVATE BY DESIGN</p>
            <h2 id="privacy-title">Made for supporters, not advertisers.</h2>
            <p>
              Your football should feel personal without becoming a profile
              about you. Ninety keeps the relationship simple.
            </p>
            <a href="/privacy">
              Read the privacy policy <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="privacy-cards reveal">
            <article>
              <span>01</span>
              <h3>No account.</h3>
              <p>Start following football without registering or handing over personal details.</p>
            </article>
            <article>
              <span>02</span>
              <h3>No ads.</h3>
              <p>The match stays central. There is no advertising feed competing for attention.</p>
            </article>
            <article>
              <span>03</span>
              <h3>No profiling.</h3>
              <p>Your follows and preferences stay on your device whenever possible.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta" id="download" aria-labelledby="cta-title">
        <div className="final-copy reveal">
          <h2 id="cta-title">See football the Ninety way.</h2>
          <p>Fast when the match changes. Quiet when it doesn’t.</p>
          <div className="store-wrap">
            <StoreBadge />
            <span className="store-note">Designed in Saudi Arabia for football supporters everywhere.</span>
          </div>
        </div>
        <div className="cta-stage reveal">
          <div className="cta-atmosphere" aria-hidden="true" />
          <div className="phone-frame cta-phone cta-left">
            <img src="/assets/home-ar.png" alt="Ninety Home in Arabic" loading="lazy" />
          </div>
          <div className="phone-frame cta-phone cta-center">
            <img src="/assets/lineups-en.png" alt="Ninety lineup view" loading="lazy" />
          </div>
          <div className="phone-frame cta-phone cta-right">
            <img src="/assets/stats-en.png" alt="Ninety match statistics" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="faq-inner">
          <div className="faq-heading reveal">
            <p className="section-label">FAQ</p>
            <h2 id="faq-title">Questions, answered.</h2>
          </div>
          <div className="faq-list reveal">
            <details>
              <summary>What is Ninety?<span aria-hidden="true">+</span></summary>
              <p>Ninety is a focused football app for fixtures, live scores, lineups, match events, tables, players and the teams you follow.</p>
            </details>
            <details>
              <summary>Which competitions are available?<span aria-hidden="true">+</span></summary>
              <p>Ninety covers domestic, continental and international football. Detail availability can vary by competition and fixture.</p>
            </details>
            <details>
              <summary>Does Ninety support Arabic?<span aria-hidden="true">+</span></summary>
              <p>Yes. Arabic and English are fully supported, including native right-to-left layouts and localized football terminology.</p>
            </details>
            <details>
              <summary>Do I need to create an account?<span aria-hidden="true">+</span></summary>
              <p>No. You can start following football immediately without registering or sharing personal information.</p>
            </details>
            <details>
              <summary>How do alerts and Live Activities work?<span aria-hidden="true">+</span></summary>
              <p>Follow a club, competition or individual fixture, then choose the events you want. Eligible matches can stay visible on your Lock Screen and Dynamic Island.</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#top">
            <img src="/assets/ninety-icon.png" alt="" />
            <span>Ninety</span>
          </a>
          <nav aria-label="Legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </nav>
          <p>© 2026 Ninety. Made for matchday.</p>
        </div>
      </footer>
    </main>
  );
}

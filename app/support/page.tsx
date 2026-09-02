import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../LegalPage';

export const metadata: Metadata = {
  title: 'Support — Ninety',
  description: 'Get direct help with Ninety for iPhone.',
};

const supportEmail = 'alotaibi.saad158@gmail.com';

export default function SupportPage() {
  return (
    <LegalPage
      active="support"
      eyebrow="Direct help, from the developer"
      title={<>Ninety<br /><em>Support.</em></>}
      description="Need a hand with a match, alert, or Live Activity? Send a note and we’ll take it from there."
    >
      <section className="support-card" aria-label="Contact support">
        <div>
          <p className="legal-eyebrow">No support bot</p>
          <h2>Simple help,<br />straight from us.</h2>
          <p>Include a short description of the issue, your device model, and iOS version. Please never send passwords, tokens, or sensitive information.</p>
        </div>
        <a className="support-button" href={`mailto:${supportEmail}?subject=Ninety%20Support`}>Email support</a>
      </section>

      <section className="support-checks" aria-labelledby="quick-checks-title">
        <p className="legal-eyebrow">A few quick checks</p>
        <h2 id="quick-checks-title">Before you write.</h2>
        <div className="support-check-grid">
          <article><span>01</span><h3>Pull to refresh</h3><p>Try a fresh match update first.</p></article>
          <article><span>02</span><h3>Check permissions</h3><p>Confirm alerts and Live Activities are allowed in iPhone Settings.</p></article>
          <article><span>03</span><h3>Clear the cache</h3><p>Use Settings in Ninety to download match data again.</p></article>
        </div>
      </section>

      <div className="legal-columns support-columns">
        <article className="legal-column">
          <LegalSection>
            <h2>Privacy and terms</h2>
            <p>Read our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a>. Ninety requires no account, shows no ads, and uses no user-behavior analytics.</p>
          </LegalSection>
        </article>
        <article className="legal-column" lang="ar" dir="rtl">
          <LegalSection>
            <h2>دعم تسعين</h2>
            <p>مساعدة مباشرة من المطوّر، بلا حسابات أو روبوتات. أرسل وصفًا مختصرًا للمشكلة، ونوع جهازك، وإصدار iOS. لا ترسل أي رموز دخول أو بيانات حساسة.</p>
            <p><a href={`mailto:${supportEmail}?subject=Ninety%20Support`}>{supportEmail}</a></p>
          </LegalSection>
          <LegalSection>
            <h2>الخصوصية والشروط</h2>
            <p><a href="/privacy">سياسة الخصوصية</a> · <a href="/terms">شروط الاستخدام</a></p>
          </LegalSection>
        </article>
      </div>
    </LegalPage>
  );
}

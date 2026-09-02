import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Ninety',
  description: 'How Ninety for iPhone handles your information.',
};

const supportEmail = 'alotaibi.saad158@gmail.com';

export default function PrivacyPage() {
  return (
    <LegalPage
      active="privacy"
      eyebrow="Ninety legal"
      title={<>Privacy,<br /><em>without the fine print.</em></>}
      description="Ninety is built around your football, not a profile of you. Here is the plain-language version of how the app handles data."
      updated="Last updated: August 25, 2026"
    >
      <div className="legal-columns">
        <article className="legal-column">
          <LegalSection>
            <h2>What stays on your device</h2>
            <p>Ninety locally stores followed clubs and competitions, score and alert preferences, reminders, and a temporary match cache. It also creates a random installation identifier and secret to protect notification registrations.</p>
          </LegalSection>
          <LegalSection>
            <h2>Service data</h2>
            <p>The app contacts Ninety’s secure service to display fixtures and clubs. We do not send your name, email address, or contacts.</p>
            <ul>
              <li>Only when match alerts or Live Activities are enabled, we send a random installation ID, Apple push token, followed club, competition and match IDs, selected alert types, language, and time zone.</li>
              <li>This information is used only to deliver match updates to your device. It is not sold or used for advertising.</li>
              <li>Our hosting provider may process an IP address and basic technical logs to operate and protect the service.</li>
            </ul>
          </LegalSection>
          <LegalSection>
            <h2>Retention and deletion</h2>
            <ul>
              <li>Turning off match alerts or Live Activities deletes the related service registration.</li>
              <li>Inactive registrations are automatically removed after 60 days.</li>
              <li>Deleting the app removes preferences and cached data stored locally on the device.</li>
            </ul>
          </LegalSection>
          <LegalSection>
            <h2>Services we use</h2>
            <p>Ninety uses Sportmonks for football data, Apple Push Notification service for alerts and Live Activities, and Railway to host its secure service.</p>
          </LegalSection>
          <LegalSection>
            <h2>Questions and terms</h2>
            <p>For support or privacy questions, email <a href={`mailto:${supportEmail}?subject=Ninety%20Privacy`}>{supportEmail}</a>. Read the <a href="/terms">Terms of Use</a> and Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard Licensed Application End User License Agreement</a>.</p>
          </LegalSection>
        </article>

        <article className="legal-column" lang="ar" dir="rtl">
          <LegalSection>
            <h2>خصوصيتك في تسعين</h2>
            <p>تسعين هو كرة القدم بلا تتبع. لا يحتاج إلى حساب، ولا يعرض إعلانات، ولا يستخدم أدوات تحليل سلوك المستخدم.</p>
            <p>آخر تحديث: 25 أغسطس 2026</p>
          </LegalSection>
          <LegalSection>
            <h2>ما يبقى على جهازك</h2>
            <p>يحفظ تسعين محليًا الأندية والبطولات التي تتابعها، وتفضيلات إخفاء النتائج والتنبيهات، والتذكيرات، ونسخة مؤقتة من بيانات المباريات. كما ينشئ معرّف تثبيت عشوائيًا ومفتاحًا سريًا لحماية تسجيلات التنبيهات.</p>
          </LegalSection>
          <LegalSection>
            <h2>بيانات الخدمة</h2>
            <p>يتصل التطبيق بخدمة تسعين الآمنة لعرض المباريات والأندية. لا نرسل اسمك أو بريدك أو جهات اتصالك.</p>
            <ul>
              <li>عند تفعيل تنبيهات المباريات أو الأنشطة المباشرة فقط، نرسل معرّف التثبيت العشوائي ورمز Apple Push ومعرّفات الأندية والبطولات والمباريات المتابعة وأنواع التنبيهات المختارة واللغة والمنطقة الزمنية.</li>
              <li>تُستخدم هذه المعلومات فقط لإرسال تحديثات المباريات إلى جهازك. لا تُباع ولا تُستخدم للإعلانات.</li>
              <li>قد يعالج مزود الاستضافة عنوان IP وبيانات تقنية أساسية لتشغيل الخدمة وحمايتها.</li>
            </ul>
          </LegalSection>
          <LegalSection>
            <h2>الاحتفاظ والحذف</h2>
            <ul>
              <li>يؤدي إيقاف تنبيهات المباريات أو الأنشطة المباشرة إلى حذف تسجيل الخدمة المرتبط بها.</li>
              <li>تُحذف التسجيلات غير النشطة تلقائيًا بعد 60 يومًا.</li>
              <li>يؤدي حذف التطبيق إلى إزالة التفضيلات والبيانات المخزنة محليًا على الجهاز.</li>
            </ul>
          </LegalSection>
          <LegalSection>
            <h2>الخدمات المستخدمة</h2>
            <p>يستخدم تسعين Sportmonks لبيانات كرة القدم، وApple Push Notification service للتنبيهات والأنشطة المباشرة، وRailway لاستضافة خدمته الآمنة.</p>
          </LegalSection>
          <LegalSection>
            <h2>تواصل معنا والشروط</h2>
            <p>لطلب الدعم أو الاستفسار عن الخصوصية: <a href={`mailto:${supportEmail}?subject=Ninety%20Privacy`}>{supportEmail}</a>. اطلع على <a href="/terms">شروط الاستخدام</a> و<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">شروط استخدام Apple القياسية للتطبيقات المرخّصة</a>.</p>
          </LegalSection>
        </article>
      </div>
    </LegalPage>
  );
}

import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '../LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use — Ninety',
  description: 'The terms that apply when you use Ninety for iPhone.',
};

const supportEmail = 'alotaibi.saad158@gmail.com';
const appleEula = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

export default function TermsPage() {
  return (
    <LegalPage
      active="terms"
      eyebrow="Ninety legal"
      title={<>Terms of<br /><em>use.</em></>}
      description="The straightforward terms for using Ninety. Built to be read, not buried."
      updated="Last updated: August 25, 2026"
    >
      <div className="legal-columns">
        <article className="legal-column">
          <LegalSection>
            <h2>Agreement</h2>
            <p>By downloading or using Ninety, you agree to these Terms of Use and to Apple’s <a href={appleEula}>Standard Licensed Application End User License Agreement</a>. If these terms conflict, Apple’s standard terms govern to the extent required by Apple.</p>
          </LegalSection>
          <LegalSection>
            <h2>The app</h2>
            <p>Ninety provides football fixtures, scores, match events, lineups, statistics, and alerts for personal, non-commercial use. Football data is provided by Sportmonks and may vary by competition, location, and fixture.</p>
          </LegalSection>
          <LegalSection>
            <h2>Availability and accuracy</h2>
            <p>We work to keep match information timely and accurate, but live sports data can be delayed, incomplete, changed, or unavailable. Ninety is not intended for betting, gambling, or any decision where uninterrupted or error-free data is essential.</p>
          </LegalSection>
          <LegalSection>
            <h2>Notifications</h2>
            <p>Match alerts and Live Activities are optional. You control them in Ninety and in iPhone Settings. Delivery depends on your device, network connection, and Apple’s notification service.</p>
          </LegalSection>
          <LegalSection>
            <h2>Changes and contact</h2>
            <p>We may update Ninety or these terms as the app evolves. Material changes will be reflected by the date above. Questions? Email <a href={`mailto:${supportEmail}?subject=Ninety%20Terms`}>{supportEmail}</a>.</p>
          </LegalSection>
        </article>

        <article className="legal-column" lang="ar" dir="rtl">
          <LegalSection>
            <h2>شروط الاستخدام</h2>
            <p>باستخدامك تسعين أو تنزيله، فإنك توافق على هذه الشروط وعلى <a href={appleEula}>اتفاقية ترخيص Apple القياسية للمستخدم النهائي</a>. إذا وُجد تعارض، فتسري شروط Apple القياسية بالقدر الذي تقتضيه Apple.</p>
            <p>آخر تحديث: 25 أغسطس 2026</p>
          </LegalSection>
          <LegalSection>
            <h2>التطبيق</h2>
            <p>يوفر تسعين المباريات والنتائج والأحداث والتشكيلات والإحصاءات والتنبيهات للاستخدام الشخصي غير التجاري. تقدم Sportmonks بيانات كرة القدم، وقد يختلف توفرها حسب البطولة والموقع والمباراة.</p>
          </LegalSection>
          <LegalSection>
            <h2>التوفر والدقة</h2>
            <p>نحرص على أن تكون بيانات المباريات مباشرة ودقيقة، لكن بيانات الرياضة قد تتأخر أو تكون ناقصة أو تتغير أو لا تتوفر. لا يُقصد بتسعين استخدامه للمراهنات أو لأي قرار يتطلب بيانات مستمرة وخالية من الأخطاء.</p>
          </LegalSection>
          <LegalSection>
            <h2>التنبيهات</h2>
            <p>تنبيهات المباريات والأنشطة المباشرة اختيارية. يمكنك التحكم بها من تسعين ومن إعدادات iPhone. يعتمد وصولها على جهازك واتصالك بالشبكة وخدمة تنبيهات Apple.</p>
          </LegalSection>
          <LegalSection>
            <h2>التغييرات والتواصل</h2>
            <p>قد نحدّث تسعين أو هذه الشروط مع تطور التطبيق. ستنعكس التغييرات المهمة في التاريخ أعلاه. للاستفسارات: <a href={`mailto:${supportEmail}?subject=Ninety%20Terms`}>{supportEmail}</a></p>
          </LegalSection>
        </article>
      </div>
    </LegalPage>
  );
}

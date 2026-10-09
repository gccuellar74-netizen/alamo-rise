export function GoogleConsentMode() {
  const consentScript = `
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });
  `;

  return (
    <script
      id="google-consent-mode"
      dangerouslySetInnerHTML={{
        __html: consentScript,
      }}
    />
  );
}
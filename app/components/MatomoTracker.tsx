"use client";

import Script from "next/script";

export const MatomoTracker = () => {
  return (
    <>
      <Script id="matomo-config" strategy="afterInteractive">
        {`
        _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
        _paq.push(["setCookieDomain", "*.jpomian.pl"]);
        _paq.push(["setDoNotTrack", true]);
        _paq.push(["disableCookies"]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//analytics.jpomian.pl/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="//analytics.jpomian.pl/matomo.js"
      />
    </>
  );
};

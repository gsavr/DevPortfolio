"use client";

import Script from "next/script";

// using async makes the app have better performance
export const GoogleAnalyticsTracking: React.FC = async () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-GOOGLEID"
      />
      <Script defer id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QD6WMRP7VE');
        `}
      </Script>
    </>
  );
};

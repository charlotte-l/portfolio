import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet title='Charlotte Cameron - Creative Developer'>
      <html lang="en" dir="ltr" />

      <link
        rel="preload"
        href="/fonts/playfair-display-v25-latin-700-subset.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="canonical" href="https://charlottecameron.dev/" />
      <meta name="description" content='Hi! My name is Charlotte. I make fast, accessible and beautiful web experiences.' />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content='https://charlottecameron.dev/' />
      <meta property="og:title" content='Charlotte Cameron - Creative Developer' />
      <meta property="og:site_name" content='Charlotte Cameron - Creative Developer' />
      <meta property="og:description" content='Hi! My name is Charlotte. I make fast, accessible and beautiful web experiences.' />
      <meta property="og:image" content="https://charlottecameron.dev/share-image.jpg" />
      <meta property="og:image:secure_url" content="https://charlottecameron.dev/share-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Hi! My name is Charlotte. I make fast, accessible and beautiful web experiences." />
      <meta name="twitter:title" content="Charlotte Cameron - Creative Developer" />
      <meta name="twitter:image" content="https://charlottecameron.dev/share-image.jpg" />
      <script type='application/ld+json'>
        {`{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Charlotte Cameron - Creative Developer",
          "url": "https://charlottecameron.dev/",
          "inLanguage": "en",
          "description": "Hi! My name is Charlotte. I make fast, accessible and beautiful web experiences."
        }`}
      </script>

      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "e098f1c317fb4aa1a7c7c9b5b3345762"}'
      />
    </Helmet>
  );
};

export default SEO;

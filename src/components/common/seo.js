import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
  const { defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    useStaticQuery(getSiteMeta).site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" dir="ltr" />

      <link
        rel="preload"
        href="/fonts/playfair-display-v25-latin-700-subset.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && <meta property="og:description" content={seo.description} />}

      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "e098f1c317fb4aa1a7c7c9b5b3345762"}'
      />
    </Helmet>
  );
};

export default SEO;

const getSiteMeta = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

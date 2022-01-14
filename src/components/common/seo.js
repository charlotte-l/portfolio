import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const { pathname } = useLocation()

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = useStaticQuery(getSiteMeta).site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang='en' dir="ltr" />

      <link rel="preload" href="/fonts/playfair-display-v25-latin-700.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

      <meta name="description" content={seo.description} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

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
`
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Discover premium products with advanced filtering and responsive design." />
        <meta property="og:title" content="Discover Our Products" />
        <meta property="og:description" content="Browse our curated product collection with seamless filters." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Product Listing Page",
          "description": "Product listing with filters and responsive layout"
        })}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

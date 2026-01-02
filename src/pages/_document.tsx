import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ✅ Google Search Console Verification */}
          <meta
            name="google-site-verification"
            content="cfVMmdeWU7YAmjtelTWD4oJCXjcouNbLhzWeRDvwuB0"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico?v=1" />

          {/* Remix Icons CDN */}
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

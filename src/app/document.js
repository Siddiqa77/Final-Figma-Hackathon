// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"></script>
      </Head>
      <body>
        <div hidden id="snipcart" data-api-key="YOUR_SNIPCART_API_KEY"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

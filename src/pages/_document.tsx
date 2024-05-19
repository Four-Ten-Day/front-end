import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_KEY}&autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
};

export default Document;

import NextDocument, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

import * as fs from "fs";
import * as path from "path";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps
    };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
        </Head>

        <body className="overflow-y-scroll">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

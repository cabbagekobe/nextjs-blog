import NextDocument, {
  Html,
  Head,
  Main,
  NextScript
} from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="jp">
        <Head />

        <body className="overflow-y-scroll">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

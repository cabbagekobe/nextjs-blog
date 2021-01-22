import Head from "next/head";
import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";

import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.any,
  home: PropTypes.any
};

const name = "cabbagekobe";
export const siteTitle = "cabbaekobe.info";

export default function Layout({ children, home }: any) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="prose prose-sm max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </main>

      <Footer />
    </div>
  );
}

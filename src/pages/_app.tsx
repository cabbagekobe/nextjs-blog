// import "../styles/global.scss";
//
// import React from "react";
// import App, { Container } from "next/app";
//
// import BLOG from "../../blog.config";
//
// export default class MyApp extends App {
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};
//
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//
//     return {
//       pageProps
//     };
//   }
//
//   render () {
//     const { Component, pageProps } = this.props;
//
//     return (
//       <Component {...pageProps} />
//     );
//   }
// }

import Head from "next/head";
import { AppProps } from "next/app";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import BLOG from "../../blog.config";

const Application = ({ Component, pageProps }: AppProps) => {

  return (
    <Component {...pageProps} />
  );
};

export default Application;

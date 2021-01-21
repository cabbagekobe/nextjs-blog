import Head from "next/head";
import { AppProps } from "next/app";
import React, { useCallback, useState, useEffect, useMemo } from "react";

import '../styles/globals.css'

import BLOG from "../../blog.config";

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default Application;

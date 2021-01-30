import { useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'

import {
  MDXProvider
} from '@mdx-js/react'

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className}`} {...props} />
  ),
  'pre.code': ({ className, ...props }) => (
    <code className={`${className}`} {...props} />
  ),
}

export default function Post({ meta, children }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  },[])

  return (
    <Layout>
      <SectionContainer>
        <article>
          <header>
            <time>
              {meta.date}
            </time>

            <h1>
              {meta.title}
            </h1>
          </header>

          <main>
            <MDXProvider components={mdxComponents}>
              {children}
            </MDXProvider>
          </main>

          <footer>
            TODO: Post Navigation
          </footer>
        </article>
      </SectionContainer>
    </Layout>
  )
}

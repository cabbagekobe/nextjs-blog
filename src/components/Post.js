import Head from 'next/head'
import Link from 'next/link'

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
  return (
    <article>
      <header>
        <h1>
          {meta.title}
        </h1>

        <time>
          {meta.date}
        </time>
      </header>

      <div>
        <MDXProvider components={mdxComponents}>
          {children}
        </MDXProvider>
      </div>
    </article>
  )
}

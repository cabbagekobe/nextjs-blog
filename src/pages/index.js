import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

import getAllPosts from "../lib/getAllPosts"

const posts = getAllPosts()

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>te</title>
      </Head>

      <ul>
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link}>
              <article>
                <h2>
                  <Link href={link}>
                    <a>
                      {meta.title}
                    </a>
                  </Link>
                </h2>
              </article>
            </li>
          );
        })}
      </ul>
    </Layout>
  )
}


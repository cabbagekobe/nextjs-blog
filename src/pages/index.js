import Head from 'next/head'
import Link from 'next/link'

import getAllPosts from "@/lib/getAllPosts"

import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'

import { Site } from "@/site.config";

const posts = getAllPosts()

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{Site.title}</title>
      </Head>

      <SectionContainer>
        <ul>
          {posts.map(({ link, module: { default: Component, meta } }) => {
            return (
              <li key={link}>
                <article>
                  <header>
                    <time>
                      {meta.date}
                    </time>

                    <h1>
                      <Link href={link}>
                        <a>
                          {meta.title}
                        </a>
                      </Link>
                    </h1>
                  </header>
                </article>

                <hr />
              </li>
            );
          })}
        </ul>
      </SectionContainer>
    </Layout>
  )
}


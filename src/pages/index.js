import Head from 'next/head'
import Link from 'next/link'

import getAllPosts from "@/lib/getAllPosts"

import Layout from '@/components/Layout'
import SectionContainer from '@/components/SectionContainer'
import PostHeader from '@/components/PostHeader'

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
                  <PostHeader title={meta.title} date={meta.date} link={link} />
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


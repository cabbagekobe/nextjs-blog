import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";
import BlogTitle from "../components/blogTitle";

import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>

      <section className="">
        <ul className="">
          {allPostsData.map(({ id, date, title }) => (
            <li className="" key={id}>
              <BlogTitle blogTitle={title} href={`/posts/${id}`} />

              <Date dateString={date} />

              <hr/ >
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}

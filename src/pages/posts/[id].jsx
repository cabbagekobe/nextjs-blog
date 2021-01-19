import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

import Date from "../../components/date";
import BlogTitle from "../../components/blogTitle";

import styles from "../../components/layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h3>
          {postData.title}
        </h3>

        <Date dateString={postData.date} />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}

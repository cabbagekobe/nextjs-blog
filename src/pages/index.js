import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/lib/getAllPostPreviews";

import { Blog } from "@/blog";

import PostDateTime from "@/components/PostDateTime";

const posts = getAllPostPreviews();

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <title>{Blog.title}</title>

        <meta name="description" content={Blog.description} />
      </Head>

      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">

                    <PostDateTime>
                      {meta.date}
                    </PostDateTime>
                  </dd>
                </dl>

                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900 hover:text-gray-700">
                          {meta.title}
                        </a>
                      </Link>
                    </h2>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

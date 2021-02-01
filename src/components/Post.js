import Head from "next/head";
import Link from "next/link";

import { Blog } from "@/blog";

import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

import PageTitle from "@/components/PageTitle";
import PostDateTime from "@/components/PostDateTime";

export const mdxComponents = {
  pre: ({ className, ...props }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  "pre.code": ({ className, ...props }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

export default function Post({ meta, children, posts }) {
  const router = useRouter();
  const postIndex = posts.findIndex((post) => post.link === router.pathname);
  const previous = posts[postIndex + 1];
  const next = posts[postIndex - 1];

  return (
    <article className="xl:divide-y xl:divide-gray-200">
      <Head>
        <title>{meta.title} – {Blog.title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta name="twitter:title" content={`${meta.title} – Tailwind CSS`} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://blog.tailwindcss.com${meta.image}`} />

        <meta property="og:url" content={`https://blog.tailwindcss.com${router.pathname}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${meta.title} – Tailwind CSS`} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://blog.tailwindcss.com${meta.image}`} />
        <meta name="description" content={meta.description}></meta>
      </Head>

      <header className="pt-6 xl:pb-10">
        <div className="space-y-1">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">

                <PostDateTime>
                  {meta.date}
                </PostDateTime>
              </dd>
            </div>
          </dl>

          <PageTitle>
            {meta.title}
          </PageTitle>
        </div>
      </header>

      <div className="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20" style={{ gridTemplateRows: "auto 1fr" }} >
        <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
          <dt className="sr-only">
            Authors
          </dt>

          <dd>
            <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
              <li className="flex items-center space-x-2">
                <img src="https://pbs.twimg.com/profile_images/578611695599230976/fJ3oNTXZ_400x400.png" alt="" className="w-10 h-10 rounded-full" />
                <dl className="text-sm font-medium leading-5 whitespace-no-wrap">
                  <dt className="sr-only">Name</dt>
                  <dd className="text-gray-900">
                    キャベツこうべ
                  </dd>
                  <dt className="sr-only">Twitter</dt>
                  <dd>
                    <a href="https://twitter.com/cabbagekobe" className="text-teal-500 hover:text-teal-600">
                      @cabbagekobe
                    </a>
                  </dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl>

        <div className="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="prose max-w-none pt-10 pb-8">
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </div>

        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="space-y-8 py-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Article
                  </h2>
                  <div className="text-teal-500 hover:text-teal-600">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="pt-8">
            <Link href="/">
              <a className="text-teal-500 hover:text-teal-600">&larr; Back to the blog</a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}

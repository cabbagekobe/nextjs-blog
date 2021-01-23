import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/getAllPostPreviews";

const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{YYYY}.{Mo}.{DD}", { padMonth: true, padDays: true });

export default function Home() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta name="twitter:title" content="Blog – Tailwind CSS" />
        <meta name="twitter:description" content="News content from the Tailwind CSS team." />

        <meta property="og:url" content="https://blog.tailwindcss.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Tailwind CSS" />
        <meta property="og:description" content="News content from the Tailwind CSS team." />

        <title>Blog – Tailwind CSS</title>
        <meta name="description" content="News content from the Tailwind CSS team." />
      </Head>

      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">

                    <time dateTime={meta.date}>
                      {postDateTemplate.render(new Date(meta.date))}
                    </time>
                  </dd>
                </dl>

                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={link}>
                        <a className="text-gray-900">{meta.title}</a>
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

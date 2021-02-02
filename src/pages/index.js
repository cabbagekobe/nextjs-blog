import Head from 'next/head'
import { Site } from "@/site";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Site.title}</title>
      </Head>

      <main>
        <h1>
          {Site.title}
        </h1>
      </main>
    </div>
  )
}

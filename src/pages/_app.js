import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/SectionContainer'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>

      <SectionContainer>
        <Header />
      </SectionContainer>

      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>

      <SectionContainer>
        <Footer />
      </SectionContainer>
    </div>
  )
}

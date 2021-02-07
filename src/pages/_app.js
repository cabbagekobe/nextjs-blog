import "@/styles/tailwind.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />

      <div className="flex flex-col min-h-screen">
        <Header />

        <SectionContainer>
          <main>
            <Component {...pageProps} />
          </main>
        </SectionContainer>

        <Footer />
      </div>
    </>
  );
}

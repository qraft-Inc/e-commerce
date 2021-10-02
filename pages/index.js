import Head from 'next/head'
import Hero from "../components/hero";
import Layout from "../components/layout";
import Craft from "../components/craft";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
      <>
        <Head>
          <title>Home | Qraft Academy</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
          <Layout>
              <Hero />
              <Craft/>
              <Testimonials/>
          </Layout>
      </>
  )
}

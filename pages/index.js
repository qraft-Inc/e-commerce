import Head from 'next/head'
import Hero from "../components/Hero";
import Store from '../components/Store';
import TabMenu from '../components/TabMenu';


export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Qraft Academy</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />

        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </Head>

      <Hero />
      <Store />
      <TabMenu />

    </>
  )
}

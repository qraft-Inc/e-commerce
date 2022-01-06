import Head from 'next/head'
import Hero from "../components/Hero";
// import Layout from "../components/Layout";
import Artist from "../components/Artists";
import Designers from "../components/Designers";
import axios from 'axios'


// get id param for selected shot
// export const getStaticPaths = async () => {

//   const res = await axios.get("http://localhost:1337/api/qraftstores?populate=*");
//   const shots = await res.data;

//   const paths = shots.map((shot) => {
//       return {
//           params: { id: shot._id }
//       }
//   });

//   return {
//       paths,
//       fallback: false
//   }
// }


//fetch data from db
export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/api/qraftstores?populate=*");
  const photos = await res.data.data;

  return {
    props: { photos },
  };
}


export default function Home({ photos }) {

  return (
    <>
      <Head>
        <title>Home | Qraft Academy</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Hero />
      <Artist photos={photos} />
      <Designers photos={photos} />

    </>
  )
}

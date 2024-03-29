import '../styles/global.css'
import '../styles/styles.css'
import Layout from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </UserProvider>
  )
}

export default MyApp
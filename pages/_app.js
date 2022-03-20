import 'nextra-theme-blog/style.css'
import '../styles/main.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chrissie Muhorakeye</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

import Head from 'next/head'
import IndexMainSlider from 'components/index/IndexMainSlider'
import styles from '../styles/Home.module.css'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <IndexMainSlider />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

IndexPage.getInitialProps = async ({ store }) => {
  return {}
}
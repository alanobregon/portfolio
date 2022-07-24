import Head from "next/head";
import Link from "next/link";
import { About } from "../components/About";
import { Layout } from "../components/Layout";

import styles from "../styles/404.module.css";

export default function PageNotFound() {;

  return (
    <Layout title="Alan Obregón | 404">
      <Head>
        <meta name="description" content="Alan Obregón | Page not found" />
      </Head>

      <div className={styles.container}>
        <div className={styles.close}>
          <Link href={`/`}>
            <a>
              &times;
            </a>
          </Link>
        </div>
        <h1 className={styles.title}>Page not found</h1>
      </div>
      <About />
    </Layout>
  )
}

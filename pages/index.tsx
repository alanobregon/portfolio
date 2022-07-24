import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";

import { About } from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alan Obregón</title>
        <meta name="description" content="Alan Obregon's website" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.header}>
          alan obregon
        </h1>

        <ul className={styles.links}>
          <li>
            <h2>
              <Link href={`/code`}>
                <a>code</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href={`/articles`}>
                <a>posts & articles</a>
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href={`/portfolio`}>
                <a>portfolio</a>
              </Link>
            </h2>
          </li>
        </ul>

        <About />
      </div>
    </>
  );
};

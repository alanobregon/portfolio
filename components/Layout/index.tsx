import Head from "next/head";
import { Header } from "../Header";
import { FC, ReactNode } from "react";

import styles from "./styles.module.css"
import { About } from "../About";
import { useRouter } from "next/router";

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { 
    title = "Alan Obregón",
    children, 
  } = props;

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      {children}

      {
        router.pathname !== "/about" 
          && <About />
      }
    </div>
  );
};

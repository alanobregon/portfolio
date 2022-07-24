import Head from "next/head";
import { Header } from "../Header";
import { FC, ReactNode } from "react";

import styles from "./styles.module.css"

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<Props> = (props) => {
  const { 
    title = "Alan Obregón",
    children, 
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />
      { children }
    </div>
  );
};

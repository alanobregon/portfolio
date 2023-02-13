import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Page() {
  return (
    <>
      <h1 className={styles.header}>alan obregon</h1>
      <ul className={styles.links}>
        <li>
          <Link href={"/code"}>code</Link>
        </li>
        <li>
          <Link href={"/articles"}>posts & articles</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>portfolio</Link>
        </li>
      </ul>
    </>
  );
}

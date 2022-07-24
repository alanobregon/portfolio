import Link from "next/link";
import styles from "./styles.module.css";

import { useRouter } from "next/router";

interface Item {
  name: string;
  href: string;
}

export const Header = () => {
  const items: Item[] = [
    { name: "code", href: "/code" },
    { name: "posts & articles", href: "/articles" },
    { name: "portfolio", href: "/portfolio" },
  ];

  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <ul className={styles.header}>
        <li className={styles.home}>
          <Link href={`/`}>
            <a>home</a>
          </Link>
        </li>
        {items.map((item) => {
          return item.href !== pathname && (
            <li key={item.name} className={styles.items}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

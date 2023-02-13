"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

const urls = [
  { href: "/code", title: "code" },
  { href: "/articles", title: "posts & articles" },
  { href: "/portfolio", title: "portfolio" },
]
export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <ul className={styles.header}>
        <li className={styles.home}>
          <Link href={"/"}>
            home
          </Link>
        </li>
        { urls.map(url => url.href !== pathname && (
          <li key={url.href} className={styles.items}>
            <Link href={url.href}>
              {url.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
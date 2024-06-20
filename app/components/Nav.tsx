"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav.module.scss";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/login" ? styles.active : ""
        }`}
        href="/login"
      >
        Login
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/movies" ? styles.active : ""
        }`}
        href="/movies"
      >
        Movies
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/profile" ? styles.active : ""
        }`}
        href="/profile"
      >
        Profile
      </Link>
    </nav>
  );
};

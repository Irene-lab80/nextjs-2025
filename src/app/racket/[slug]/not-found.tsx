// components/NotFound/TennisSuperSimple404.jsx
"use client";

import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  const rackets = [
    "Wilson Pro Staff",
    "Babolat Pure Drive",
    "Head Speed Pro",
    "Yonex EZONE 100",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.title}>Ракетка не найдена!</p>

      <div className={styles.racketIcon}>🎾</div>

      <p className={styles.message}>
        Похоже, вы ищете ракетку, которой у нас нет...
      </p>

      <div className={styles.suggestions}>
        <p>Но у нас есть эти отличные ракетки:</p>
        <div className={styles.racketList}>
          {rackets.map((racket, i) => (
            <Link key={i} href="#" className={styles.racket}>
              {racket}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Link href="/" className={styles.button}>
          На главную
        </Link>
        <Link href="/rackets" className={styles.buttonOutline}>
          Все ракетки
        </Link>
      </div>
    </div>
  );
}

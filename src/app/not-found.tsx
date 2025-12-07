// app/not-found.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./NotFound.module.css";

export default function Space404() {
  const starsRef = useRef(null);
  const starsCreated = useRef(false);

  useEffect(() => {
    // Создаем звезды только на клиенте и один раз
    if (starsRef.current && !starsCreated.current) {
      createStars();
      starsCreated.current = true;
    }

    function createStars() {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      starsContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = styles.star;

        // Рандомные параметры
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 400;
        const top = Math.random() * 350;
        const opacity = Math.random() * 0.8 + 0.2;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}px`;
        star.style.top = `${top}px`;
        star.style.opacity = opacity;

        // Разные анимации мерцания
        const animationDuration = Math.random() * 6 + 3;
        const animationDelay = Math.random() * 5;
        star.style.animation = `${
          i % 3 === 0 ? "twinkle1" : i % 3 === 1 ? "twinkle2" : "twinkle3"
        } ${animationDuration}s infinite ${animationDelay}s`;

        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text_group}>
        <p className={styles.text_404}>404</p>
        <p className={styles.text_lost}>
          The page you are looking for <br />
          has been lost in space.
        </p>

        <div className={styles.button_group}>
          <Link href="/" className={styles.button}>
            🚀 Return to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            ↩️ Go Back
          </button>
        </div>
      </div>

      <div className={styles.window_group}>
        <div className={styles.window_404}>
          <div className={styles.stars} ref={starsRef}></div>
          <div className={styles.planet}></div>
          <div className={styles.satellite}></div>
        </div>
      </div>
    </div>
  );
}

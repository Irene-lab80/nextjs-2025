"use client";
import s from "./GlobalError.module.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className={s.body}>
        <h2>Что-то пошло не так!</h2>
        <div>{error && error.message}</div>
        <button onClick={reset}>Перезагрузить</button>
      </body>
    </html>
  );
}

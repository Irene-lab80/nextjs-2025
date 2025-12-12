"use client";
import s from "./Error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={s.body}>
      <h2>Ошибка загрузки ракетки</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}

"use client";
import Link from "next/link";
import s from "./Navigation.module.css";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Navigation() {
  const segment = useSelectedLayoutSegment();
  console.log("segment", segment);
  return (
    <nav className={s.nav}>
      <Link href="/">Главная</Link>
      <Link href="/racket-list">Ракетки</Link>
    </nav>
  );
}

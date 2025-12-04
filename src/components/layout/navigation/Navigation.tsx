"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navigation.module.css";
import { Routes } from "@/lib/routes";

const navigationConfig = [
  { id: 1, href: Routes.HOME, displayName: "Главная" },
  { id: 2, href: Routes.RACKETS, displayName: "Ракетки" },
];

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string | null) => pathname === href;

  return (
    <nav className={s.nav}>
      {navigationConfig.map((route) => (
        <Link
          key={route.id}
          className={isActive(route.href) ? s.linkActive : s.link}
          href={route.href}
        >
          {route.displayName}
        </Link>
      ))}
    </nav>
  );
}

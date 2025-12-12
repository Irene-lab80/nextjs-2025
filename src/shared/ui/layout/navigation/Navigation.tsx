import { Routes } from "@/lib/routes";
import { NavLink } from "@/shared/ui/NavLink/NavLink";
import s from "./Navigation.module.css";

const navigationConfig = [
  { id: 1, href: Routes.HOME, displayName: "Главная" },
  { id: 2, href: Routes.RACKETS, displayName: "Ракетки" },
  { id: 3, href: Routes.TOP_10_RACKETS, displayName: "Top-10" },
];

export default function Navigation() {
  return (
    <nav className={s.nav}>
      {navigationConfig.map((route) => (
        <NavLink key={route.id} href={route.href}>
          {route.displayName}
        </NavLink>
      ))}
    </nav>
  );
}

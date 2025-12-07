"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import s from "./NavLink.module.css";
import cn from "classnames";

type NavLinkProps = LinkProps & {
  children: ReactNode;
};

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link {...props} className={cn({ [s.active]: isActive })}>
      {children}
    </Link>
  );
};

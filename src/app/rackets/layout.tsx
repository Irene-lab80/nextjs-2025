"use client";
import { brands } from "@/data/mock";
import s from "./Layout.module.css";
import { useState } from "react";

export default function RacketListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedBrand, setSelectedBrand] = useState("all");

  return (
    <div className={s.wrapper}>
      <div className={s.filters}>
        Бренд
        <ul className={s.list}>
          <li
            className={selectedBrand === "all" ? s.selected : ""}
            onClick={() => setSelectedBrand("all")}
          >
            All
          </li>
          {brands.map((el) => (
            <li
              key={el.id}
              className={selectedBrand === el.name ? s.selected : ""}
              onClick={() => setSelectedBrand(el.name)}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}

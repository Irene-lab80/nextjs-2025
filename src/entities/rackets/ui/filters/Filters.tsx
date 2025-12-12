"use client";
import { Brand } from "../../model/types";
import { useState } from "react";
import s from "./Filters.module.css";

export default function Filters({ brands }: { brands: Brand[] }) {
  const [selectedBrandId, setSelectedBrandId] = useState<null | number>(null);

  return (
    <div className={s.filters}>
      Бренд
      <ul className={s.list}>
        <li
          className={selectedBrandId === null ? s.selected : ""}
          onClick={() => setSelectedBrandId(null)}
        >
          Все
        </li>
        {brands.map((brand) => (
          <li
            key={brand.id}
            className={selectedBrandId === brand.id ? s.selected : ""}
            onClick={() => setSelectedBrandId(brand.id)}
          >
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

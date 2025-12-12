import RacketList from "@/entities/rackets/ui/list/RacketList";
import Link from "next/link";
import { LinkIcon } from "@/shared/icons/link";
import { Routes } from "@/lib/routes";
import { fetchProducts } from "@/api/get-products";
import { fetchTop10Products } from "@/api/get-top-10-products";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function Home() {
  const res = await Promise.allSettled([
    fetchProducts({ page: 1, limit: 10 }),
    fetchTop10Products(),
  ]);

  const data = [
    res[0].status === "fulfilled" && res[0].value.data ? res[0].value.data : [],
    res[1].status === "fulfilled" && res[1].value.data ? res[1].value.data : [],
  ];

  if (res[0].status === "rejected" && res[1].status === "rejected") {
    notFound();
  }

  return (
    <div>
      <div>
        <div className={styles.top}>
          <h2>Top 10</h2>
          <Link className={styles.allButton} href={Routes.TOP_10_RACKETS}>
            Все <LinkIcon />
          </Link>
        </div>
        <RacketList rackets={data[1]} />
      </div>

      <div>
        <div className={styles.top}>
          <h2>Ракетки</h2>
          <Link className={styles.allButton} href={Routes.RACKETS}>
            Все <LinkIcon />
          </Link>
        </div>
        <RacketList rackets={data[0]} />
      </div>
    </div>
  );
}

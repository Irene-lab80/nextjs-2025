import RacketList from "@/components/ui/list/RacketList";
import { fetchProducts } from "../lib/api";
import Link from "next/link";
import { LinkIcon } from "@/components/icons/link";
import styles from "./page.module.css";
import { Routes } from "@/lib/routes";

export default async function Home() {
  let data = null;
  let error = null;

  try {
    const res = await fetchProducts();
    data = res;
  } catch (e) {
    console.error("Failed to fetch data:", error);
    error = e as Error;
  }

  return (
    <>
      <div className={styles.top}>
        <h2>Ракетки</h2>
        <Link className={styles.allButton} href={Routes.RACKETS}>
          Все <LinkIcon />
        </Link>
      </div>
      {data ? <RacketList rackets={data.slice(0, 3)} /> : "not found..."}
      <div>{error ? error.message : null}</div>
    </>
  );
}

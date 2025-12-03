import RacketList from "@/components/ui/list/RacketList";
import { fetchProducts } from "../lib/api";
import styles from "./page.module.css";
import { rackets } from "@/data/mock";
import Link from "next/link";

export default async function Home() {
  let data = null;
  try {
    const res = await fetchProducts();
    data = res;
  } catch (error) {
    // console.error("Failed to fetch data:", error);
  }

  return (
    <>
      <div className={styles.top}>
        <h2>Ракетки</h2>
        <Link href={"/racket-list"}>Все</Link>
      </div>
      <RacketList rackets={rackets.slice(0, 3)} />
    </>
  );
}

import { Racket } from "@/lib/api";
import styles from "./RacketList.module.css";
import RacketCard from "../card/RacketCard";

export default function RacketList({ rackets }: { rackets: Racket[] }) {
  return (
    <div className={styles.list}>
      {rackets.map((el) => (
        <RacketCard key={el.id} racket={el} />
      ))}
    </div>
  );
}

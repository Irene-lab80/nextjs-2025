import styles from "./RacketList.module.css";
import RacketCard from "../card/RacketCard";
import { Racket } from "../../model/types";

export default function RacketList({ rackets }: { rackets: Racket[] }) {
  return (
    <div className={styles.list}>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </div>
  );
}

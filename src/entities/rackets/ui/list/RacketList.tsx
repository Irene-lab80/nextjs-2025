import styles from "./RacketList.module.css";
import RacketCard from "../card/RacketCard";
import { Racket } from "../../model/types";
import { ListHeader } from "../list-header";

type Props = {
  rackets: Racket[];
  title: string;
  href: string;
};

export default function RacketList({ rackets, title, href }: Props) {
  return (
    <>
      <ListHeader title={title} href={href} />
      <div className={styles.list}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
}

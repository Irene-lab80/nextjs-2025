import styles from "./RacketList.module.css";
import RacketCard from "../card/RacketCard";
import { Racket } from "../../model/types";
import { ListHeader } from "../list-header";

type Props = {
  rackets: Racket[];
  headerProps?: {
    title: string;
    href: string;
  };
};

export default function RacketList({ rackets, headerProps }: Props) {
  return (
    <>
      {headerProps && (
        <ListHeader title={headerProps.title} href={headerProps.href} />
      )}
      <div className={styles.list}>
        {rackets.map((racket) => (
          <RacketCard key={racket.id} racket={racket} />
        ))}
      </div>
    </>
  );
}

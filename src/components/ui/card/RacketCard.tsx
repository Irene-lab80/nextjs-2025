import { Racket } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { getCurrency } from "@/lib/getCurrency";
import { Routes } from "@/lib/routes";
import styles from "./RacketCard.module.css";

export default function RacketCard({ racket }: { racket: Racket }) {
  return (
    <Link href={`${Routes.RACKET}/${racket.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src={racket.imageUrl}
          alt={racket.name}
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className={styles.info}>
        <div>{racket.name}</div>
        <div>{getCurrency(racket.price)}</div>
      </div>
    </Link>
  );
}

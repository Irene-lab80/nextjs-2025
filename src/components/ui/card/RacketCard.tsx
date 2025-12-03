import { Racket } from "@/lib/api";
import styles from "./RacketCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function RacketCard({ racket }: { racket: Racket }) {
  return (
    <Link href={`/racket/${racket.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          fill
          src={racket.imageUrl}
          alt={racket.name}
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div>{racket.name}</div>
      <div>{racket.price}</div>
    </Link>
  );
}

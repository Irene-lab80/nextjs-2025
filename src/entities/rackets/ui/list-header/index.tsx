import { LinkIcon } from "@/shared/icons/link";
import Link from "next/link";
import styles from "./ListHeader.module.css";

type Props = {
  title: string;
  href: string;
};

export const ListHeader = ({ title, href }: Props) => {
  return (
    <div className={styles.top}>
      <h2>{title}</h2>
      <Link className={styles.allButton} href={href}>
        Все <LinkIcon />
      </Link>
    </div>
  );
};

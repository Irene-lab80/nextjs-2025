import { fetchProductById, fetchProducts } from "@/lib/api";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getCurrency } from "@/lib/getCurrency";
import styles from "./Racket.module.css";

export async function generateStaticParams() {
  const rackets = await fetchProducts();

  return rackets.slice(0, 3).map((racket) => ({
    slug: String(racket.id),
  }));
}

export default async function Racket({ params }: PageProps<"/racket/[slug]">) {
  let data = null;
  let error = null;

  const param = await params;
  try {
    const res = await fetchProductById(param.slug);
    data = res;
  } catch (e) {
    console.error("Failed to fetch data:", error);
    error = e as Error;
  }

  return (
    <>
      {data ? (
        <div className={styles.page}>
          <div className={styles.info}>
            <h3>{data?.brand.name}</h3>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.imageContainer}>
              <Image
                fill
                src={data.imageUrl}
                alt={data.name}
                className={styles.image}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
          <div className={styles.price}>{getCurrency(data.price)}</div>
        </div>
      ) : (
        notFound()
      )}
      {error && <div>{error.message}</div>}
    </>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import { getCurrency } from "@/lib/getCurrency";
import { fetchProductById } from "@/api/get-product-by-id";
import styles from "./Racket.module.css";
import { Metadata } from "next";
import { fetchProductMetaById } from "@/api/get-meta-product-by-id";

type Props = PageProps<"/racket/[slug]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: productId } = await params;

  const { data } = await fetchProductMetaById(productId);

  if (data) {
    return {
      title: `${data?.product.name} | Tennis Store`,
      description: data?.product.description,
      openGraph: {
        title: data?.product.name,
        description: data?.product.description,
        images: [data.product.imageUrl],
      },
    };
  }

  return {
    title: "Tennis Store",
  };
}

export default async function Racket({ params }: Props) {
  const { slug: productId } = await params;
  const { data, error } = await fetchProductById(productId);

  if (error) {
    notFound();
  }

  if (data) {
    return (
      <div className={styles.page}>
        <div className={styles.info}>
          <h3>{data.product.brand.name}</h3>
          <h2>{data.product.name}</h2>
          <p>{data.product.description}</p>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src={data.product.imageUrl}
              alt={data.product.name}
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </div>
        <div className={styles.price}>{getCurrency(data.product.price)}</div>
      </div>
    );
  }
}

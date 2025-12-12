import RacketList from "@/entities/rackets/ui/list/RacketList";
import { Routes } from "@/lib/routes";
import { fetchProducts } from "@/api/get-products";
import { fetchTop10Products } from "@/api/get-top-10-products";
import { notFound } from "next/navigation";

export default async function Home() {
  const [products, top10Products] = await Promise.allSettled([
    fetchProducts({ page: 1, limit: 10 }),
    fetchTop10Products(),
  ]);

  const data = [
    products.status === "fulfilled" && products.value.data
      ? products.value.data
      : [],
    top10Products.status === "fulfilled" && top10Products.value.data
      ? top10Products.value.data
      : [],
  ];

  const hasProducts = products.status === "fulfilled" && products.value.data;
  const hasTop10 =
    top10Products.status === "fulfilled" && top10Products.value.data;

  if (products.status === "rejected" && top10Products.status === "rejected") {
    notFound();
  }

  return (
    <div>
      {hasTop10 && (
        <RacketList
          rackets={data[1]}
          title="Top 10"
          href={Routes.TOP_10_RACKETS}
        />
      )}

      {hasProducts && (
        <RacketList rackets={data[0]} title="Ракетки" href={Routes.RACKETS} />
      )}
    </div>
  );
}

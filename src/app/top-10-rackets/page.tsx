import { fetchTop10Products } from "@/api/get-top-10-products";
import RacketList from "@/entities/rackets/ui/list/RacketList";
import { notFound } from "next/navigation";

export default async function RacketListPage() {
  const { data, error } = await fetchTop10Products();

  if (error) {
    notFound();
  }

  return <RacketList rackets={data} />;
}

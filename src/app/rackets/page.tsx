import RacketList from "@/components/ui/list/RacketList";
import { fetchProducts } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function RacketListPage() {
  let data = null;
  let error = null;

  try {
    const res = await fetchProducts();
    data = res.data;
  } catch (e) {
    error = e as Error;
  }

  return (
    <div>
      <div>{data ? <RacketList rackets={data} /> : notFound()}</div>
      <div>{error ? error.message : null}</div>
    </div>
  );
}

import { fetchBrands } from "@/api/get-brands";
import Filters from "@/entities/rackets/ui/filters/Filters";
import { notFound } from "next/navigation";
import s from "./Layout.module.css";

export default async function RacketListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: brands, error } = await fetchBrands();

  if (error) {
    notFound();
  }

  return (
    <div className={s.wrapper}>
      <Filters brands={brands} />
      {children}
    </div>
  );
}

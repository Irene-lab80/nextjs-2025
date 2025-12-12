import { fetchBrands } from "@/api/get-brands";
import Filters from "@/entities/rackets/ui/filters/Filters";
import s from "./Layout.module.css";

export default async function RacketListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: brands, error } = await fetchBrands();

  if (error) {
    <div className={s.wrapper}>{children}</div>;
  }

  if (brands)
    return (
      <div className={s.wrapper}>
        <Filters brands={brands} />
        {children}
      </div>
    );
}

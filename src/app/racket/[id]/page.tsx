import styles from "./page.module.css";

export default async function Racket({
  params,
  searchParams,
}: PageProps<"/racket/[id]">) {
  const { id } = await params;
  return (
    <div className={styles.page}>
      <div>Racket</div>
      <div>idaa: {id}</div>
    </div>
  );
}

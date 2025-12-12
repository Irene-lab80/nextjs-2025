import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}></span>
    </div>
  );
};

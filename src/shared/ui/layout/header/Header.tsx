import s from "./Header.module.css";
import Navigation from "../navigation/Navigation";

export default function Header() {
  return (
    <header className={s.header}>
      <div></div>
      <h1>TENNIS STORE</h1>
      <Navigation />
    </header>
  );
}

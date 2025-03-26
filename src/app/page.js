import Image from "next/image";
import styles from "./styles/page.module.css";
import Testing from "./components/testing";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>hello</h1>
      <Testing />
    </div>
  );
}

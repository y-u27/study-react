import Head from "next/head";
import styles from "../styles/Home.module.css";
import Styles from "./Styles";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback } from "react";

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo)
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="Index" />
      <Footer />
      <Styles />
    </div>
  );
}

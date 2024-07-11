import Head from "next/head";
import styles from "../styles/Home.module.css";
import Styles from "./Styles";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback, useEffect } from "react";

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

  useEffect(() => {
    console.log("マウント時");
    // returnまでに書いている処理がマウント時
    document.body.style.backgroundColor = "lightblue";
    // return以降がアンマウント時の処理
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
    // []に変数などを入れることによって、useEffectやuseCallbackの処理をもう一度実行させることができる
  }, []);

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

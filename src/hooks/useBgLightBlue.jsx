import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // returnまでに書いている処理がマウント時
    document.body.style.backgroundColor = "lightblue";
    // return以降がアンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
    // []に変数などを入れることによって、useEffectやuseCallbackの処理をもう一度実行させることができる
  }, []);
};

import styles from "../styles/Home.module.css";

export default function Headline(props) {
  console.log(props.title);
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p className={styles.description}>
        Get started by editing <code>pages/{props.page}.js</code>
      </p>
    </div>
  );
}

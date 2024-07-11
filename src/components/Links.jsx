import styles from "../styles/Home.module.css";

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a key={item.href} href={item.href} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}

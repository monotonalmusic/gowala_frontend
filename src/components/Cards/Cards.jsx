import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <h1>Den førende mælkeproducent</h1>
      <h1>Sund og nærende mælk siden 1975</h1>
      <div className={styles.card}>
        <div>
          <img src="/cards/01.png" alt="" />
        </div>
        <p className={styles.cardHeader}>Farmens teknologi</p>
        <p className={styles.cardInfo}>
          Vores avancerede teknologi kombinerer effektivitet med høj
          hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet.
        </p>
      </div>
      <div className={styles.card}>
        <div>
          <img src="/cards/02.png" alt="" />
        </div>
        <p className={styles.cardHeader}>Farmens teknologi</p>
        <p className={styles.cardInfo}>
          Vores avancerede teknologi kombinerer effektivitet med høj
          hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet.
        </p>
      </div>
      <div className={styles.card}>
        <div>
          <img src="/cards/03.png" alt="" />
        </div>
        <p className={styles.cardHeader}>Farmens teknologi</p>
        <p className={styles.cardInfo}>
          Vores avancerede teknologi kombinerer effektivitet med høj
          hygiejnestandard, hvilket garanterer produkter af den bedste kvalitet.
        </p>
      </div>
    </div>
  );
};

export default Cards;

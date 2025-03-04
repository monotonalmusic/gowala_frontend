import { useState } from "react";
import styles from "./shoppage.module.css";
import Products from "../../components/Products/Products";

const ShopPage = () => {
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const toggleSort = () => {
    setSortAlphabetically((prev) => !prev);
  };

  return (
    <div className={styles.shopContainer}>
      <div>
        <div className={styles.shopText}>
          <h1>Alle vores produkter</h1>
          <h3>Alt på ét sted</h3>
          <p>
            Her på siden finder du alle vores friske mejeriprodukter og
            kvalitetskød fra Gowala Farms – direkte fra gården til dit bord.
          </p>
          <button className={styles.filterButton} onClick={toggleSort}>
            {sortAlphabetically ? "Ingen sortering" : "A-Z"}
          </button>
        </div>
      </div>

      <Products sortAlphabetically={sortAlphabetically} />
    </div>
  );
};

export default ShopPage;

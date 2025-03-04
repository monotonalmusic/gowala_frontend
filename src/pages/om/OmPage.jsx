import styles from "./ompage.module.css";

const OmPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Om oss</h1>
      <p className={styles.text}>
        Vi är ett företag som säljer produkter för hela familjen. Vi har funnits
        i branschen i över 20 år och har stor erfarenhet av att hjälpa våra
        kunder att hitta rätt produkter. Vi har ett brett sortiment och erbjuder
        allt från kläder till elektronik.
      </p>
    </div>
  );
};

export default OmPage;

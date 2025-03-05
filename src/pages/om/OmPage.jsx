import InfoContainer from "../../components/InfoContainer/InfoContainer";
import styles from "./ompage.module.css";
import useFetch from "../../hooks/useFetch";

const OmPage = () => {

    const {
      data: articles,
      loading,
      error,
    } = useFetch("http://localhost:3042/articles");
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Om oss</h1>
      <p className={styles.text}>
        Vi är ett företag som säljer produkter för hela familjen. Vi har funnits
        i branschen i över 20 år och har stor erfarenhet av att hjälpa våra
        kunder att hitta rätt produkter. Vi har ett brett sortiment och erbjuder
        allt från kläder till elektronik.
      </p>
      <InfoContainer
      title={articles[11].title}
      img={articles[11].image}
      >
        <p>{articles[11].description}</p>

      </InfoContainer>
    </div>
  );
};

export default OmPage;

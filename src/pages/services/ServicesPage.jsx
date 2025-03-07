import styles from "./servicespage.module.css";
import Heading from "../../components/Heading/Heading";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import Checklist from "../../components/Checklist/Checklist";
import useFetch from "../../hooks/useFetch";


const ServicesPage = () => {

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

  const container1Items = [
    "Høj kvalitet og naturlige produkter",
    "Frie græsningsforhold",
    "Bæredygtig produktion",
    "Ægte smag fra gården",
  ];

  const container2Items = [
    "Stærk genetik",
    "Sund kost",
    "Naturlige forhold",
    "Dyrevelvære",
  ];

  const container3Items = [
    "Friske råvarer",
    "Høj kvalitet",
    "Bæredygtig produktion",
    "Naturlig smag",
  ];


  return (
    <div className={styles.servicesContainer}>
      <Heading
        title={"Gowala Tilbyder"}
        subtitle={"Hvad vi tilbyder vores forbrugere"}
      ></Heading>
      <div className={styles.servicesContainer}>
        <InfoContainer title={articles[10].title} img={articles[10].image}>
          <p>{articles[10].description}</p>
          <Checklist items={container1Items}></Checklist>
        </InfoContainer>
        <InfoContainer title={articles[9].title} img={articles[9].image}>
          <p>{articles[9].description}</p>
          <Checklist items={container2Items}></Checklist>
        </InfoContainer>
        <InfoContainer title={articles[8].title} img={articles[8].image}>
          <p>{articles[8].description}</p>
          <Checklist items={container3Items}></Checklist>
        </InfoContainer>
      </div>
    </div>
  );
};

export default ServicesPage;

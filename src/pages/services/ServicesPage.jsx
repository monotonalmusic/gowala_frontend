import styles from "./servicespage.module.css";
import Heading from "../../components/Heading/Heading";

const ServicesPage = () => {
  return (
    <div className={styles.servicesContainer}>
        <Heading 
            title={"Gowala Tilbyder"}
            subtitle={"Hvad vi tilbyder vores forbrugere"}
        ></Heading>
      
    </div>
  );
};

export default ServicesPage;

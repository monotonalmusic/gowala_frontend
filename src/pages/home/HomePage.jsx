import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import Cards from '../../components/Cards/Cards';
import Products from '../../components/Products/Products';
import Staff from '../../components/Staff/Staff';
import Newsletter from '../../components/Newsletter/Newsletter';
import Slider from '../../components/Slider/Slider';

const HomePage = () => {

    const slidesHeroData = [
        { title: "Gowala Farms", image: "/headerslider/01.jpg" },
        { title: "Fresh Dairy", image: "/headerslider/02.jpg" },
        { title: "Organic Produce", image: "/headerslider/03.jpg" },
        { title: "Quality Assurance", image: "/headerslider/04.jpg" },
      ];

      const slidesSponsorData = [
        {  image: "/sponsors/01.png" },
        {  image: "/sponsors/02.png" },
        {  image: "/sponsors/03.png" },
        {  image: "/sponsors/04.png" },
      ];


    return (
        <div>
            <div className={styles.frontContainer}>
                <section className={styles.heroSlider}>
                    <Slider slides={slidesHeroData} slidesperview={1}></Slider>
                </section>
                <section className={styles.frontCards}>
                    <Cards></Cards>

                </section>
                <section className={styles.frontProducts}>
                    <Products limit={5}></Products>
                </section>
                <section className={styles.frontEmployees}>
                    <Staff></Staff>
                </section>
                <section className={styles.frontNewsletter}>
                    <Newsletter></Newsletter>
                </section>
                <section className={styles.frontAwards}>
                    <div className={styles.sponsorSlider}>
                        <Slider slides={slidesSponsorData} slidesperview={2}></Slider>
                    </div>
                </section>
               
            </div>
        </div>
    );
};
export default HomePage;
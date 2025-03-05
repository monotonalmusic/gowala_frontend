import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import styles from './homepage.module.css';
import Cards from '../../components/Cards/Cards';
import Products from '../../components/Products/Products';
import Staff from '../../components/Staff/Staff';
import Newsletter from '../../components/Newsletter/Newsletter';
import Slider from '../../components/Slider/Slider';

const HomePage = () => {

    const { local } = useAppContext();


    return (
        <div>
            <div className={styles.frontContainer}>
                <section className={styles.heroSlider}>
                    <Slider></Slider>
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
                <section className={styles.frontAwards}></section>
               
            </div>
        </div>
    );
};
export default HomePage;
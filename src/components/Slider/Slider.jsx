import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideContent}>
            <h2>Gowala Farms</h2>
            <img src="/headerslider/01.jpg" alt="Gowala Farms" className={styles.slideImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./slider.module.css";

const Slider = ({ slides, slidesperview }) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={slidesperview}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              <h2>{slide.title || ""}</h2>
              <img src={slide.image} alt={slide.title} className={styles.slideImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="w-full max-w-lg mx-auto p-4 h-64">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg h-64"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-64 bg-blue-500 text-white text-xl font-bold rounded-lg">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-64 bg-red-500 text-white text-xl font-bold rounded-lg">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-64 bg-green-500 text-white text-xl font-bold rounded-lg">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

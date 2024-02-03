import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import NewsCard from "../molecules/NewsCard";

export default function News() {
  return (
    <section>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swip__cont">
          <NewsCard status={true} />
          <NewsCard status={true} />
          <NewsCard status={false} />
        </SwiperSlide>
        <SwiperSlide className="swip__cont">
          <NewsCard status={false} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

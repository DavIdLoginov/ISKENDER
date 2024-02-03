import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import SwipperCard from "../molecules/SwipperCard";
import { dataOne, dataTwo } from "../atoms/dataSwipper";

export default function Swipper({ variant }) {
  const selectedData = variant === 1 ? dataOne : dataTwo;

  const chunkedData = [];
  for (let i = 0; i < selectedData.length; i += 6) {
    chunkedData.push(selectedData.slice(i, i + 6));
  }

  return (
    <section>
      <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
        {chunkedData.map((chunk, index) => (
          <SwiperSlide key={index} className="swip__cont">
            {chunk.map((item, itemIndex) => (
              <SwipperCard key={itemIndex} {...item} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
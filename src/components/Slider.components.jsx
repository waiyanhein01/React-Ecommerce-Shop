// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper/css/autoplay

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => {}}
      onSwiper={(swiper) => console.log(swiper.slides)}
    >
      <SwiperSlide>Teachers & Students Get 10% Off.</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
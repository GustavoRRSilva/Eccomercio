import { register } from "swiper/element/bundle";
import styles from "./slider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
register();
export default function Slider() {
  return (
    <>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation 
      >
          
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.textAndButton}>
            <p>LG UHD AI THINKQ</p>
            <h2>Smart TV LED 50" 4K UHD LG 50UQ8050PSB </h2>
            <button>+ Shop now</button>
          </div>
          <Image src="/TvImage.svg" width="20" height="20" alt="img lupa" />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.textAndButton}>
            <p>LG UHD AI THINKQ</p>
            <h2>Smart TV LED 50" 4K UHD LG 50UQ8050PSB </h2>
            <button>+ Shop now</button>
          </div>
          <Image src="/TvImage.svg" width="20" height="20" alt="img lupa" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

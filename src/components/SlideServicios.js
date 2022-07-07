// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const SlideServicios = () => {
    return(
        <div className="swiper-container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper animate__animated animate__bounce"
            >
                <SwiperSlide className="swiper__img">
                    <img src="./assets/img/limpieza-muebles.webp" />
                    <a href="https://wa.link/fd3pvb" target="_blank">Comunicate YA!</a>
                </SwiperSlide>
                <SwiperSlide className="swiper__img">
                    <img src="./assets/img/limpieza-colchones.webp" />
                    <a href="https://wa.link/up29mc" target="_blank">Comunicate YA!</a>
                </SwiperSlide>
                <SwiperSlide className="swiper__img">
                    <img src="./assets/img/limpieza-vehiculos.webp" />
                    <a href="https://wa.link/0eoyol" target="_blank">Comunicate YA!</a>
                </SwiperSlide>
                <SwiperSlide className="swiper__img">
                    <img src="./assets/img/limpieza-alfombras.webp" />
                    <a href="https://wa.link/0v6p3i" target="_blank">Comunicate YA!</a>
                </SwiperSlide>
                <SwiperSlide className="swiper__img">
                    <img src="./assets/img/limpieza-sillas.webp" />
                    <a href="https://wa.link/6kbuqm" target="_blank">Comunicate YA!</a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
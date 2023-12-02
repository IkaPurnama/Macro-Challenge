import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Cardswipkuliner = [
  {
    id: 1,
    title: "Kasuami",
    images: "/images/kantopi.jpg",
  },
  {
    id: 2,
    title: "Baruasa",
    images: "/images/Kue-Bagea-1 1.png",
  },

  {
    id: 4,
    title: "Tuli-Tuli",
    images: "/images/Tuli-Tuli 1.png",
  },
  {
    id: 5,
    title: "Sinole",
    images: "/images/sinole.jpg",
  },
  {
    id: 5,
    title: "Epu-Epu",
    images: "/images/epu-epu.jpg",
  },
];

const Cardswiperkuliner = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="">
          {Cardswipkuliner.map((card) => (
            <SwiperSlide>
              <div className=" d-flex justify-content-center align-items-center">
                <div className="img-kuliner">
                  <p>{card.title}</p>
                  <img src={card.images}></img>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Cardswiperkuliner;

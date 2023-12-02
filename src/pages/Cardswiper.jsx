import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const Cardswipe = [
  {
    id: 1,
    title: "Pantai Mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
  {
    id: 2,
    title: "Benteng Lasaidewa",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatalasaidewa2.png",
  },

  {
    id: 4,
    title: "Kampung Bajo",
    desc: "Kel.Watolo, Kec.mawasangka",
    images: "/images/wisatabajo3.png",
  },
  {
    id: 5,
    title: "Danau Anano Tei ",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/anonetei3.jpeg",
  },
  {
    id: 5,
    title: "Kande-Kandea",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/festKandea3.jpg",
  },
];

const Cardswiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div>
          {Cardswipe.map((card) => (
            <SwiperSlide>
              <div className="card-swipe " key={card.id}>
                <img src={card.images} alt="Gambar Card" />
                <div className="card-body">
                  <h2 className="text-white fs-4 fw-bold">{card.title}</h2>
                  <p className=" fw-bolder  fs-6">{card.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Cardswiper;

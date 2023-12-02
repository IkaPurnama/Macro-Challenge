// import Navbarnew from "../Component/Fragments/Navbarnew";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Testimonipages = () => {
  return (
    <div className="">
      <div className="navbar-banner ">
        <Navbarwisata className="Navbarwisata" />
        <div className="banner-content">
          <div className="banner-text">kisah sukses pelanggan</div>
        </div>
      </div>
      <div className="cardtestimoni">
        <h2 className="text-cardtestimoni">"Apa Kata Mereka ?"</h2>
      </div>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper swiper-testimoni"
        >
          <SwiperSlide swiperslide-tes>
            <div className="swiper-slide-content">
              <p>
                "Saya baru saja kembali dari liburan luar biasa di Buton Tengah.
                Pulau ini benar-benar surganya wisatawan! Pantai-pantai yang
                indah, budaya yang kaya, dan makanan lezat membuat pengalaman
                ini tak terlupakan. Peran pemandu di sini sangat membantu saya
                dalam mengeksplor spot-spot terindah yang ada di Buton Tengah.
                Saya pasti akan kembali lagi suatu hari."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide swiperslide-tes>
            <div className="swiper-slide-content">
              <p>
                {" "}
                "Pelayanan tour guide yang diberikan adalah pemandu yang sangat
                berpengetahuan dan penuh semangat. Dia menjelaskan sejarah dan
                cerita menarik tentang setiap tempat yang kami kunjungi di Buton
                Tengah. Pemandu juga memberikan rekomendasi restoran yang luar
                biasa di seluruh perjalanan. Kami merasa sangat beruntung telah
                memilih Tour Tech sebagai pemandu wisata kami."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide swiperslide-tes>
            <div className="swiper-slide-content">
              <p>
                "Saya ingin berterima kasih kepada tour guide kami, yang membuat
                perjalanan kami begitu berkesan. Dia sangat berpengetahuan
                tentang sejarah dan budaya destinasi kami dan mampu
                menjelaskannya dengan cara yang menarik. Pemandu wisata juga
                sangat perhatian terhadap kebutuhan kami dan memberikan
                rekomendasi makanan yang luar biasa. “
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide swiperslide-tes>
            <div className="swiper-slide-content">
              <p>
                "Saya ingin berterima kasih kepada tour guide kami, yang membuat
                perjalanan kami begitu berkesan. Dia sangat berpengetahuan
                tentang sejarah dan budaya destinasi kami dan mampu
                menjelaskannya dengan cara yang menarik. Pemandu wisata juga
                sangat perhatian terhadap kebutuhan kami dan memberikan
                rekomendasi makanan yang luar biasa. “
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="feedback-card">
        <h2>Kirim Ulasan</h2>
        <form>
          <textarea
            id="feedback"
            name="feedback"
            rows="10"
            cols="50"
            placeholder="Masukkan ulasan disini"
          ></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <Footercomponent></Footercomponent>
    </div>
  );
};
export default Testimonipages;

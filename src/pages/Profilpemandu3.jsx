import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Pemanduimg from "../assets/img/pemanduimg.png";
import Pemanduimg4 from "../assets/img/pemandu/p4.jpg";
import Icontiktok from "/images/GambarFooter/icontiktok.png";
import Iconfb from "/images/GambarFooter/iconfb.png";
import Iconig from "/images/GambarFooter/iconig.png";
import Icontwiter from "/images/GambarFooter/icontwiter.png";
import back from "../assets/img/scrollleft.png";
import Button from "../Component/Elements/Buttons/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Carousel } from "react-bootstrap";

const Profilpemandu3 = () => {
  const [isVisible5, setIsVisible5] = useState(false);

  const handleScroll = () => {
    const element5 = document.querySelector(".animate-in-5");

    if (element5) {
      const elementTop5 = element5.getBoundingClientRect().top;
      setIsVisible5(elementTop5 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="profil  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Pemanduimg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <Navbarcomponent></Navbarcomponent>
          <div className="d-flex justify-content-center align-items-center h-75 ">
            <h1 className="text-white fw-bold text-center w-50  ">
              Terbuka untuk kolaborasi dan percakapan yang menarik. jangan ragu
              untuk Hubungi saya!
            </h1>
          </div>
          <div className="text-profil text-center">
            <h2 className="fw-bold text-white">Profil Pemandu Wisata</h2>
          </div>
        </div>
        <div className="backdatapemandu d-flex justify-content-center align-items-center w-50  mt-5">
          <Link to="/datapemandu">
            <img src={back} alt="back" title="balik ke halaman data pemandu" />
          </Link>
        </div>
        <div
          className={`animate-in-5 ${
            isVisible5 ? "show" : ""
          } data-profil d-flex justify-content-center align-items-center gap-1 `}
          onClick={resetScroll}
        >
          <div className="foto-pemandu me-5">
            <img src={Pemanduimg4} alt="" />
          </div>
          <div className="data-pemandu">
            <div>
              <h6>NAMA LENGKAP</h6>
              <p>Aldi</p>
            </div>
            <div>
              <h6>JENIS KELAMIN </h6>
              <p>Laki-Laki</p>
            </div>
            <div>
              <h6>KONTAK</h6>
              <p>082214536800</p>
            </div>
            <div>
              <h6>SOSIAL MEDIA</h6>
              <div className="d-flex medsos gap-3 mb-2">
                <Link to="http://www.tiktok.com/@tech.titans30">
                  <img src={Icontiktok} alt="" />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=61552141313707&mibextid=ZbWKwL">
                  <img src={Iconfb} alt="" />
                </Link>
                <Link to="https://instagram.com/titans4741?igshid=MzRlODBiNWFlZA==">
                  <img src={Iconig} alt="" />
                </Link>
                <Link to="#">
                  <img src={Icontwiter} alt="" />
                </Link>
              </div>
            </div>
            <Link to="https://wa.me/+6282214536800">
              <Button>Hubungi saya</Button>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-center mt-5 text-white fw-bold">
            Testimoni Wisatawan
          </h2>
        </div>

        <div className="carousel-container">
          <Container>
            <Carousel interval={null} pause={false}>
              <Carousel.Item className=" ">
                <div className="carousel-row d-flex justify-content-center align-items-center ">
                  <div className="carousel-element  ">
                    "Aldi adalah pemandu yang sangat berpengetahuan dan
                    antusias. Dia membuat perjalanan kami menjadi mengesankan
                    dengan pengetahuannya tentang sejarah dan budaya setiap
                    destinasi yang kami kunjungi."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Terima kasih, Aldi, atas pengalaman perjalanan yang tak
                    terlupakan. Anda membuat perjalanan kami menjadi lebih
                    berarti dan kami merasa sangat puas dengan petualangan ini."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Saat kami menjelajahi keindahan Buton Tengah bersama Aldi,
                    kami merasa aman dan nyaman. Dia sangat berpengetahuan dan
                    selalu memberikan pelayanan terbaik kepada tamu."
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-row ">
                  <div className="carousel-element">
                    "Aldi adalah pemandu yang penuh semangat dan operator ulung
                    di indahnya destinasi wisata Buton Tengah. Saya memiliki
                    satu tujuan sederhana: menjadikan petualangan Anda di tempat
                    ini tak terlupakan."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Saya sangat senang menjalani perjalanan bersama Aldi. Dia
                    memiliki cara yang luar biasa untuk menjelaskan sejarah dan
                    budaya setiap destinasi yang kami kunjungi. Itu benar-benar
                    membuat perjalanan menjadi lebih menarik."
                  </div>
                  <div className="carousel-element">
                    {" "}
                    "Terima kasih, Aldi, atas pengalaman perjalanan yang tak
                    terlupakan. Saya tidak hanya menikmati perjalanan ini,
                    tetapi juga mendapatkan pemahaman yang lebih baik tentang
                    sejarah dan budaya Buton Tengah."
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
      </div>
      <Footercomponent></Footercomponent>
    </>
  );
};

export default Profilpemandu3;

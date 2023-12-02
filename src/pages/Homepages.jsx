import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Homecard from "../Component/Fragments/Homecard";
import { Container, Row, Col } from "react-bootstrap";
import Bgimage from "../assets/img/wisata/wisataA/bghome.png";
import React, { useState, useEffect } from "react";
import Strengthcard from "../Component/Fragments/Strengthcard";
import Cardtop3 from "../Component/Fragments/Cardtop3";
import AboutCard from "../Component/Fragments/AboutCard";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Homepages = () => {
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  const handleScroll = () => {
    const element6 = document.querySelector(".animate-in-6");
    const element7 = document.querySelector(".animate-in-7");
    const element8 = document.querySelector(".animate-in-8");

    if (element6) {
      const elementTop6 = element6.getBoundingClientRect().top;
      setIsVisible6(elementTop6 < window.innerHeight - 100);
    }
    if (element7) {
      const elementTop7 = element7.getBoundingClientRect().top;
      setIsVisible7(elementTop7 < window.innerHeight - 100);
    }
    if (element8) {
      const elementTop8 = element8.getBoundingClientRect().top;
      setIsVisible8(elementTop8 < window.innerHeight - 100);
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
    <div div className="Home">
      <div>
        <div className=" bg-secondary h-vh-100">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${Bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
            }}
          >
            <Navbarwisata />
            <Container className="hero d-flex justify-content-center align-items-center h-100 ">
              <Row className="my-auto gap-5  h-50 p-5">
                <Col className="text-white " md={6}>
                  <h1 className="fw-bold fs-1 mb-1">BUTON TENGAH</h1>
                  <h4 className="fs-4">NEGERI 1000 GUA</h4>
                  <p className="text-justify-start d-none mt-3 fs-6 d-sm-block">
                    Disinilah Petualangan sejati dimulai. Selamat datang di
                    portal ekslusif kami yang menggabungkan kekayaan budaya,
                    keindahan alam dan kenangan sejarah yang tak terlupakan
                    dalam satu perjalanan epik. Dengan kami, Anda akan
                    menjelajah tiga dimensi yang memukau diantaranya kekayaan
                    budaya yang ajaib, keindahan alam yang menakjubkan, kenangan
                    sejarah yang abadi.
                  </p>
                </Col>
                <Col>
                  <div className="row  row-cols-3 row-cols-md-3 g-3">
                    <Homecard></Homecard>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="Strength  h-vh-100">
            <div
              className="bg-image"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100vh",
              }}
            >
              <div
                style={{ paddingTop: "50px", lineHeight: "4px" }}
                className="text-center text-light"
              >
                <h1 className="mb-3 text-center fw-bold fs-3 text-black">
                  MENGAPA MEMILIH KAMI?
                </h1>
                <div
                  className={`animate-in-6 ${
                    isVisible6 ? "show" : ""
                  } d-flex flex-row d-grid gap-3 justify-content-center`}
                  onClick={resetScroll}
                >
                  <Strengthcard></Strengthcard>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${Bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "85vh",
            }}
          >
            <div
              style={{ paddingTop: "50px", lineHeight: "4px" }}
              className=" toppemandu min-vh-100 text-center "
            >
              <h1 className=" text-white  fw-bold fs-4 mb-4">
                TOP 3 PEMANDU WISATA
              </h1>
              <div
                className={`animate-in-7 ${
                  isVisible7 ? "show" : ""
                } d-flex flex-row d-grid gap-3 justify-content-center`}
                onClick={resetScroll}
              >
                <Cardtop3></Cardtop3>
              </div>
            </div>
          </div>

          {/* Halaman about */}
          <div className="about  container-fluid py-5">
            <div
              className="bg-image"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100vh",
              }}
            >
              <div className=" about-container min-vh-100 text-center">
                <h2 className="text-center fw-bold fs-3 text-white">
                  TENTANG TOUR TECH
                </h2>
                <p className=" text-justify-center text-white mx-auto d-none d-sm-block mt-3 ">
                  Tour Tech adalah bisnis usaha yang bergerak di bidang jasa
                  pemandu wisata dan didirikan pada tahun 2023 oleh Tim Tech
                  Titan. Dengan pemenuhan kebutuhan dari hasil penelitian kami,
                  kami menyadari bahwa banyak wisatawan mencari pengalaman yang
                  lebih mendalam dan berarti saat mengunjungi wisata yang ada di
                  buton tengah. Mereka tertarik untuk menjelajahi aspek budaya,
                  sejarah, dan keindahan alam dari suatu tempat, bukan hanya
                  destinasi yang populer. Maka dari itu kami menyarankan untuk
                  penyediaan layanan pemandu yang akan menjadi sumber utama bagi
                  pengguna yang ingin merencanakan perjalanan dengan fokus pada
                  budaya, sejarah, dan alam suatu destinasi yang ada di buton
                  tengah dengan permintaan masyarakat telah mendorong kami untuk
                  menjadi bagian bisnis pemandu wisata.
                </p>
                <div
                  className={`animate-in-8 ${
                    isVisible8 ? "show" : ""
                  } d-flex flex-row d-grid gap-3 justify-content-center`}
                  onClick={resetScroll}
                >
                  <AboutCard></AboutCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footercomponent></Footercomponent>
      </div>
    </div>
  );
};

export default Homepages;

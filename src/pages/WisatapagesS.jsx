import CarouselWS from "../Component/Fragments/CarouselWisataS";
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import bgimage from "../assets/img/wisata/wisataS/Background.png";
import bgimage2 from "../assets/img/wisata/wisataS/Background2.png";
import WisataScard from "../Component/Fragments/WisataScard";
import PPicture from "../assets/img/wisata/wisataS/people2.png";
import React from "react";
import Footercomponent from "../Component/Fragments/Footercomponent";

const WisatapagesS = () => {
  return (
    <>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "85vh",
          fontFamily: "Times New Roman",
        }}
      >
        <Navbarwisata />
        <div
          id="header-wrapper"
          style={{ paddingTop: "180px", marginRight: "60px" }}
          className="d-flex justify-content-end align-items-center"
        >
          <div id="header" className="w-766 text-light text-center">
            <h1
              style={{ marginBottom: "0", fontSize: "60px", fontWeight: "700" }}
            >
              "Terlupakan dalam Waktu
            </h1>
            <h1
              style={{ marginBottom: "0", fontSize: "60px", fontWeight: "700" }}
            >
              Jelajahi Masa Lalu di
            </h1>
            <h1
              style={{ marginBottom: "0", fontSize: "60px", fontWeight: "700" }}
            >
              Destinasi Sejarah Kami."
            </h1>
          </div>
        </div>
      </div>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${bgimage2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "110vh",
          fontFamily: "Times New Roman",
        }}
      >
        <div className="text-center">
          <h1 className="text-dark pt-5">Wisata Sejarah</h1>
          <div style={{ lineHeight: "10px" }} className="mt-4 mb-5">
            <p className="text-dark">
              Buton Tengah, di Provinsi Sulawesi Tenggara, Indonesia, menawarkan
              sejumlah tempat wisata sejarah yang menarik.
            </p>
            <p className="text-dark">
              Berikut adalah beberapa destinasi sejarah di Buton Tengah
            </p>
          </div>
          <CarouselWS />
        </div>
        <div
          className="bg-image img-fluid"
          style={{
            backgroundColor: "light",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
            fontFamily: "Times New Roman",
          }}
        >
          <WisataScard />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{
              marginRight: "15rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{ fontWeight: "700", fontSize: "48px" }}
              className="text-center ms-5 fw-bold"
            >
              Jendela Ke Masa Lalu
            </h1>
            <p
              style={{ width: "500px", textAlign: "justify" }}
              className="ms-5 text-dark"
            >
              Wisata sejarah adalah cara yang penting untuk menghormati dan
              menjaga warisan budaya serta sejarah manusia, sambil memberikan
              manfaat edukatif, ekonomi, dan budaya. Ini memainkan peran kunci
              dalam menjembatani masa lalu dan masa kini, serta dalam
              mempromosikan pengertian dan perdamaian di antara berbagai budaya
              dan komunitas di seluruh dunia.
            </p>
          </div>
          <div className="position-relative top-0 start-0 mb-5">
            <img
              className="img-fluid position-relative top-0 start-0"
              src={PPicture}
              alt="Turis"
            />
          </div>
        </div>
        <Footercomponent />
      </div>
    </>
  );
};

export default WisatapagesS;

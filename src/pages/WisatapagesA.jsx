import Navbarwisata from "../Component/Fragments/Navbarwisata";
import bgimage from "../assets/img/wisata/wisataA/background.png";
import Square1 from "../assets/img/wisata/wisataA/Square1.png";
import Square2 from "../assets/img/wisata/wisataA/Square2.png";
import Square3 from "../assets/img/wisata/wisataA/Square3.png";
import Picture1 from "../assets/img/wisata/wisataA/pic1.png";
import Picture2 from "../assets/img/wisata/wisataA/pic2.png";
import Picture3 from "../assets/img/wisata/wisataA/pic3.png";
import num1 from "../assets/img/wisata/wisataA/01.png";
import num2 from "../assets/img/wisata/wisataA/02.png";
import num3 from "../assets/img/wisata/wisataA/03.png";
import iconuser from "/images/iconuser.png";
import iconmap from "/images/iconmap.png";
import React from "react";
import Footercomponent from "../Component/Fragments/Footercomponent";
import { Link } from "react-router-dom";

const WisatapagesA = () => {
  return (
    <div id="background" style={{ backgroundColor: "#404040" }}>
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "120vh",
          fontFamily: "Times New Roman",
        }}
      >
        <Navbarwisata />
        <div
          className="header-text"
          style={{
            display: "flex",
            paddingTop: "100px",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            style={{ marginLeft: "100px", marginBottom: "0" }}
            className="text-center mt-5 text-light"
          >
            <h1
              style={{
                marginBottom: "0",
                fontSize: "60px",
                fontWeight: "700",
              }}
            >
              Eksplorasi
            </h1>
            <h1
              style={{
                marginBottom: "0",
                fontSize: "60px",
                fontWeight: "700",
              }}
            >
              Keindahan Alam
            </h1>
            <h1
              style={{
                marginBottom: "0",
                fontSize: "60px",
                fontWeight: "700",
              }}
            >
              Buton Tengah
            </h1>
          </div>
        </div>
        <div style={{ marginRight: "50px" }}>
          <div className="d-flex flex-column align-items-end">
            <p className="mb-0 text-light fs-4 fw-bolder">POPULER</p>
            <hr
              className="text-light"
              style={{ borderWidth: "2px", width: "200px" }}
            />
          </div>

          <div className="d-flex justify-content-end align-items-center ">
            <div className="custom-img" style={{ position: "relative" }}>
              <a href="#Penjelasan3" style={{ position: "relative" }}>
                <img className="me-2 img-fluid" src={Square1} alt="Square 1" />
                <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Pantai Katembe
                </p>
              </a>
              <a href="#Penjelasan1" style={{ position: "relative" }}>
                <img className="me-2 img-fluid " src={Square2} alt="Square 2" />
                <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Pantai Mutiara
                </p>
              </a>
              <a href="#Penjelasan2" style={{ position: "relative" }}>
                <img className="img-fluid" src={Square3} alt="Square 3" />
                <p
                  style={{
                    position: "absolute",
                    top: "350%",
                    left: 0,
                    right: 0,
                    transform: "translate(0, 0)",
                    backgroundColor: "rgba(192, 192, 192, 0.6)",
                    color: "black",
                    padding: "6px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Danau Anonotei
                </p>
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Tillana",
                marginLeft: "130px",
                marginTop: "120px",
                lineHeight: "5px",
              }}
              className="text-light text-center"
            >
              <p>
                "Lupakan kepenatan sehari-hari, dan jadikan liburan alam sebagai
                pelukan nyaman yang akan Anda
              </p>
              <p>kenang seumur hidup."</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-image img-fluid pb-5 "
        style={{
          background:
            "linear-gradient(180deg, rgba(204.85, 187.42, 174.81, 0), rgba(11.25, 75.76, 113.48, 0.72))",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "290",
          fontFamily: "Times New Roman",
        }}
      >
        <section id="Penjelasan1">
          <div
            style={{ paddingTop: "150px" }}
            className="d-flex align-items-center justify-content-around"
          >
            <div className="text-light text-end">
              <div className="d-flex align-items-end justify-content-between">
                <img className="img-fluid" src={num1} alt="Number 1" />
                <h1 style={{ textAlign: "right" }}>Pantai Mutiara</h1>
              </div>
              <hr style={{ borderWidth: "3px" }} />
              <p style={{ textAlign: "justify", width: "590px" }}>
                Pantai Mutiara diresmikan dan dibuka untuk umum di tahun 2015.
                Tepatnya terletak di desa terpencil Gumanano, Sulawesi Tenggara.
                Pantai ini terkenal dengan warna pasir putihnya yang dipadukan
                dengan warna laut yang hijau kebiruan sehingga tampak seperti
                pantai di surga. Pantulan dari matahari yang bersinar semakin
                menambah indah pantai ini karena tampak berkilauan. Di sini,
                wisatawan dapat bermain-main dengan air serta berenang.
                Aktivitas menjaring ikan oleh nelayan setempat juga dapat
                ditemui di pantai ini. Pantai ini pun masih bersih dan alami.
                Jarang sekali sampah ditemui di tempat ini. Berkunjung ke pantai
                ini bisa menjadi media relaksasi kala penat datang menyapa
              </p>
            </div>
            <div>
              <div className="user d-flex gap-4 ">
                <Link
                  to="/datapemandu"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconuser}
                    alt="user"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Cari pemandu</p>
                </Link>
                <Link
                  to="https://maps.app.goo.gl/W3ckT37NfRjh7rdU7"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconmap}
                    alt="map"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Maps</p>
                </Link>
              </div>
              <img className="img-fluid" src={Picture1} alt="Picture 1" />
            </div>
          </div>
        </section>
        <section id="Penjelasan2">
          <div
            style={{ paddingTop: "150px" }}
            className="d-flex align-items-center justify-content-around flex-row-reverse"
          >
            <div className="text-light text-end">
              <div className="d-flex align-items-end justify-content-between">
                <h1 style={{ textAlign: "right" }}>Danau Anano Tei</h1>
                <img className="img-fluid" src={num2} alt="Number 2" />
              </div>
              <hr style={{ borderWidth: "3px" }} />
              <p style={{ textAlign: "justify", width: "590px" }}>
                Buton Tengah memiliki banyak destinasi wisata alam yang
                mengagumkan. Salah satunya adalah Danau Anano Tei. Keindahan
                danau ini terletak pada hutan bakau yang menghiasi
                sudut-sudutnya. Nama Anano Tei sendiri diambil dari bahasa
                setempat yang berarti "anaknya pantai". Berbeda dengan danau
                lain, Danau Anano Tei memiliki air yang asin. Pasalnya, lokasi
                danau ini berdekatan dengan laut. Danau Anano Tei ini tepatnya
                di Kelurahan Gumamano, Kecamatan Mawasangka. Jaraknya dekat
                dengan kawasan wisata Pantai Mutiara Buteng menjadikan Danau
                Anano Tei sebagai wisata alam wajib usai berkunjung ke Pantai
                Mutiara Buteng.
              </p>
            </div>
            <div>
              <div className="user d-flex gap-4 ">
                <Link
                  to="/datapemandu"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconuser}
                    alt="user"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Cari pemandu</p>
                </Link>
                <Link
                  to="https://maps.app.goo.gl/XxhSqzoPvDZxhxGS6"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconmap}
                    alt="map"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Maps</p>
                </Link>
              </div>
              <img className="img-fluid" src={Picture2} alt="Picture 2" />
            </div>
          </div>
        </section>
        <section id="Penjelasan3">
          <div
            style={{ paddingTop: "150px" }}
            className="d-flex align-items-center justify-content-around"
          >
            <div className="text-light text-end">
              <div className="d-flex align-items-end justify-content-between">
                <h1 style={{ textAlign: "right" }}>Pantai Katambe</h1>
                <img className="img-fluid" src={num3} alt="Number 3" />
              </div>
              <hr style={{ borderWidth: "3px" }} />
              <p style={{ textAlign: "justify", width: "590px" }}>
                Pantai Katambe di Kabupaten Buton Tengah menyuguhkan panorama
                pasir putih dan hamparan laut biru. Pantai ini tepatnya
                berlokasi di Desa Madongka, Kecamatan Lakudo, Kabupaten Buton
                Tengah (Buteng), Sulawesi Tenggara. Saat berkunjung ke pantai
                ini, anda disambut hamparan pasir putih, akan Anda temui sejak
                masuk menuju pantai. Bentangan pantai yang cukup luas ini
                membuat wisatawan dapat leluasa beraktivitas didalamnya. Seperti
                bermain volley ball, membangun camping ground hingga bermain
                sepak bola.
              </p>
            </div>
            <div>
              <div className="user d-flex gap-4 ">
                <Link
                  to="/datapemandu"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconuser}
                    alt="user"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Cari pemandu</p>
                </Link>
                <Link
                  to="https://maps.app.goo.gl/R9bCo2qiF87yBuuh6"
                  className="d-flex text-decoration-none text-white gap-2 "
                >
                  <img
                    src={iconmap}
                    alt="map"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                  <p>Maps</p>
                </Link>
              </div>
              <img className="img-fluid" src={Picture3} alt="Picture 3" />
            </div>
          </div>
        </section>
      </div>
      <Footercomponent />
    </div>
  );
};

export default WisatapagesA;

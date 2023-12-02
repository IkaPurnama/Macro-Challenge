import React from "react";
import icon1 from "../../assets/img/iconprofessional.png";
import icon2 from "../../assets/img/icondestinasi.png";
import icon3 from "../../assets/img/iconterpercaya.png";
import icon4 from "../../assets/img/iconuser1.png";

const Strengthcard = () => {
  return (
    <div>
      <div className="profile-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="cards bg-body-secondary">
                <div className=" img2">
                  <img src={icon1} alt="kemudahan pengguna" />
                </div>
                <div className=" main-text">
                  <h2 className="text-dark">Profesional</h2>
                  <p className="text-dark">
                    Para pemandu wisata memiliki lisensi yang berfungsi sebagai
                    izin operasional{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cards bg-body-secondary">
                <div className="img2">
                  <img src={icon2} alt="kemudahan pengguna" />
                </div>
                <div className="main-text ">
                  <h2 className="text-dark">Terpercaya</h2>
                  <p className="text-dark justify-text-center">
                    Website Kami mudah digunakan sehingga Anda dapat dengan
                    cepat menemukan apa yang Anda cari tanpa kesulitan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cards bg-body-secondary">
                <div className="img2">
                  <img src={icon3} alt="kemudahan pengguna" />
                </div>
                <div className="main-text ">
                  <h2 className="text-dark">Destinasi Pilihan</h2>
                  <p className="text-dark justify-text-center">
                    {" "}
                    Kami terus berinovasi untuk memberikan pengalaman pengguna
                    terbaik dan terbaru di website kami.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cards bg-body-secondary">
                <div className="img2">
                  <img src={icon4} alt="kemudahan pengguna" />
                </div>
                <div className="main-text">
                  <h2 className="text-dark">Kemudahan User</h2>
                  <p className="text-dark">
                    Website kami mudah digunakan, sehingga Anda dapat dengan
                    cepat menemukan apa yang Anda cari tanpa kesulitan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strengthcard;

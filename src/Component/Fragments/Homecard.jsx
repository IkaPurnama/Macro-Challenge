import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Wisata Alam",
    desc: "Desa Gumanano, Kec. Mawasangka",
    images: "/images/wisatapanmut1.png",
    url: "/wisataA",
  },
  {
    id: 2,
    title: "Wisata Sejarah",
    desc: "Bau Bau, Kel. Wolio",
    images: "/images/wisatalasaidewa2.png",
    url: "/wisataS",
  },
  {
    id: 3,
    title: "Wisata Budaya",
    desc: "Kel. Watolo, Kec. Mawasangka",
    images: "/images/wisatabajo3.png",
    url: "/wisata",
  },
];

const Homecard = () => {
  return (
    <>
      {products.map((product) => (
        <div className="cardhome d-grid g-lg-1">
          <div className="cardhome-container " key={product.id}>
            <div className="text-center ">
              <Link to={product.url}>
                <img
                  src={product.images}
                  className="img-fluid"
                  alt="Gambar Wisata"
                />
                <div className="cardhome-body">
                  <h5 className="text-white fs-6 fw-semibold ">
                    {product.title}
                  </h5>
                  <p className="text-white justify-content-center mt-1">
                    {product.desc}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Homecard;

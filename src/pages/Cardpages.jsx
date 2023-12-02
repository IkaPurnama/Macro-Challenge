import React from "react";

const products = [
  {
    id: 1,
    title: "pantai mutiara",
    desc: "Desa gumanano, kec.mawasangka",
    images: "/images/wisatapanmut1.png",
  },
];

const Cardcomponent = () => {
  return (
    <>
      {products.map((product) => (
        <div className="card">
          <div className="card-container" key={product.id}>
            <div className="text-center">
              <img src={product.images} alt="Gambar Card" />
              <div className="card-body">
                <h2 className="text-white fs-4 fw-bold">{product.title}</h2>
                <p className="text-info fs-6">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardcomponent;

import React from 'react';

const products = [
  {
    id: 1,
    title:"VISI",
    desc: "Menjadikan Jasa Wisata Pemandu yang Terbaik Di Buton Tengah",
    images: "/images/visi.jpg",
  },
  {
    id: 2,
    title:"MISI",
    desc: "Mengedepankan pelayanan terbaik untuk semua pelanggan dengan layanan tour guide",
    images: "/images/misi.jpg",
  },
  {
    id: 3,
   title:"MOTTO",
    desc: "Berikanlah pelayanan yang terbaik dan pastikanlah pelanggan merasa puas",
    images: "/images/motto.png",
  },
  
];

const AboutCard = () => {
  return (
    <>
      {products.map((product) => (
        <div className="aboutcard d-grid gap-3">
          <div className="aboutcard-container " key={product.id}>
            <div className="text-center ">
              <img src={product.images} className='img-fluid' alt="Gambar wisata" />
              <div className="aboutcard-body p-5 h-100">
                <h2 className="text-white fs-4 fw-bold">{product.title}</h2>
                <p className="text-white fw-bold justify-content-center mt-2">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AboutCard;
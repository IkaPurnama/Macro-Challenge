import Carousel from "react-bootstrap/Carousel";
import React from "react";
import image1 from "../../assets/img/wisata/wisataS/benteng1.png";
import image2 from "../../assets/img/wisata/wisataS/benteng2.png";
import image3 from "../../assets/img/wisata/wisataS/benteng3.png";
import image4 from "../../assets/img/wisata/wisataS/benteng4.png";
import iconuser from "/images/iconuser.png";
import iconmap from "/images/iconmap.png";
import { Link } from "react-router-dom";
import "../../style.css";

function CarouselWS2() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-60">
      <div style={{ width: "40%", position: "absolute", marginRight: "15rem" }}>
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
            to="https://maps.app.goo.gl/gXG4MR8MjerwpxDK7"
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
        <Carousel>
          <Carousel.Item>
            <img src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselWS2;

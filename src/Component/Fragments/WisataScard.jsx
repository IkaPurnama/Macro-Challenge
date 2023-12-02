import Card from "react-bootstrap/Card";
import CarouselWS2 from "./CarouselWisataS2";

const CenteredCard = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "35vh" }}
    >
      <Card className="card-box">
        <div className="text-space">
          <Card.Title
            style={{ marginRight: "55px" }}
            className="mt-5 mb-4 fs-2 text-light text-end"
          >
            POPULER
          </Card.Title>
        </div>

        <div className="flex-card-box1">
          <div className="text-box1">
            <Card.Text className="fs-3 text-light text-center">
              Benteng Keraton Kesultanan Buton
            </Card.Text>
            <Card.Text className="text-light">
              Benteng Wolio dibangun pada abad ke-14 oleh Kerajaan Wolio.
              Awalnya digunakan sebagai tempat pertahanan dan penjagaan terhadap
              kemungkinan ancaman dan serangan dari luar. Struktur batu ini
              merupakan bukti sejarah peradaban Buton. Benteng Wolio, juga
              dikenal sebagai Benteng Batu Atas atau Benteng Baubau, adalah
              salah satu situs sejarah yang terletak di Kota Baubau, Pulau Buton
              Tengah, Provinsi Sulawesi Tenggara, Indonesia. Benteng ini adalah
              peninggalan bersejarah yang memiliki makna khusus bagi sejarah dan
              budaya Buton
            </Card.Text>
          </div>
          <CarouselWS2 />
        </div>
      </Card>
    </div>
  );
};

export default CenteredCard;

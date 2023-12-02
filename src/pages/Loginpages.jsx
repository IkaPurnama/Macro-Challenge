import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";
import { Link } from "react-router-dom";

const Loginpages = () => {
  return (
    <>
      <div className="login  h-vh-100">
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
          {" "}
          <div className="body">
            <div className="login-container">
              <div className="text-center text-white lh-1 mb-5">
                <h2 className="fw-bold">Tour Tech</h2>
                <p className="small fw-bold">
                  Buka Pintu ke Dunia yang Luar Biasa
                </p>
              </div>
              <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                  <label for="username">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="masukan email "
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Katas sandi</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="masukan kata sanda"
                    required
                  />
                </div>
                <h6 className="text-white text-start w-100">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-decoration-none ">
                    Daftar di sini
                  </Link>
                </h6>
              </form>
              <Link to="/home"><Button>Masuk</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginpages;

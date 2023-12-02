import Button from "../Component/Elements/Buttons/Button";
import Bgimage from "../assets/img/welcomeimg.png";
import { Link } from "react-router-dom";

const Registerpages = () => {
  return (
    <>
      <div className="register  h-vh-100">
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
                <h2>Register</h2>
                <div className="form-group">
                  <label for="username">Nama Pengguna</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="masukan nama"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukan Email "
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="password">Kata sandi</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="masukan kata sandi"
                    required
                  />
                </div>
                <h6 className="text-white">
                  Sudah punya Akun?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Masuk sekarang
                  </Link>
                </h6>
              </form>
              <a href="/login"><Button>Register</Button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registerpages;

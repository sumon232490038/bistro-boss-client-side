import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser, setLoading } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.from?.pathname || "/";

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const passowrd = form.passowrd.value;
    loginUser(email, passowrd)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login SuccessFull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptcha = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (validateCaptcha(value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="text-center lg:text-left md:w-1/2 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="passowrd"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleCaptcha}
                  placeholder="Type the captcha abvobe"
                  className="input input-bordered"
                  name="captcha"
                  required
                />

                <div className="form-control mt-6"></div>
                {/* TODO: use captcha for disable button */}
                <button disabled={false} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center flex-col mb-2">
              <h1 className="text-center -mt-5 mb-2">
                New here?
                <Link to={"/signup"} className="text-red-600">
                  Create a New Account
                </Link>
              </h1>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

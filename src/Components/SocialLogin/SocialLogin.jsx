import { ImGoogle3 } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { TiSocialFacebookCircular } from "react-icons/ti";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { loginByGoogle, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const from = location?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    loginByGoogle()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {});
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex items-center justify-center gap-5">
      <button onClick={handleGoogleSignIn} className="btn bg-[#D1A054] text-xl">
        <ImGoogle3 />
      </button>
      <button className="btn bg-[#D1A054]  text-xl ">
        <VscGithub />
      </button>
      <button className="btn bg-[#D1A054] text-3xl ">
        <TiSocialFacebookCircular />
      </button>
    </div>
  );
};

export default SocialLogin;

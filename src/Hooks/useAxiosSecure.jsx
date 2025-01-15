import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const Navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "access-token"
      )}`;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error?.response?.status;

      if (status === 401 || status === 403) {
        Navigate("/login");
        await logOut();
      }

      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;

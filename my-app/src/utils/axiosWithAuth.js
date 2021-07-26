import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:5001",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;

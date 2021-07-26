import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://fitness-club-be.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;

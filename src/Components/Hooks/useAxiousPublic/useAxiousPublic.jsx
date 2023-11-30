import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://employe-management-nine.vercel.app",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};



export default useAxiousPublic;

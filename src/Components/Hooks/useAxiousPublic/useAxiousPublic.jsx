import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://management-lake.vercel.app",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};



export default useAxiousPublic;

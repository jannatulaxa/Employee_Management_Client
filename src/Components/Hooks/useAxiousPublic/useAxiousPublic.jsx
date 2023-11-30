import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5002",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};



export default useAxiousPublic;

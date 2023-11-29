import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ExtraLogin from "../../Components/Shared/ExtraLogin/ExtraLogin";
import { AwesomeButton } from "react-awesome-button";
import axios from "axios";
import HelmateTittle from "../../Components/Shared/HelmateTittle/HelmateTittle";
import useAuthProvider from "../../Components/Hooks/useAuthProvider/useAuthProvider";
import useAxiousPublic from "../../Components/Hooks/useAxiousPublic/useAxiousPublic";
import Select from "react-select";
import { useState } from "react";

// import Hosting image URL
const image_hosting = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting}`;
const Register = () => {
  const { userSignUp, updateUserProfile } = useAuthProvider();
  const axiosPublic = useAxiousPublic();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const options = [
    {value: "Hr", label: "Hr"},
    {value: "Employe" ,label: "Employe"},
  ]
    


  const onSubmit = async (data, e) => {
    const formData = new FormData();
    formData.append("image", data?.photo[0]);

    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const image = res.data.data.display_url;
    console.log(data);
    userSignUp(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, image);
        axiosPublic
          .post("/users", {
            name: data.name,
            accuntNo: data.accuntNo,
            email: data.email,
            image: image,
            salary: data.salary,
            role: selectedOption.value,
            verified:"no",
          })
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire("Successfully", "You create the account", "success");
              e.target.reset();
              navigate("/");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error?.message;
        Swal.fire("Opps!!!!", errorMessage, "error");
      });
  };

  return (
    <>
      <HelmateTittle helmetTittle={"Pay-Role | Register"}></HelmateTittle>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name")}
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="my-6">
                <label className="label">
                  <span className="label-text ">
                    Choose a Photo for Your Profile*
                  </span>
                </label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  placeholder="Choose a file"
                  className="file-input file-input-bordered w-full"
                />{" "}
                {errors.photo && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bank Account No</span>
                </label>
                <input
                  type="number"
                  {...register("accuntNo", { required: true })}
                  placeholder="Bank Account No"
                  className="input input-bordered"
                />
                {errors.accuntNo && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expected Salary</span>
                </label>
                <input
                  type="number"
                  {...register("salary")}
                  placeholder="Expected Salary"
                  className="input input-bordered"
                />
                {errors.salary && <span className="text-red-600">This field is required</span>}
              </div>
              
              <div>
              <label className="label">
                  <span className="label-text">Role</span>
                </label>
                  <Select className="bg-transparent"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    required
                  />
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="You Should enter at last 6 character one special character one uppercase one lower letter and a special character"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">This field is required</span>
                )}
              

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <AwesomeButton type="primary">Register</AwesomeButton>
              </div>
            </form>
            <p className="text-center mb-10">
              <small>
                Have you an account ? go to{" "}
                <Link to={"/Login"} className="font-bold text-sm text-blue-600">
                  Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";
import useAuthProvider from "../Components/Hooks/useAuthProvider/useAuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthProvider();
  const location = useLocation();
  // flex justify-center flex-col items-center
  if (loading) {
    return (
      <div>
        <div className="hidden md:flex gap-10 justify-center items-center">
          <div className="p-10 min-h-screen space-y-5">
            <div className="flex gap-10 justify-center items-center">
              <Skeleton variant="circular" width={100} height={100} />
              <Skeleton variant="circular" width={100} height={100} />
              <Skeleton variant="circular" width={100} height={100} />
            </div>
            <div>
              <Skeleton variant="text" width={610} sx={{ fontSize: "5rem" }} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={610} height={60} />
            </div>
            <div>
              <Skeleton variant="rounded" width={610} height={60} />
            </div>
            <div>
              <Skeleton variant="rounded" width={610} height={60} />
            </div>
          </div>
        </div>

        {/* for Phone device */}
        <div className=" md:hidden flex gap-10 justify-center items-center">
          <div className="p-10 min-h-screen space-y-5">
            <div className="flex gap-10 justify-center items-center">
              <Skeleton variant="circular" width={50} height={50} />
              <Skeleton variant="circular" width={50} height={50} />
              <Skeleton variant="circular" width={50} height={50} />
            </div>
            <div>
              <Skeleton variant="text" width={350} sx={{ fontSize: "5rem" }} />
            </div>
            <div>
              <Skeleton variant="text" width={350} sx={{ fontSize: "5rem" }} />
            </div>
            <div>
              <Skeleton variant="rectangular" width={350} height={60} />
            </div>
            <div>
              <Skeleton variant="rounded" width={350} height={60} />
            </div>
            <div>
              <Skeleton variant="rounded" width={350} height={60} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};


export default PrivateRoute;

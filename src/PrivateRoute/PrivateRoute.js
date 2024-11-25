
import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { BallTriangle } from  'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin)

  const location = useLocation();

  if (loading || isAdminLoading) {
    return  <div className="centered-container">
        <BallTriangle
   
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
  />
        </div>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} ></Navigate>
}

export default PrivateRoute;
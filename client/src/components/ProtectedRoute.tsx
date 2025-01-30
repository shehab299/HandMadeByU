import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";

type prortectedRouteType = {
  children: ReactNode;
};

function ProtectedRoute({ children }: prortectedRouteType) {
  console.log("inside protected route");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!!token) return children;
  else return null;
}

export default ProtectedRoute;

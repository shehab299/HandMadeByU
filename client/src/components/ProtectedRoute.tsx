import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type prortectedRouteType = {
  children: ReactNode;
};

function ProtectedRoute({ children }: prortectedRouteType) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!!token) return children;
  else return null;
}

export default ProtectedRoute;

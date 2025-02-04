import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
}

export { useAuthCheck };

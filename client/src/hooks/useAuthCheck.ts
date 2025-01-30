import { useEffect } from "react";
import { useNavigate } from "react-router";

function useAuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
}

export { useAuthCheck };

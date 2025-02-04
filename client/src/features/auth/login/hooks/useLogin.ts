import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login } from "../services/login";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      navigate("/");
      toast.success("Logged in successfully");
      localStorage.setItem("token", data.token);
    },
  });

  return { login: mutate, isPending };
}

export { useLogin };

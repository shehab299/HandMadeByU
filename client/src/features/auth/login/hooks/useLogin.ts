import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login } from "../services/login";

function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success("Login successful");
      localStorage.setItem("token", data.token);
    },
  });

  return { login: mutate, isPending };
}

export { useLogin };

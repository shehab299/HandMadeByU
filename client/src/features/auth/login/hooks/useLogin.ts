import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login } from "../services/login";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (data) => {
      localStorage.setItem("token", data.token);
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
      toast.success("Logged in successfully");
    },
  });

  return { login: mutate, isPending };
}

export { useLogin };

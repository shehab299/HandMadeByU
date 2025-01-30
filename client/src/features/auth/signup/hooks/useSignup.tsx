import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup } from "../services/signup";
import { useLogin } from "@features/auth/login/hooks/useLogin";

function useSignup() {
  const queryClient = useQueryClient();
  const { login } = useLogin();

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries({ queryKey: ["isAuth"] });
      login({ email: data.user.email, password: data.password });
    },
  });

  return { signup: mutate, isPending };
}

export { useSignup };

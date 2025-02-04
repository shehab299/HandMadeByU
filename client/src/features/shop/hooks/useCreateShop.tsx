import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createShop } from "../services/createShop";
import { useNavigate } from "react-router-dom";

function useCreateShop() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: createShop,
    onSuccess: () => {
      toast.success("Shop created successfully");
      queryClient.invalidateQueries({ queryKey: ["my-shops"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createShop: mutate, isPending };
}

export { useCreateShop };

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createProduct } from "../services/createProduct";
import { useParams } from "react-router";
import { createdProduct } from "@types";

function useCreateProduct() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (product: createdProduct) =>
      createProduct({ shopId: id!, product }),
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: [`shops-${id}-products`] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createProduct: mutate, isPending };
}

export { useCreateProduct };

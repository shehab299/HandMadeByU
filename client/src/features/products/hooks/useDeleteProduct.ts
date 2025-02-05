import { useParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteProduct } from "../services/deleteProduct";

function useDeleteProduct() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (productId: string) =>
      deleteProduct({ shopId: id!, productId }),
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: [`shop-${id}-products`] });
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return { deleteProduct: mutate, isPending };
}

export { useDeleteProduct };

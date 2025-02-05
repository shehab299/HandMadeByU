import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createProduct } from "../services/createProduct";
import { useParams } from "react-router";

export type Product = {
  name: string;
  price: number;
  description: string;
  quantity: number;
  image: File;
};

function useCreateProduct() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (product: Product) => createProduct({ shopId: id!, product }),
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: [`shop-${id}-products`] });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { createProduct: mutate, isPending };
}

export { useCreateProduct };

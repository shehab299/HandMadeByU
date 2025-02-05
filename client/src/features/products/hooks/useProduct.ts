import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/getProduct";
import { Product } from "@types";

function useProduct({
  shopId,
  productId,
}: {
  shopId: string;
  productId: string;
}) {
  const { data, isPending } = useQuery<Product>({
    queryKey: [`shop-${shopId}-products`],
    queryFn: () => getProduct({ shopId, productId }),
  });
  return { product: data, isPending };
}

export { useProduct };

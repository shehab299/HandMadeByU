import { useQuery } from "@tanstack/react-query";
import { getShopProducts } from "../services/getShopProducts";
import { Product } from "@types";

function useShopProducts({ shopId }: { shopId: string }) {
  const { data, isPending } = useQuery<Product[]>({
    queryKey: [`shop-${shopId}-products`],
    queryFn: () => getShopProducts({ shopId }),
  });
  return { products: data, isPending };
}

export { useShopProducts };

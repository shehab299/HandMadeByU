import { useQuery } from "@tanstack/react-query";
import { getMyShops } from "../services/getMyShops";
import { Shop } from "@types";

function useMyShops() {
  const { data, isPending } = useQuery<Shop[]>({
    queryKey: ["my-shops"],
    queryFn: getMyShops,
  });
  return { shops: data, isPending };
}

export { useMyShops };

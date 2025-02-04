import { useQuery } from "@tanstack/react-query";
import { getShops } from "../services/getShops";
import { Shop } from "@types";
import { useAuth } from "context/AuthContext";

function useMyShops() {
  const { user } = useAuth();
  const { data, isPending } = useQuery<Shop[]>({
    queryKey: ["my-shops"],
    queryFn: () => getShops({ id: user?.id }),
  });
  return { shops: data, isPending };
}

function useAllShops() {
  const { data, isPending } = useQuery<Shop[]>({
    queryKey: ["all-shops"],
    queryFn: () => getShops(),
  });
  return { shops: data, isPending };
}

export { useMyShops, useAllShops };

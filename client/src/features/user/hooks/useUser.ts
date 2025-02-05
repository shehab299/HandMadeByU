import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/getUser";

export function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  return { user, isPending };
}

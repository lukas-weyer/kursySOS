import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../queries/usersQuery";

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

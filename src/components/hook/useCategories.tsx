import { GET_CATEGORIES } from "@/graphql";
import { useQuery } from "@apollo/client";

export default function useCategories() {
  const { data, loading } = useQuery(GET_CATEGORIES);
  return { categories: data?.categories, categoryLoading: loading };
}

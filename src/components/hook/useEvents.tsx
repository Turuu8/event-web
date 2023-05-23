import { GET_EVENTS } from "@/graphql";
import { useQuery } from "@apollo/client";

export default function useEvents() {
  const { data, loading } = useQuery(GET_EVENTS);
  return { events: data?.events, eventsLoading: loading };
}

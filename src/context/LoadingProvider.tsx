import useCategories from "@/components/hook/useCategories";
import useEvents from "@/components/hook/useEvents";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const Loading = createContext<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const { categoryLoading } = useCategories();
  const { eventsLoading } = useEvents();

  if (eventsLoading === true && categoryLoading === true) {
    console.log(eventsLoading, categoryLoading);
    // setLoading(true);
  } else {
    console.log(eventsLoading, categoryLoading);
    // setLoading(false);
  }

  return <Loading.Provider value={{ loading, setLoading }}>{children}</Loading.Provider>;
};

export const useLoading = () => useContext(Loading);

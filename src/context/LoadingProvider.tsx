import useCategories from "@/components/hook/useCategories";
import useEvents from "@/components/hook/useEvents";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

const Loading = createContext<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const { categoryLoading } = useCategories();
  const { eventsLoading } = useEvents();

  useEffect(() => {
    if (eventsLoading === true && categoryLoading === true) {
      console.log(eventsLoading, categoryLoading);
      setLoading(false);
    } else {
      console.log(eventsLoading, categoryLoading);
      setLoading(true);
    }
  }, []);

  return <Loading.Provider value={{ loading, setLoading }}>{children}</Loading.Provider>;
};

export const useLoading = () => useContext(Loading);

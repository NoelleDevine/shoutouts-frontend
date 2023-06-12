import { ReactNode, useEffect, useState } from "react";
import { getAllShoutouts } from "../services/shoutoutApiService";
import Shoutout from "../models/Shoutout";
import ShoutContext from "./ShoutContext";

function ShoutContextProvider({ children }: { children: ReactNode }) {
  const [allShouts, setAllShoutouts] = useState<Shoutout[]>([]);

  const updateShouts = (): void => {
    //call api, set shoutouts
    getAllShoutouts().then((res) => {
      //.then is for async could also do const res = await
      setAllShoutouts(res);
    });
  };

  useEffect(() => {
    updateShouts();
  }, []);

  return (
    <ShoutContext.Provider value={{ allShouts }}>
      {children}
    </ShoutContext.Provider>
  );
}
export default ShoutContextProvider;

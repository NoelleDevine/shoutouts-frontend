import { useEffect, useState } from "react";
import "./Main.css";
import { getAllShoutouts } from "../services/shoutoutApiService";
import Shoutout from "../models/Shoutout";
import NewSOForm from "./NewSOForm";
import ShoutoutList from "./ShoutoutList";

const Main = () => {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);

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
    <main className="Main">
      <NewSOForm updateShouts={updateShouts} />
      <ShoutoutList listofShouts={allShoutouts} />
    </main>
  );
};

export default Main;

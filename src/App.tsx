import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewSOForm from "./components/NewSOForm";
import ShoutoutList from "./components/ShoutoutList";
import Shoutout from "./models/Shoutout";
import { getAllShoutouts } from "./services/shoutoutApiService";

function App() {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);

  useEffect(() => {
    //call api, set shoutouts
    getAllShoutouts().then((res) => {
      //.then is for async could also do const res = await getallProducts();
      setAllShoutouts(res);
    });
  }, []);

  return (
    <div className="App">
      <NewSOForm />
      <ShoutoutList listofShouts={allShoutouts} />
    </div>
  );
}

export default App;

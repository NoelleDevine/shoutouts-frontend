import { useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import Shoutout from "../models/Shoutout";
import { getPersonShoutouts } from "../services/shoutoutApiService";
import ShoutoutList from "./ShoutoutList";
import NewSOForm from "./NewSOForm";

const Details = () => {
  const namePathParam: string = useParams().name!;
  const [personShoutouts, setPersonShoutouts] = useState<Shoutout[]>([]);

  const updateShouts = (): void => {
    //call api, set shoutouts
    getPersonShoutouts(namePathParam).then((res) => {
      //.then is for async could also do const res = await
      setPersonShoutouts(res);
    });
  };

  useEffect(() => {
    getPersonShoutouts(namePathParam).then((res) => {
      //.then is for async could also do const res = await
      setPersonShoutouts(res);
    });
  }, [namePathParam]); //re-run IF name changes),

  return (
    <div className="Details">
      <ShoutoutList listofShouts={personShoutouts} name={namePathParam} />
      <NewSOForm updateShouts={updateShouts} name={namePathParam} />
    </div>
  );
};

export default Details;

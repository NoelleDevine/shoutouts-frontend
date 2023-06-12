import { useParams } from "react-router-dom";
import "./FilteredList.css";
import ShoutContext from "../context/ShoutContext";
import { useContext } from "react";
import SingleShoutout from "./SingleShoutout";

const FilteredList = () => {
  const filteredName: string = useParams().name!; //setup in routes as name
  const { allShouts } = useContext(ShoutContext);

  console.log("shouts array:" + allShouts);

  return (
    <div className="FilteredList">
      <h1>Shouts for: {}</h1>
      <ul className="ShoutoutList">
        {allShouts.map((shout) => {
          return (
            shout.from === filteredName && (
              <SingleShoutout key={shout._id} shout={shout} />
            )
          );
        })}
      </ul>
    </div>
  );
};

export default FilteredList;

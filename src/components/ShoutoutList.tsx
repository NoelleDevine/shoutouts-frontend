import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";

interface Props {
  listofShouts: Shoutout[];
  name?: string;
}

const ShoutoutList = ({ listofShouts, name }: Props) => {
  return (
    <>
      {name ? <h1>Shout outs from {name} </h1> : <h1>All Shout Outs</h1>}
      <ul className="ShoutoutList">
        {listofShouts.map((shout) => (
          <SingleShoutout key={shout._id} shout={shout} />
        ))}
      </ul>
    </>
  );
};

export default ShoutoutList;

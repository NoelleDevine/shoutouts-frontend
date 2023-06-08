import Shoutout from "../models/Shoutout";
import "./ShoutoutList.css";
import SingleShoutout from "./SingleShoutout";

interface Props {
  listofShouts: Shoutout[];
}

const ShoutoutList = ({ listofShouts }: Props) => {
  return (
    <>
      <h1>All Shout Outs</h1>
      <ul className="ShoutoutList">
        {listofShouts.map((shout) => (
          <SingleShoutout key={shout._id} shout={shout} />
        ))}
      </ul>
    </>
    //map here to single
  );
};

export default ShoutoutList;

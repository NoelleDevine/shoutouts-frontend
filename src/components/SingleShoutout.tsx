import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./SingleShoutout.css";

interface Props {
  shout: Shoutout;
}

const SingleShoutout = ({ shout }: Props) => {
  return (
    <div className="SingleShoutoutBox">
      <li className="SingleShoutoutListItem">
        <h3>Shout out to {shout.to}</h3>
        <h4>
          -from{" "}
          <Link to={`/user/${encodeURIComponent(shout.from)}`}>
            {shout.from}
          </Link>
        </h4>
        <p>{shout.text}</p>
      </li>
    </div>
  );
};

export default SingleShoutout;

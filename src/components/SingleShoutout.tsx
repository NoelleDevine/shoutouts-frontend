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
        <h4>-from {shout.from}</h4>
        <p>{shout.text}</p>
      </li>
    </div>
  );
};

export default SingleShoutout;

import { FormEvent, useState } from "react";
import "./NewSOForm.css";
import Shoutout from "../models/Shoutout";
import { addShoutout } from "../services/shoutoutApiService";

const NewSOForm = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutOutText, setshoutOutText] = useState("");

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    let newShoutout: Shoutout = {
      to: to,
      from: from,
      text: shoutOutText,
    };

    await addShoutout(newShoutout);

    //update();
    setTo("");
    setFrom("");
    setshoutOutText("");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="name">To:</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From:</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="shoutOutText">Shout Out</label>
      <textarea
        name="shoutOutText"
        id="shoutOutText"
        rows={4}
        cols={50}
        value={shoutOutText}
        onChange={(e) => setshoutOutText(e.target.value)}
      />
      <button>Submit Shout Out!</button>
    </form>
  );
};

export default NewSOForm;

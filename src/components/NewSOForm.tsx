import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import "./NewSOForm.css";
import Shoutout from "../models/Shoutout";
import { addShoutout } from "../services/shoutoutApiService";
import AuthContext from "../context/AuthContext";
import { storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface Props {
  updateShouts: () => void;
  name?: string;
}

const NewSOForm = ({ updateShouts, name }: Props) => {
  const { user } = useContext(AuthContext);

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [shoutOutText, setshoutOutText] = useState("");

  const fileUploadRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFrom(user.displayName || "");
    }
  }, [user]);

  useEffect(() => {
    if (name) {
      setTo(name || "");
    }
  }, [name]);

  let newShoutout: Shoutout = {
    to: to,
    from: from,
    text: shoutOutText,
    authorPhoto: user?.photoURL || "",
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    const findFiles = fileUploadRef.current?.files;
    if (findFiles && findFiles[0]) {
      const newFile = findFiles[0];
      const storageRef = ref(storage, newFile.name);
      uploadBytes(storageRef, newFile).then((snapshot) => {
        console.log(snapshot.ref.fullPath);
        getDownloadURL(snapshot.ref).then((url) => console.log(url));
      });
      //uploadbytes is async, so when returned get the download URL
    }

    await addShoutout(newShoutout);

    updateShouts();
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
        disabled={user ? true : false}
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

      <label htmlFor="photo">Upload a photo:</label>
      <input type="file" name="photo" id="photo" ref={fileUploadRef} />

      <button>Submit Shout Out!</button>
    </form>
  );
};

export default NewSOForm;

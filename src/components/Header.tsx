import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className="Header">
      <h1>
        <Link className="title" to="/">
          Shoutout App
        </Link>
      </h1>
      {user ? (
        <div>
          <p>
            Welcome {user?.displayName}
            <img
              className="userImage"
              src={user?.photoURL || ""}
              alt="profile image"
            />
          </p>
        </div>
      ) : (
        <p>Please Sign In</p>
      )}
      <button onClick={() => signInWithGoogle()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </header>
  );
};

export default Header;

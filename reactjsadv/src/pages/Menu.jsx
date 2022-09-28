import React, { useContext } from "react";
import EditProfile from "../components/EditProfile";
import { AppContext } from "../App";

export default function Menu() {
  const { username, setUserName } = useContext(AppContext);
  
  return (
    <div>
      <EditProfile />
      <h1>Menu</h1>
      <h1>Working</h1>
      <h2>userName: {username.fullname}</h2>
      <button
        onClick={() => {
          setUserName("ADINATH");
        }}
      >
        Name
      </button>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export default function Contact() {
  const { username, setUserName } = useContext(AppContext);
  const [userNameADD, setuserNameADD] = useState("");
  return (
    <div>
      <h1>Contact Page </h1>
      <h3>Name: {username}</h3>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>EditProfile</h1>
      <input
        type="text"
        onChange={(e) => {
          setuserNameADD(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(userNameADD);
        }}
      >
        ADD
      </button>
      <br /><br />
    </div>
  );
}

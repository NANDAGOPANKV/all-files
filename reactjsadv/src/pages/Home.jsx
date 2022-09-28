import React from "react";
// react-queiry
import { useQuery } from "@tanstack/react-query";
// axios
import axios from "axios";
// custom
import { UseToogle } from "../custom/UseToogle";

export default function Home() {
  const { Toogle, state } = UseToogle();
  const { data: values, isLoading, refetch } = useQuery(["dat"], async () => {
    return await axios
      .get("https://catfact.ninja/fact")
      .then((res) => res.data);
  });
  if (isLoading) {
    return (
      <div
        style={{
          height: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <p> Home </p>
      {<p>{values ? values.fact : console.log("No Data Here Now")}</p>}
      {values ? <button onClick={refetch}>Refetch</button> : ""}
      <br />
      <br />
      <br />
      <button onClick={Toogle}>SHOW/HIDE</button>
      {state && <h1>Text Here</h1>}
    </div>
  );
}

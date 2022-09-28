import { useState } from "react";
import "./App.css";
import Axios from "axios";

function Dos() {
  const [fetchedData, setFetchedData] = useState("");
  const [checkAge, setCheckAge] = useState("");
  const [myage, setMyAge] = useState("");
  const handleFetchData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFetchedData(res.data);
      console.log("Axios");
    });
  };

  const handleCheckMyAge = () => {
    Axios.get(`https://api.agify.io/?name=${checkAge}`).then((res) => {
      setMyAge(res.data);
    });
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleFetchData}>CHECK CAT FACTS RANDOMLY</button>
      <p>{fetchedData?.fact}</p>
      <br />
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setCheckAge(e.target.value);
        }}
      />
      <button onClick={handleCheckMyAge}>CHECK MY AGE</button>
      {myage ? (
        <div>
          <h1>MyAge: {myage.age}</h1>
          <h2>My Name: {myage.name}</h2>
        </div>
      ) : (
        <p>Enter A Name</p>
      )}
    </div>
  );
}

export default Dos;

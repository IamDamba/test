import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [truc, setTruc] = useState("");
  const fetch = async () => {
    await axios.get("/api/truc").then((res) => {
      setTruc(res.data.text);
    });
  };

  useEffect(() => {
    fetch();
  }, []);
  return <div>{truc}</div>;
};

export default App;

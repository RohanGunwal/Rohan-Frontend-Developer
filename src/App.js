import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { DataContext } from "./Contexts/DataContext/DataContext";
import axios from "axios";

function App() {
  const [rocketData, setRocketData] = useState([]);
  const [capsuleData, setCapsuleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((res) => {
        setCapsuleData(res.data);
      })
      .catch((err) => console.log(err.message));

    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((res) => {
        setRocketData(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <DataContext.Provider
      value={{
        rocketData,
        capsuleData,
      }}
    >
      <div className="App | container-lg font-poppins">
        <Header />
        <Banner />
      </div>
    </DataContext.Provider>
  );
}

export default App;

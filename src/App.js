import React, { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { DataContext } from "./Contexts/DataContext/DataContext";
import axios from "axios";
import SearchForm from "./components/SearchForm/SearchForm";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
  const [rocketData, setRocketData] = useState([]);
  const [capsuleData, setCapsuleData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <DataContext.Provider
      value={{
        rocketData,
        capsuleData,
        loading,
      }}
    >
      <div className="App | container-lg font-poppins">
        <Header />
        {loading ? <Spinner /> : <Banner />}
        <SearchForm />
      </div>
    </DataContext.Provider>
  );
}

export default App;

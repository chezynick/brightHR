import React, { useState } from "react";
import "./App.css";
//import componentsimport Data from "./Data";
import Nav from "./Nav";
import ButtonBar from "./ButtonBar";
import Container from "./Container";
import Data from "./Data";

function App() {
  //set state to import Data and allow to be sorted
  const [DataInfo, setDataInfo] = useState(Data);

  //recieve new array from sort and change state
  const sortedArr = (result) => {
    setDataInfo([...result]);
    return DataInfo, setDataInfo;
  };
  return (
    <div className="App">
      <Nav />
      <ButtonBar DataInfo={DataInfo} sortedArr={sortedArr} />
      <Container DataInfo={DataInfo} setDataInfo={setDataInfo} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import CountryList from "./components/country/CountryList";
import CountryItem from "./components/country/CountryItem";

function App() {
  return (
      <div className="App">
        <CountryList/>
         {/* <CountryItem />*/}
      </div>)
}

export default App;

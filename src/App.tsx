import React from "react";
import "./App.css";
import CountryList from "./components/country/CountryList";
import CountryItem from "./components/country/CountryItem";

function App() {
    //countryList would be home page
  return (
      <div className="App">
        <CountryList/>

      </div>)
}

export default App;

import React from "react";
import "./App.css";

import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import FavoriteList from './pages/Favourite';
import Nav from './components/nav/Nav';
import Footer from './footer/Footer'
import CountryDetails from "./pages/CountryDetails";
import About from "./pages/About";

import { useSelector } from "react-redux";
import { RootState } from './redux/store';
function App() {
    const favouriteData = useSelector((state: RootState) => state.favouriteItem.favouriteCountries);
    return (
      <div className="App">
          <Nav favouriteItem={favouriteData}/>
          <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/favorite" element={<FavoriteList/>}/>
              <Route path="/about" element={<About/>}/>
              <Route
                  path="/countriesDetails/:name"
                  element={<CountryDetails/>}
              />
          </Routes>

          <Footer/>
      </div>
      )
}

export default App;

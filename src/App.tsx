import React from "react";
import "./App.css";

import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import FavoriteList from './pages/Favourite';
import Nav from './components/nav/Nav';
import Footer from './footer/Footer'

/*import { useSelector } from "react-redux";
import { RootState } from './redux/store';*/
function App() {
    return (
      <div className="App">
          <Nav/>
          <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/favorite" element={<FavoriteList/>}/>
          </Routes>
          <Footer/>
      </div>
      )
}

export default App;

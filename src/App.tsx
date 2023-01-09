import React from "react";
import "./App.css";



import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorite from './pages/Favourite';
import Nav from './components/nav/Nav';
/*import { useSelector } from "react-redux";
import { RootState } from './redux/store';*/
function App() {
    //countryList would be home page
  return (
      <div className="App">
          <Nav/>
          <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/favorite" element={<Favorite/>}/>

          </Routes>
      </div>
      )
}

export default App;

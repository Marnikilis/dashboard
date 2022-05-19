import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import React from "react";
import User from "./components/User/User";

const App = () => {
  return (
    <div className={'App'}>
      <div className={'mainContainer'}>
        <Navbar/>
        <div className={'container'}>
          <User/>
          <Routes>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path="*" element={<DashboardPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import MainViewModel from "./model/MainViewModel";
import './index.css';

const Main:React.FC = () => {
  const { handleNavigate } = MainViewModel();

  return (
    <div className="app">
      <h1>Welcome</h1>
      <br />
      <div>
        <p>Goto <a href="javascript:void(0)" onClick={() => handleNavigate('/todo')}>Todo</a></p>
      </div>
    </div>
  )
}

export default Main;